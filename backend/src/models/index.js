import sequelize from "./database.js";
import { category } from "./Category.js";
import { candidato } from "./Candidato.js";


candidato.belongsTo(category, {
    foreignKey: "category_id",
    as: "categoria",
});

category.hasMany(candidato, {
    foreignKey: "category_id",
    as: "candidatos",
});




export { category, candidato };
