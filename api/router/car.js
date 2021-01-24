// API 公共接口 /api
import Router from "koa-router";

const router = new Router();

// 这里定义的 url 路由地址会自动在前面添加 /api
// 所有 /api/channel 的请求会被分流到这里
router.get("/", async (ctx, next) => {

    const { Car } = ctx.orm("yz");
    let list = await Car.findAll();
    if (list.length <= 0) {
        // 获取数据失败
        ctx.status = 500;
        ctx.body = JSON.stringify({
            title: "购物车列表",
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

//获取单个购物车详情 
router.get("/:id", async (ctx) => {
    ctx.type = "text/json";
    let { id } =ctx.params;
    const { Car } = ctx.orm("yz");
    let list = await Car.findAll({
        where: {
            car_id: id
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
    let car = list[0];
    ctx.body = JSON.stringify({
        result:true,
        car
    });
});

/**
 * /api/oaec/team
 * method: delete
 * Car用户删除 
 */
router.post("/Delect", async (ctx, next) => {
    let { id } = ctx.request.body;
    console.log("id: %O", id);
    // ctx.type = "text/json";
    const { Car } = ctx.orm("yz");

    let deletecar = await Car.findAll({
         where: { 
            Car_id: id
            } 
        });
    if (deletecar.length === 0) {
        ctx.status = 500;
        ctx.type = "text/json";
        ctx.body = JSON.stringify({
            result: false,
            message: "不存在该数据",
        });
        return;
    }
    console.log("deletecar: %O", );
    for (let index = 0; index < deletecar.length; index++) {
        const element = deletecar[index];
        // 删除管理员数据
        await element.destroy();
    }
    ctx.status = 200;
    ctx.type = "text/json";
    ctx.body = JSON.stringify({
        result: true,
        message: "删除成功",
        deletecar: deletecar,
    })
    
});


export default router;
