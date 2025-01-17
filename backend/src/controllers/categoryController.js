import { getAlltCategory, addCategory, getCategoryId, updateCategory, deleteCategory } from '../service/categoryService.js';

async function getCategoryHandler(req,res){

    try {

        const getCategoryServer = await getAlltCategory()
        return res.status(200).json(getCategoryServer)
        
    }catch(error){

        console.error("Erro ao buscar categorias",error)
        return res.status(404).json({message: "Categoria nao Encontrada "})
    }
};

async function addCategoryHandler(req,res){
    try{
        const category = req.body;

        const new_category =  await addCategory(category)

        return res.status(201).json(new_category)

    }catch(error){
        console.error("Erro ao adicionar categoria",error)
        return res.status(400).json({message: "Erro ao adicionar categoria T_T"})
    }
    
}

async function getCategoryBiId(req, res) {
    try {

        const id_categori = req.params.id;
        
        const category = await getCategoryId(id_categori);
        
        return res.status(200).json(category);
        
    } catch (error) {
        console.error("Erro ao buscar categoria por id:", error.message);
        return res.status(404).json({ message: "Categoria nao encontrada T_T" }); // Envia uma resposta ao cliente
    }
}

async function updateCategoryHandler(req,res){
    try {
        const category = req.body;

        const result = await updateCategory(category)

        return res.status(200).json(result)

    }catch(error){
        console.error("Erro ao atualizar categoria",error)

        return res.status(404).json({message: "Categoria nao Encontrada T_T"})
    } 
    
}
async function deleteCategoryHandler(req, res) {
    try {
        const category = req.body;

        const result = await deleteCategory(category);
        return res.status(200).json(result);

    } catch (error) {
        console.error("Erro ao deletar categoria:", error.message);
        return res.status(404).json({ message: "Categoria nao encontrada T_T" });
    }
}


export {
    getCategoryHandler,
    addCategoryHandler,
    getCategoryBiId,
    updateCategoryHandler,
    deleteCategoryHandler
}


