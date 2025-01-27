import { Sequelize, DataTypes } from "sequelize";
import category from "./Category.js";
import sequelize from "./database.js";

export const candidato = sequelize.define("candidato", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    candidato_name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true 
});

candidato.belongsTo(category, {
    constraints: true,
    foreignKey: "category_id",
    as: "categoria"
});

try {
    candidato.sync().then(()=>{
        console.log("Tabela candidato criada com sucesso")
    })
}catch(error){
    console.error("Não foi criada a tabela:", error)
}



export default candidato;
