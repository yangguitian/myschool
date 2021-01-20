const state = () => ({
    user:null,
})

const mutations = {
    setUser(state, user) {
        state.user = user;
    },

    logout(state){
        state.user = null;
    }
}
const actions = {
    async refreshUser(context) {
        // debugger
        let user = sessionStorage.getItem("user");
        if(user){
            // 从json字符转换为对象
            user = JSON.parse(user);
            context.commit("setUser", user);
        }
    }
}

export {
    state,
    mutations,
    actions,
}