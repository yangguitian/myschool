// API 公共接口 /api
import Router from "koa-router";

const router = new Router();

// 这里定义的 url 路由地址会自动在前面添加 /api
// 所有 /api/channel 的请求会被分流到这里
router.get("/", async (ctx, next) => {

    const { Goods } = ctx.orm("yz");
    let list = await Goods.findAll();
    if (list.length <= 0) {
        // 获取数据失败
        ctx.status = 500;
        ctx.body = JSON.stringify({
            title: "用户列表",
            errorTitle: "查询失败",
            errorNote: `数据库查询错误！`,
        });
        return;
    }
    //设定返回的类型 是文本的 json
    ctx.type = "text/json";
    // 直接将查找的数据，给客户端自己去显示
    ctx.body = JSON.stringify(list);
});


//获取单个商品详情 
router.get("/:id", async (ctx) => {
    ctx.type = "text/json";
    let { id } =ctx.params;
    const { Goods } = ctx.orm("yz");
    let list = await Goods.findAll({
        where: {
            goods_id: id
        }
    });
    if (list.length <= 0) {
        // 获取数据失败
        ctx.status = 500;
        ctx.body = JSON.stringify({
             result:false,
             message:"不存在指定的数据",
        });
        return;
    }
    // 在这里不判断有多少个商品，显示多少，提示没有商品全部前端页面去处理
    //设定返回的类型 是文本的 json
    
    // 直接将查找的数据，给客户端自己去显示
    let goods = list[0];
    ctx.body = JSON.stringify({
        result:true,
        goods
    });
});



export default router;
