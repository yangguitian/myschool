import { Sequelize, DataTypes, Model } from "sequelize";
// 定义一个User class 用来隐射数据库的user表
class Pl extends Model { }
// 初始化内部的字段映射
export default function (sequelize, type) {
    // 不能提前return
    let model = Pl.init(
        {
            // 对应Goods表的id
            pl_id: {
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
            // 评论人名称
            pl_name: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            // 评论人头像
            pl_image:{
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            // 评论人文字
            pl_text:{
                type: DataTypes.STRING(255),
                allowNull: true,
            },
        },
        {
            // orm框架的实例
            // 将使用sequelize初始化Goods的定义
            sequelize,
            // 指定对应数据表为goods
            tableName: "pl",
            // 指定模块名称为“Goods”
            modelName: "Pl",

            createdAt: true,
            updatedAt: false,
        });

        Pl.sync();
    return model;
}