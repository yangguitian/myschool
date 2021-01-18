import { Sequelize, DataTypes, Model } from "sequelize";
// 定义一个User class 用来隐射数据库的user表
class Buy extends Model { }
// 初始化内部的字段映射
export default function (sequelize, type) {
    // 不能提前return
    let model = Buy.init(
        {
            // 对应Goods表的id
            buy_id: {
                // 数据库里的数据类型为INT
                type: DataTypes.INTEGER,
                primaryKey: true,
                // 不能为空
                allowNull: false,
                // 自增加
                autoIncrement: true,
                // 唯一性
                unique: true,
            },
            // 商品名称
            buy_name: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            // 商品描述
            buy_desc: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            // 商品图片
            buy_image:{
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            // 商品价格
            buy_price:{
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            // 联系电话
            buy_tel:{
                type: DataTypes.STRING(255),
                allowNull: true,
            },
        },
        {
            // orm框架的实例
            // 将使用sequelize初始化User的定义
            sequelize,
            // 指定对应数据表为user
            tableName: "buy",
            // 指定模块名称为“User”
            modelName: "Buy",

            createdAt: false,
            updatedAt: false,
        });

    Buy.sync();
    return model;
}