import { json } from "express"
import category  from "../models/Category.js"



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


export { 
    getAlltCategory,
    getCategoryId,
    addCategory
}
