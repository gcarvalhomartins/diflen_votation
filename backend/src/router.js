import express from 'express';
import { getCategoryHandler, addCategoryHandler, getCategoryBiId, updateCategoryHandler, deleteCategoryHandler} from './controllers/categoryController.js'
import { getCandidatoHandler,addCandidatoHandler,getCandidatoBiId,updateCandidatoHandler, deleteCandidatoHandler } from './controllers/candidatoController.js';
import { getVotoHandler, addVotoHandler, getVotoIdHandler, getCategoriasAndCandidatosHandler} from './controllers/votoController.js'
const router = express.Router();

// ROTAS CATEGORIAS 

router.get('/categoria',getCategoryHandler);
router.get('/categoria/:id',getCategoryBiId);
router.post('/categoria',addCategoryHandler);
router.patch('/categoria/:id',updateCategoryHandler);
router.delete('/categoria/:id',deleteCategoryHandler);


// ROTAS CANDIDATOS

router.get('/candidato',getCandidatoHandler);
router.get('/candidato/:id',getCandidatoBiId);
router.post('/candidato',addCandidatoHandler);
router.patch('/candidato/:id',updateCandidatoHandler);
router.delete('/candidato/:id',deleteCandidatoHandler)

// ROTA VOTOS

router.get('/voto',getVotoHandler);
router.get('/voto/categorias',getCategoriasAndCandidatosHandler);
router.get('/voto/:id',getVotoIdHandler);
router.post('/voto',addVotoHandler)

export default router;
