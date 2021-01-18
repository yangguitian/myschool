import { Sequelize, DataTypes, Model } from "sequelize";
// 定义一个User class 用来隐射数据库的user表
class News extends Model { }
// 初始化内部的字段映射
export default function (sequelize, type) {
    // 不能提前return
    let model = News.init(
        {
            // 对应News表的id
            news_id: {
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
            // 新闻名称
            news_name: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            // 新闻描述
            news_desc: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            // 新闻图片
            news_image:{
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            // 新闻时间
            news_date:{
                type: DataTypes.DATEONLY,
                defaultValue: Sequelize.NOW,
            },
        },
        {
            // orm框架的实例
            // 将使用sequelize初始化News的定义
            sequelize,
            // 指定对应数据表为news
            tableName: "news",
            // 指定模块名称为“News”
            modelName: "News",

            createdAt: false,
            updatedAt: false,
        });

    News.sync();
    return model;
}