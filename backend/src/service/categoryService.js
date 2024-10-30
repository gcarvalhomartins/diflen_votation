import { json } from "express"

const category = []

function getAlltCategory(){
    return category
}

function addCategory(newCategoria){
    const {id_category,name_category} = newCategoria
    category.push({id_category,name_category})
    return { menssage:"Categoria criada com sucesso"}
}




export { 
    getAlltCategory,
    addCategory
}
