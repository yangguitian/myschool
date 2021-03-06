import { Sequelize, DataTypes, Model } from "sequelize";
// 定义一个User class 用来隐射数据库的user表
class Car extends Model { }
// 初始化内部的字段映射
export default function (sequelize, type) {
    // 不能提前return
    let model = Car.init(
        {
            // 对应car表的id
            car_id: {
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
            car_name: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            // 商品描述
            car_desc: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            // 商品图片
            car_image: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            // 商品价格
            car_price: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            // 商品原价
            car_oldprice: {
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
            // 将使用sequelize初始化Car的定义
            sequelize,
            // 指定对应数据表为car
            tableName: "car",
            // 指定模块名称为“Car”
            modelName: "Car",

            createdAt: false,
            updatedAt: false,
        });

    Car.sync();
    return model;
}