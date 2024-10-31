import { getAlltCategory, addCategory } from '../service/categoryService.js';

async function getCategoryHandler(req,res){
    const getCategoryServer = await getAlltCategory()
    return res.status(200).json(getCategoryServer)
};

async function addCategoryHandler(req,res){
    const category = req.body;
    const new_category =  await addCategory(category)
    return res.status(201).json(new_category)
}

export {
    getCategoryHandler,
    addCategoryHandler
}


