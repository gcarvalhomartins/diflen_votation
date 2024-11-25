import { json } from "express"
import category, { category }  from "../models/Category"


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

async function updateCategory(id, new_date) {
    try {
        const categories = await getCategoryId(id);
        if(!categories){
            throw new Error("Categoria nao encontrada")
        }
        
        await categories.update(new_date);
        console.log("Categoria atualizada com sucesso:", categories);
        return categories
    }catch (error) {
        console.error("Erro ao atualizar categoria, service",error)
        throw(error)
    }
}


export { 
    getAlltCategory,
    getCategoryId,
    addCategory,
    updateCategory
}
