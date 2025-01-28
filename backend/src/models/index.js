import sequelize from "./database.js";
import { category } from "./Category.js";
import { candidato } from "./Candidato.js";

// Defina as associações
candidato.belongsTo(category, {
    foreignKey: "category_id",
    as: "categoria",
});

category.hasMany(candidato, {
    foreignKey: "category_id",
    as: "candidatos",
});



// Exporte os modelos associados
export { category, candidato };
