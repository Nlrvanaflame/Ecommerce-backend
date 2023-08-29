import { Router } from 'express';
import * as productController from './products.controller';

const router = Router();

router.get('/', productController.getAllProducts);
router.post('/', productController.addProduct);
router.get('/:id', productController.getProductById);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

export default router;
