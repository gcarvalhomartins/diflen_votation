import { Sequelize, DataTypes } from "sequelize";
import candidato  from "./Candidato.js";
import sequelize from "./database.js";

export const category = sequelize.define("categoria", {
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

category.hasMany(candidato,{
        foreignKey: "category_id",
        as: "categorias_and_candidatos"
    });

try {
    category.sync().then(()=>{
        console.log("Tabela category criada com sucesso")
    })
}catch(error){
    console.error("Não foi criada a tabela:", error)
}


export default category;
