import { getAlltCategory, addCategory, getCategoryId, updateCategory, deleteCategory } from '../service/categoryService.js';

async function getCategoryHandler(req,res){

    const getCategoryServer = await getAlltCategory()

    if(!getCategoryServer){
        return res.status(404).json({message: "Erro ao buscar categorias"})
    }
    
    return res.status(200).json(getCategoryServer)
};

async function addCategoryHandler(req,res){
    const category = req.body;

    const new_category =  await addCategory(category)

    if(!new_category){
        return res.status(400).json({message: "Erro ao adicionar categoria"})
    }
    return res.status(201).json(new_category)
}

async function getCategoryBiId(req,res){
    const id_categori = req.params.id;

    if(!id_categori){
        return res.status(400).json({message: "Id não informado"}) 
    }
    const category = await getCategoryId(id_categori)

    return res.status(200).json(category)
    
}
async function updateCategoryHandler(req,res){
    const category = req.body;
    const updateCategories = await updateCategory(category)
    if(!updateCategories){
        return res.status(404).json({message: "Categoria não encontrada"})
    }
    return res.status(200).json(updateCategories)
}
async function deleteCategoryHandler(req,res){
    const category = req.body;

    const deleteCategoory = await deleteCategory(category)

    if(!deleteCategoory){
        return res.status(404).json({message: "Categoria não encontrada"})
    }

    return res.status(200).json(deleteCategoory)
}

export {
    getCategoryHandler,
    addCategoryHandler,
    getCategoryBiId,
    updateCategoryHandler,
    deleteCategoryHandler
}


