import { json } from "express"
import { category }  from "../models/Category.js"


async function getAlltCategory(){
 
    const categories = await category.findAll();
    return categories

}

async function addCategory( newCategoria ){

    const { category_name } = newCategoria
    
    const categories = await category.create({
            category_name
    })
    if(!categories){
        throw new Error("Erro ao adicionar categoria")
    }
    return categories    
        
}

async function getCategoryId(id){

    const convert_id = parseInt(id)
    const categories_Id = await category.findByPk(convert_id)

    if(!categories_Id){
        throw new Error("Categoria nao encontrada")
    }
    return categories_Id

}

async function updateCategory(categoria) {
    const { id } = categoria;

    const id_category = await getCategoryId(id);

    if(!id_category){
        throw new Error("Categoria nao encontrada")
    }

    await category.update(categoria,{ where: { id: id }});
    
    return { message: 'Categoria atualizada com sucesso' };

}

async function deleteCategory(categoria) {
    const { id } = categoria;

    const id_category = await getCategoryId(id);

    if (!id_category) {
        throw new Error("Categoria não encontrada");
    }

    await category.destroy({ where: { id: id } });

    return { message: "Categoria deletada com sucesso" };
}



export { 
    getAlltCategory,
    getCategoryId,
    addCategory,
    updateCategory,
    deleteCategory
}
