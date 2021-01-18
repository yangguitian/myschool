import postBody from "~/utils/postbody.js"
const state = () =>({
    Buyobj:{
        buy_id:null,
        buy_name:null,
        buy_desc:null,
        buy_price:null,
        buy_tel:null,
        buy_image:null,
    }
})
const mutations = {
    setDatasbank(state,Buyobj){
        state.Buyobj = Buyobj;
    },
}
const actions = {
    // 向服务器获取当前要编辑数据的
    // 设置到 Supplierobj 上面，页面就自动更新
    async getDatas(context){
        let body = postBody({id:context.state.Buyobj.datasbank_id})
        let Buyobj = await fetch("/api/editbuy",body).then((res)=>res.json());
        context.commit("setDatasbank",Buyobj)
        console.log("Buyobj %O",Buyobj);

    },
    // 页面点保存，就把Supplierobj发送到服务器写入数据库
}
export{
    state,
    mutations
}
