import Router from "koa-router";

const router = new Router();

router.post("/", async (ctx, next) => {

    console.log("body: %O", ctx.request.body);

    let {
        goods_name,
        goods_desc,
        goods_price,
        goods_oldprice,
        classify_id,
        goods_state,
        goods_postage,
        goods_tel,
        goods_image
    } = ctx.request.body;

    const { goods } = ctx.orm('yz');
    let user = await goods.create({
        goods_name,
        goods_desc,
        goods_price,
        goods_oldprice,
        classify_id,
        goods_state,
        goods_postage,
        goods_tel,
        goods_image
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