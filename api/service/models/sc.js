import { Sequelize, DataTypes, Model } from "sequelize";
// 定义一个User class 用来隐射数据库的user表
class Sc extends Model { }
// 初始化内部的字段映射
export default function (sequelize, type) {
    // 不能提前return
    let model = Sc.init(
        {
            // 对应sc表的id
            sc_id: {
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
            sc_name: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            // 商品描述
            sc_desc: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            // 商品图片
            sc_image: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            // 商品价格
            sc_price: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            // 商品价格
            sc_postage: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            //时间
            date: {
                type: DataTypes.DATEONLY,
                defaultValue: Sequelize.NOW,
            },
        },
        {
            // orm框架的实例
            // 将使用sequelize初始化sc的定义
            sequelize,
            // 指定对应数据表为sc
            tableName: "sc",
            // 指定模块名称为“Sc”
            modelName: "Sc",

            createdAt: false,
            updatedAt: false,
        });

        Sc.sync();
    return model;
}