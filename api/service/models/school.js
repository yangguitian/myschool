import { Sequelize, DataTypes, Model } from "sequelize";
// 定义一个User class 用来隐射数据库的user表
class School extends Model { }
// 初始化内部的字段映射
export default function (sequelize, type) {
    // 不能提前return
    let model = School.init(
        {
            // 对应School表的id
            school_id: {
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
            school_name: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            // 商品描述
            school_xm: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            // 联系电话
            school_tel:{
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
            // 将使用sequelize初始化School的定义
            sequelize,
            // 指定对应数据表为school
            tableName: "school",
            // 指定模块名称为“school”
            modelName: "School",

            createdAt: false,
            updatedAt: false,
        });

        School.sync();
    return model;
}