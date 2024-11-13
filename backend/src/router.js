import express from 'express';
import { getCategoryHandler, addCategoryHandler} from './controllers/categoryController.js'
import { getCandidatoHandler, addCandidatoHandler } from './controllers/candidatoController.js';
const router = express.Router();

// ROTAS CATEGORIAS 

router.get('/categoria',getCategoryHandler);
router.post('/categoria',addCategoryHandler);

// ROTAS CANDIDATOS

router.get('/candidato',getCandidatoHandler);
router.post('/candidato',addCandidatoHandler);


export default router;
