import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./database";

const Category = sequelize.define("categoria", {
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
    timestamps: true // Adiciona os campos createdAt e updatedAt automaticamente
});


export default Category;
