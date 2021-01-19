const defaultMenu = [
    { id: 0, url: "/", name: "主页" },
    { id: 1, url: "/blog", name: "博客" },
    { id: 2, url: "/store", name: "商城" },
    { id: 3, url: "/about", name: "关于" },
];

const state = () => ({
    menu: defaultMenu,
});

const mutations = {
    init(state) {
        state.menu = defaultMenu;
    },

    setMenu(state, menu) {
        state.menu = menu;
    }
}

export {
    state,
    mutations,
    defaultMenu
}


