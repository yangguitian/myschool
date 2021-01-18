import postBody from "~/utils/postbody.js"
const state = () =>({
    Newsobj:{
        news_id:null,
        news_name:null,
        news_desc:null,
        news_date:null,
        news_image:null,
    }
})

const mutations = {
    setDatasbank(state,Newsobj){
        state.Newsobj = Newsobj;
    },
}

const actions = {
    // 向服务器获取当前要编辑数据的
    // 设置到 Supplierobj 上面，页面就自动更新
    async getDatas(context){
        let body = postBody({id:context.state.Newsobj.datasbank_id})
        let Newsobj = await fetch("/api/editnews",body).then((res)=>res.json());
        context.commit("setDatasbank",Newsobj)
        console.log("Newsobj %O",Newsobj);

    },
    
    
    // 页面点保存，就把Supplierobj发送到服务器写入数据库
}
export{
    state,
    mutations
}
