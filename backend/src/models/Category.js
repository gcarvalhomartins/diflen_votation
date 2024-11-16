import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./database.js";

const category = sequelize.define("categoria", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true 
});


export default category;
