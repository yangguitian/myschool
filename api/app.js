import path from "path";
import KOA from "koa";
import Body from "koa-body";
import Session from "koa-session";
import Router from "koa-router";
import ORM from "koa-orm";
// serverMiddleware 不要使用 ~ 作为开始
// 必须使用当前文件的相对路径 import 自定义 js
import rootRouter from "./router/index.js";
import accountRouter from "./router/account.js";

const app = new KOA(); // 实例化 koa 框架
app.keys = ['koa-key']; // 设置 koa cookie key

const ormConfig = {
    name: 'user',
    modelPath: path.join(path.resolve("./"), 'api/service/models'),
    // 使用的数据库的名称
    database: 'youzi',
      // 链接数据库用户名
    username: 'root',
      // 链接数据库密码
    password: '123456',
    // 数据库
    dialect: 'mysql',
     // 数据库地址
    host: 'localhost',
    port: "3306",
    pool: {
         //连接池最大链接数
        max: 10,
         //连接池最小链接数
        min: 0,
         //超过两分钟 回收链接
        idle: 120000,
    }
};

const orm = ORM(ormConfig);
console.log("orm: %O", orm);
app.use(orm.middleware);

const SessionConfig = {  // session 配置
    key: 'session-key',
    maxAge: 1000 * 60 * 60,  // 会话有效时间一个小时
}
app.use(Session(SessionConfig, app));  // 将 session 中间件 组注册到 koa

const bodyParser = new Body(); // 创建 koa body 的中间件实例
app.use(bodyParser);            // 将 koa body 的中间件实例注册到 koa

const router = new Router();    // 创建 koa 路由处理中间件的实例

// 将 引入的自定义路由 实例绑定到指定 url 下，进行分流
// 所有 /api 的请求会到 rootRouter
router.use("/", rootRouter.routes(), rootRouter.allowedMethods());
// 所有 /api/account 的请求会到 storeRouter
router.use("/account", accountRouter.routes(), accountRouter.allowedMethods());
// 将 总路由中间件实例注册到 koa 中
app.use(router.routes(), router.allowedMethods());


// 将 koa 作为插件，注册给 nuxt 使用
// 将 koa 作为一个回调方法提供给 nuxt 作为 serverMiddleware 使用
// 这将直接使用 nuxt 服务器启动的地址和端口作为入口。
export default app.callback();


