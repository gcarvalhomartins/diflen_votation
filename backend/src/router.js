import express from 'express';
import { getCategoryHandler, addCategoryHandler, getCategoryBiId, updateCategoryHandler} from './controllers/categoryController.js'
import { getCandidatoHandler, addCandidatoHandler } from './controllers/candidatoController.js';
const router = express.Router();

// ROTAS CATEGORIAS 

router.get('/categoria',getCategoryHandler);
router.post('/categoria',addCategoryHandler);
router.get('/categoria/:id',getCategoryBiId);
router.patch('/categoria/:id',updateCategoryHandler);


// ROTAS CANDIDATOS

router.get('/candidato',getCandidatoHandler);
router.post('/candidato',addCandidatoHandler);


export default router;
