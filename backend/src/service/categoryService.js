import { json } from "express"
import { category }  from "../models/Category.js"


async function getAlltCategory(){
    try {
        const categories = await category.findAll();
        return categories

    }catch(error){
        console.error("Erro ao buscar categorias", error)
        throw error 
    }

     
}

async function addCategory( newCategoria ){
    try {
        const { category_name } = newCategoria
    
        const categories = await category.create({
            category_name
        })
        if(!categories){
            throw new Error("Erro ao adicionar categoria")
        }
        return categories
        
    }catch(error){ 
        console.error("Erro ao adicionar categoria", error)
        throw error
    }
        
      //  console.log("Categoria adicionada com sucesso:",categories)
        
}

async function getCategoryId(id){
    try {
        const convert_id = parseInt(id)
        const categories_Id = await category.findByPk(convert_id)
        if(!categories_Id){
            throw new Error("Categoria nao encontrada")
        }
        return categories_Id

    }catch(error){
        console.error("Erro ao buscar categoria por id", error)
        throw(error)
    }
    
    
}

async function updateCategory(categoria) {
    
    try {
        const { id } = categoria;
        const id_category = await getCategoryId(id);
        if(!id_category){
            throw new Error("Categoria nao encontrada")
        }
        await category.update(categoria,{ where: { id: id }});
        return category

    }catch (error) {
        console.error("Erro ao atualizar categoria, service",error)
        throw(error)
    }
}

async function deleteCategory(categoria) {
    try {
        const { id } = categoria
        const id_category = await getCategoryId(id)

        if(!id_category){
            throw new Error("Categoria nao encontrada")
        }
        await category.destroy({ where: { id: id }});
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
