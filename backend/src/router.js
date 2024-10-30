import express from 'express';
import { getCategoryHandler, addCategoryHandler} from './controllers/categoryController.js'
const router = express.Router();

router.get('/categoria',getCategoryHandler);
router.post('/categoria',addCategoryHandler)



export default router;
