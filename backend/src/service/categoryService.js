import { json } from "express"
import { Category } from "../models/Category"


async function getAlltCategory(){
    const categories = await Category.findAll();
    return categories 
}

async function addCategory( newCategoria ){
    
    try {
        const category = await Category.create({
            category_name: newCategoria.name_category
        });
        return {menssage: "Categoria criada com sucesso", category }
   }catch(error){
        console.error("Erro ao adicionar categoria, service",error)
        throw(error)

   }

}

export { 
    getAlltCategory,
    addCategory
}
