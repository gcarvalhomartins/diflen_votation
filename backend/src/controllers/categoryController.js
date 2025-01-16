import { getAlltCategory, addCategory, getCategoryId, updateCategory } from '../service/categoryService.js';

async function getCategoryHandler(req,res){
    const getCategoryServer = await getAlltCategory()
    return res.status(200).json(getCategoryServer)
};

async function addCategoryHandler(req,res){
    const category = req.body;
    const new_category =  await addCategory(category)
    return res.status(201).json(new_category)
}

async function getCategoryBiId(req,res){
    const id_categori = req.params.id;
    const category = await getCategoryId(id_categori)
    return res.status(200).json(category)
}
async function updateCategoryHandler(req,res){
    const id = req.params.id;
    const new_name = req.body;
    const updateCategories = await updateCategory(id,new_name)
    return res.status(200).json(updateCategories)
}

export {
    getCategoryHandler,
    addCategoryHandler,
    getCategoryBiId,
    updateCategoryHandler
}


