const state = () => ({
    goods:null
})
const mutations = {
    setGoods(state, goods) {
        state.goods = goods;
    },
}
export {
    state,
    mutations,
}

