import Router from "koa-router";

const router = new Router();

router.post("/", async (ctx, next) => {

    console.log("body: %O", ctx.request.body);

    let {
        pl_id, pl_name, pl_image, pl_text
    } = ctx.request.body;

    const { Pl } = ctx.orm('yz');
    let user = await Pl.create({
        pl_id, pl_name, pl_image, pl_text
    });
    if (!user) {
        ctx.status = 500;
        ctx.body = JSON.stringify({
            result: false,
            code: "100000",
            title: "新增失败",
            message: "数据库错误！"
        });
        return;
    }

    ctx.status = 200;
    ctx.body = JSON.stringify({
        result: true,
        code: 200,
        title: "新增成功",
        message: `新增成功！`
    });

});
export default router;