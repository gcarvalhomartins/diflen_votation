import express from 'express';
import { getCategoryHandler, addCategoryHandler, getCategoryBiId, updateCategoryHandler, deleteCategoryHandler} from './controllers/categoryController.js'
import { getCandidatoHandler,addCandidatoHandler,getCandidatoBiId,updateCandidatoHandler, deleteCandidatoHandler } from './controllers/candidatoController.js';
const router = express.Router();

// ROTAS CATEGORIAS 

router.get('/categoria',getCategoryHandler);
router.post('/categoria',addCategoryHandler);
router.get('/categoria/:id',getCategoryBiId);
router.patch('/categoria/:id',updateCategoryHandler);
router.delete('/categoria/:id',deleteCategoryHandler);


// ROTAS CANDIDATOS

router.get('/candidato',getCandidatoHandler);
router.post('/candidato',addCandidatoHandler);
router.get('/candidato/:id',getCandidatoBiId);
router.patch('/candidato/:id',updateCandidatoHandler);
router.delete('/candidato/:id',deleteCandidatoHandler)

 
export default router;
