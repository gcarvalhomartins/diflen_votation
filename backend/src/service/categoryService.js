import { json } from "express"
import { category }  from "../models/Category"


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

async function getCategoryId(id)  {
    return await category.findByPk(id)
}

async function updateCategory(id,new_name) {
    try {
        const categories = await getCategoryId(id);
        if(!categories){
            throw new Error("Categoria nao encontrada")
        }
        
        await categories.update(id,new_name);
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
