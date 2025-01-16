import { json } from "express"
import { category }  from "../models/Category.js"


async function getAlltCategory(){
    const categories = await category.findAll();
    return categories 
}

async function addCategory( newCategoria ){
    const { category_name } = newCategoria
    
    try{
        const categories = await category.create({
            category_name
        })
        console.log("Categoria adicionada com sucesso:",categories)
        return categories

    }catch(error){
        console.error("Erro na category service:", error)
    }
}

async function getCategoryId(id){
    const convert_id = parseInt(id)
    const categories_Id = await category.findByPk(convert_id)
    return categories_Id
}

async function updateCategory(categoria) {
    
    try {
        const { id } = categoria;
        const id_category = await getCategoryId(id);
        if(!id_category){
            throw new Error("Categoria nao encontrada")
        }
        
        await category.update(categoria,{ where: { id: id }});
        console.log("Categoria atualizada com sucesso:", category);
        return category

    }catch (error) {
        console.error("Erro ao atualizar categoria, service",error)
        throw(error)
    }
}

async function deleteCategory(id) {
    try {
        const id_category = await getCategoryId(id)
        if(!id_category){
            throw new Error("Categoria nao encontrada")
        }

        await category.destroy(id)
        console.log("Categoria deletada com sucesso:",category);
        return category

    }catch(error){
        console.error("Erro ao deletar categoria", error)
        throw(error)
    }
}


export { 
    getAlltCategory,
    getCategoryId,
    addCategory,
    updateCategory,
    deleteCategory
}
