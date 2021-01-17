import Router from "koa-router";
const router = new Router();

router.get("/", async (ctx, next) => {
    const { User } = ctx.orm("yz");
    let users = await User.findAll({
        where: {
            id
        }
    });
    console.log(users);
    if (users.length <= 0) {
        ctx.status = 500;
        ctx.body = JSON.stringify({ 
            result: false,
            title: "问题库列表",
            errorTitle: "查询失败",
            errorNote: `数据库查询错误！`, 
        })
        return;
    }
    ctx.type = "text/json";
    ctx.body = JSON.stringify({ 
        result:true,
        users
     })
})

router.post("/edit", async(ctx,next)=>{
    let{id,username,password} = ctx.request.body;
        console.log( ctx.request.body);
        const { User } = ctx.orm("yz");
        let list = await User.update({
            id,username,password
        },{
            where:{
                id,
        }
        });
        if (!list) {
            ctx.status = 500;
            ctx.body = JSON.stringify({
                result: false,
                code: "100000",
                title: "修改失败",
                message: "数据库错误！"
            });
            return;
        }
    
        ctx.status = 200;
        ctx.body = JSON.stringify({
            result: true,
            code: 200,
            title: "修改成功",
            message: `修改成功！`
        });
    

})
export default router;