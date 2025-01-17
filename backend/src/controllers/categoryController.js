import { getAlltCategory, addCategory, getCategoryId, updateCategory, deleteCategory } from '../service/categoryService.js';

async function getCategoryHandler(req,res){

    try {
        const getCategoryServer = await getAlltCategory()

        if(!getCategoryServer){
            return res.status(404).json({message: "Erro ao buscar categorias"})
        }

        return res.status(200).json(getCategoryServer)
    }catch(error){
        console.error("Erro ao buscar categorias",error)
    }
};

async function addCategoryHandler(req,res){
    const category = req.body;

    const new_category =  await addCategory(category)

    if(!new_category){
        return res.status(400).json({message: "Erro ao adicionar categoria"})
    }
    return res.status(201).json(new_category)
}

async function getCategoryBiId(req, res) {
    try {
        const id_categori = req.params.id;
        
        if (!id_categori) {
            return res.status(400).json({ message: "Id não informado" });
        }
        
        const category = await getCategoryId(id_categori);
        return res.status(200).json(category);
        
    } catch (error) {
        console.error("Erro ao buscar categoria por id:", error.message);
        return res.status(404).json({ message: error.message }); // Envia uma resposta ao cliente
    }
}

async function updateCategoryHandler(req,res){
    try {
        const category = req.body;
        const updateCategories = await updateCategory(category)
        if(!updateCategories){
            return res.status(404).json({message: "Categoria não encontrada"})
        }
        return res.status(200).json(updateCategories)
    }catch(error){
        console.error("Erro ao atualizar categoria",error)
    } 
    
}
async function deleteCategoryHandler(req, res) {
    try {
        const category = req.body;

        if (!category || !category.id) {
            return res.status(400).json({ message: "ID da categoria é obrigatório" });
        }

        const result = await deleteCategory(category);
        return res.status(200).json(result);

    } catch (error) {
        console.error("Erro ao deletar categoria:", error.message);
        return res.status(404).json({ message: error.message });
    }
}


export {
    getCategoryHandler,
    addCategoryHandler,
    getCategoryBiId,
    updateCategoryHandler,
    deleteCategoryHandler
}


