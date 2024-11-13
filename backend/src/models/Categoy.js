import {Sequelize, DataTypes } from "sequelize";
import sequelize from "./database";

const Category = sequelize.define("categoria",{
    id:{
        type: DataTypes.INTEGER
        
    }
})