import postBody from "~/utils/postbody.js"
const state = () =>({
    Plobj:{
        pl_id:null,
        pl_image:null,
        pl_name:null,
        pl_text:null,
    }
})

const mutations = {
    setDatasbank(state,Plobj){
        state.Plobj = Plobj;
    },
}

const actions = {
    // 向服务器获取当前要编辑数据的
    // 设置到 Supplierobj 上面，页面就自动更新
    async getDatas(context){
        let body = postBody({id:context.state.Plobj.datasbank_id})
        let Plobj = await fetch("/api/editpl",body).then((res)=>res.json());
        context.commit("setDatasbank",Plobj)
        console.log("Plobj %O",Plobj);

    },
    
    
    // 页面点保存，就把Supplierobj发送到服务器写入数据库
}
export{
    state,
    mutations
}
