import { getAlltCategory, addCategory } from '../service/categoryService.js';

function getCategoryHandler(req,res){
    const getCategoryServer = getAlltCategory()
    return res.status(200).json(getCategoryServer)
};

function addCategoryHandler(req,res){
    const category = req.body;
    const new_category =  addCategory(category)
    return res.status(201).json(new_category)
}

export {
    getCategoryHandler,
    addCategoryHandler
}


