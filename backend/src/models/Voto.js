import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./database.js";

export const voto = sequelize.define("voto", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name_voto: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mais_gostou: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    menos_gostou: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    candidato_1: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    candidato_2: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    candidato_3: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    candidato_4: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    candidato_5: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    candidato_6: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    candidato_7: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    candidato_8: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    candidato_9: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    candidato_10: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    candidato_11: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    candidato_12: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    candidato_13: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: true 
});

try {
    voto.sync().then(()=>{
        console.log("Tabela voto criada com sucesso")
    })
}catch(error){
    console.error("Não foi a tabela voto:", error)
}


export default voto;
