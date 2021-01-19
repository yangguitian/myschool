<template>
    <div>
        {{isAdmin | formatAdmin}} 
        {{ test | formatDate }} 
        <span :data-type="type | formatType">{{type | formatType}} </span>
    </div>
</template>
<script>
export default {

    data(){
        return {
            test:new Date(),
            isAdmin:true,
            type:2
        }
    },
    // 这个定义的函数可用将要在页面显示的数据再做一次处理
    filters:{
        formatDate(value){
            let date = new Date(value);
            return date.getFullYear() + "-"+ (date.getMonth()+1) + "-"+ date.getDate();
        },
        formatAdmin(value){
            return value ? "管理员":"用户"
        },
        formatType(value){
            switch (value) {
                case 0:
                    return "全部"
                    break;
                case 1:
                    return "服装"
                    break;
                case 2:
                    return "家用电器"
                    break;
                case 3:
                    return "手机数码"
                    break;
                default:
                    return "未知"
                    break;
            }
        }
    }
}
</script>