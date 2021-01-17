import postBody from "~/utils/postbody.js"
const state = () =>({
    Userobj:{
        id:null,
        username:null,
        password:null,
    }
})

const mutations = {
    setDatasbank(state,Userobj){
        state.Userobj = Userobj;
    },
}

const actions = {
    // 向服务器获取当前要编辑数据的
    // 设置到 Supplierobj 上面，页面就自动更新
    async getDatas(context){
        let body = postBody({id:context.state.Userobj.datasbank_id})
        let Userobj = await fetch("/api/edituser",body).then((res)=>res.json());
        context.commit("setDatasbank",Userobj)
        console.log("Userobj %O",Userobj);

    },
    
    
    // 页面点保存，就把Supplierobj发送到服务器写入数据库
}
export{
    state,
    mutations
}
