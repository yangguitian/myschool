// import { Sequelize, DataTypes, Model } from "sequelize";
// // 定义一个User class 用来隐射数据库的user表
// class buys extends Model { }
// // 初始化内部的字段映射
// export default function (sequelize, type) {
//     // 不能提前return
//     let model = buys.init(
//         {
//             // 对应Goods表的id
//             buys_id: {
//                 // 数据库里的数据类型为INT
//                 type: DataTypes.INTEGER,
//                 primaryKey: true,
//                 // 不能为空
//                 allowNull: false,
//                 // 自增加
//                 autoIncrement: true,
//                 // 唯一性
//                 unique: true,
//             },
//             // 商品名称
//             buys_name: {
//                 type: DataTypes.STRING(255),
//                 allowNull: true,
//             },
//             // 商品描述
//             buys_desc: {
//                 type: DataTypes.STRING(255),
//                 allowNull: true,
//             },
//             // 商品图片
//             buys_image:{
//                 type: DataTypes.STRING(255),
//                 allowNull: true,
//             },
//             // 商品价格
//             buys_price:{
//                 type: DataTypes.STRING(255),
//                 allowNull: true,
//             },
//             // 联系电话
//             buys_tel:{
//                 type: DataTypes.STRING(255),
//                 allowNull: true,
//             },
//         },
//         {
//             // orm框架的实例
//             // 将使用sequelize初始化User的定义
//             sequelize,
//             // 指定对应数据表为user
//             tableName: "buys",
//             // 指定模块名称为“User”
//             modelName: "buys",

//             createdAt: false,
//             updatedAt: false,
//         });

//     Buys.sync();
//     return model;
// }