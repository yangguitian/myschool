import postBody from "~/utils/postbody.js"

const state = () => ({
  userData: null,
  addatabankData: null,

  list: [],
  // 查询
  info: null,
 
});

const mutations = {
  setuserData(state, item) {
    console.log("设置删除的管理员数据：%O", item);
    state.userData = item;
  },
  clearuserData(state) {
    console.log("清除删除的管理员数据：%O", state.userData);
    state.userData = null;
  },


  // setTabList(state, list) {
  //   state.list = list;
  // },
  // // 查看
  // setInfo(state, info) {
  //   state.info = info;
  // }
};

const actions = {
  // 用户的删除
  async deleteUser(context, page) {
    // console.log(
    //   "跟服务器说删除 id为: %O 的数据",
    //   context.state.userData.id
    // );
    console.log("看这里：", context);
    console.log("在看这里：", page);
    console.log("在看这里：", context.state.userData.id);
    let body = postBody({ id: context.state.userData.id });
    let result = await fetch("/api/Aduser/DelectUser", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
      },
      body
    }).then((res) => res.json());
    console.log("result: %O", result);
    // 删除成功需要清除管理员数据
    context.commit("clearuserData");
    // 获得操作数据，给页面反馈
    page.finishDelect(result);
  },
  // 商品删除
  async deleteGoods(context, page) {
    console.log("看这里：", context);
    console.log("在看这里：", page);
    console.log("在看这里：", context.state.userData.goods_id);
    let body = postBody({ id: context.state.userData.goods_id });
    let result = await fetch("/api/Adgoods/Delect", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
      },
      body
    }).then((res) => res.json());
    console.log("result: %O", result);

    // 删除成功需要清除管理员数据
    context.commit("clearuserData");

    // 获得操作数据，给页面反馈
    page.finishDelect(result);
  },
  // 求购删除
  async deletebuy(context, page) {
    console.log("看这里：", context);
    console.log("在看这里：", page);
    console.log("在看这里：", context.state.userData.buy_id);
    let body = postBody({ id: context.state.userData.buy_id });
    let result = await fetch("/api/Adbuy/Delect", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
      },
      body
    }).then((res) => res.json());
    console.log("result: %O", result);

    // 删除成功需要清除管理员数据
    context.commit("clearuserData");

    // 获得操作数据，给页面反馈
    page.finishDelect(result);
  },
  // 新闻删除
  async deleteNews(context, page) {
    console.log("看这里：", context);
    console.log("在看这里：", page);
    console.log("在看这里：", context.state.userData.news_id);
    let body = postBody({ id: context.state.userData.news_id });
    let result = await fetch("/api/Adnews/Delect", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
      },
      body
    }).then((res) => res.json());
    console.log("result: %O", result);

    // 删除成功需要清除管理员数据
    context.commit("clearuserData");

    // 获得操作数据，给页面反馈
    page.finishDelect(result);
  },
// 学校删除
  async deleteSchool(context, page) {
    console.log("看这里：", context);
    console.log("在看这里：", page);
    console.log("在看这里：", context.state.userData.school_id);
    let body = postBody({ id: context.state.userData.school_id});
    let result = await fetch("/api/Adschool/Delect", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
      },
      body
    }).then((res) => res.json());
    console.log("result: %O", result);

    // 删除成功需要清除管理员数据
    context.commit("clearuserData");

    // 获得操作数据，给页面反馈
    page.finishDelect(result);
  },
// 申请表删除
async deleteNewpro(context, page) {
  console.log("看这里：", context);
  console.log("在看这里：", page);
  console.log("在看这里：", context.state.userData.newpro_id);
  let body = postBody({ id: context.state.userData.newpro_id});
  let result = await fetch("/api/Adnewpro/Delect", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    },
    body
  }).then((res) => res.json());
  console.log("result: %O", result);

  // 删除成功需要清除管理员数据
  context.commit("clearuserData");

  // 获得操作数据，给页面反馈
  page.finishDelect(result);
},

  // 购物车删除
  async deleteCar(context, page) {
    console.log("看这里：", context);
    console.log("在看这里：", page);
    console.log("在看这里：", context.state.userData.car_id);
    let body = postBody({ id: context.state.userData.car_id });
    let result = await fetch("/api/car/Delect", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
      },
      body
    }).then((res) => res.json());
    console.log("result: %O", result);

    // 删除成功需要清除管理员数据
    context.commit("clearuserData");

    // 获得操作数据，给页面反馈
    page.finishDelect(result);
  },

   // 评论删除
   async deletePl(context, page) {
    console.log("看这里：", context);
    console.log("在看这里：", page);
    console.log("在看这里：", context.state.userData.pl_id);
    let body = postBody({ id: context.state.userData.pl_id });
    let result = await fetch("/api/Adpl/Delect", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
      },
      body
    }).then((res) => res.json());
    console.log("result: %O", result);

    // 删除成功需要清除管理员数据
    context.commit("clearuserData");

    // 获得操作数据，给页面反馈
    page.finishDelect(result);
  },
   // 收藏删除
   async removePer(context, page) {
    console.log("跟服务器说删除 id为: %O 的管理员", context.state.userData.sc_id);
    let body = postBody({ id: context.state.userData.sc_id });
    let result = await fetch("/api/sc/Delect", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        body,
    }).then((res) => res.json());
    console.log("result: %O", result);

    // 删除成功需要清除管理员数据
    context.commit("clearuserData");
    // 获得操作数据，给页面反馈
    console.log("page: %O", page);
    page.finishRemove(result);
}
  
};
export { state, mutations, actions };
