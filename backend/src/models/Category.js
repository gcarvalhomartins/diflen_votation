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

try {
    category.sync().then(()=>{
        console.log("Tabela category criada com sucesso")
    })
}catch(error){
    console.error("Não foi criada a tabela:", error)
}


export default category;
