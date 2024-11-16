import { json } from "express"
import category  from "../models/Category.js"



async function getAlltCategory(){
    const categories = await category.findAll();
    return categories 
}

async function addCategory( newCategoria ){
    
    try {
        const category = await category.create({
            category_name: newCategoria.name_category
        });

        return {menssage: "Categoria criada com sucesso", category }
   } catch (error) {

        console.error("Erro ao adicionar categoria, service",error)
        throw(error)

   }
}

async function getCategoryId(id)  {
    return await category.findByPk(id)
}


export { 
    getAlltCategory,
    getCategoryId,
    addCategory
}
