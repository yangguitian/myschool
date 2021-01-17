import postBody from "~/utils/postbody.js"
const state = () =>({
    Goodsobj:{
        goods_id:null,
        goods_name:null,
        goods_desc:null,
        goods_price:null,
        goods_oldprice:null,
        classify_id:null,
        goods_postage:null,
        goods_tel:null,
        goods_image:null,
    }
})

const mutations = {
    setDatasbank(state,Goodsobj){
        state.Goodsobj = Goodsobj;
    },
}

const actions = {
    // 向服务器获取当前要编辑数据的
    // 设置到 Supplierobj 上面，页面就自动更新
    async getDatas(context){
        let body = postBody({id:context.state.Goodsobj.datasbank_id})
        let Goodsobj = await fetch("/api/editgoods",body).then((res)=>res.json());
        context.commit("setDatasbank",Goodsobj)
        console.log("Goodsobj %O",Goodsobj);

    },
    
    
    // 页面点保存，就把Supplierobj发送到服务器写入数据库
}
export{
    state,
    mutations
}
