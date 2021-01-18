// API 公共接口 /api
import Router from "koa-router";

const router = new Router();

// 这里定义的 url 路由地址会自动在前面添加 /api
// 所有 /api/store/ 的请求会被分流到这里
router.get("/", async (ctx, next) => {

    const { Buy } = ctx.orm("yz");
    let list = await Buy.findAll();
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


/**
 * /api/oaec/team
 * method: delete
 * buy求购删除 
 */
router.post("/Delect", async (ctx, next) => {
    let { id } = ctx.request.body;
    console.log("id: %O", id);
    // ctx.type = "text/json";
    const { Buy } = ctx.orm("yz");

    let deletebuy = await Buy.findAll({
         where: { 
            buy_id: id
            } 
        });
    if (deletebuy.length === 0) {
        ctx.status = 500;
        ctx.type = "text/json";
        ctx.body = JSON.stringify({
            result: false,
            message: "不存在该数据",
        });
        return;
    }
    console.log("deletebuy: %O", );
    for (let index = 0; index < deletebuy.length; index++) {
        const element = deletebuy[index];
        // 删除管理员数据
        await element.destroy();
    }
    ctx.status = 200;
    ctx.type = "text/json";
    ctx.body = JSON.stringify({
        result: true,
        message: "删除成功",
        deletebuy: deletebuy,
    })
    
});
export default router;
