import postBody from "~/utils/postbody.js"
const state = () =>({
    Schoolobj:{
        school_id:null,
        school_name:null,
        school_xm:null,
        school_tel:null,
    }
})

const mutations = {
    setDatasbank(state,Schoolobj){
        state.Schoolobj = Schoolobj;
    },
}

const actions = {
    // 向服务器获取当前要编辑数据的
    // 设置到 Supplierobj 上面，页面就自动更新
    async getDatas(context){
        let body = postBody({id:context.state.School.datasbank_id})
        let Schoolobj = await fetch("/api/editschool",body).then((res)=>res.json());
        context.commit("setDatasbank",Schoolobj)
        console.log("Schoolobj %O",Schoolobj);

    },
    
    
    // 页面点保存，就把Supplierobj发送到服务器写入数据库
}
export{
    state,
    mutations
}
