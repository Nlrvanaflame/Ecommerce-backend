import { Router } from 'express';
import { SupplierController } from './suppliers.controller';

const router = Router();

router.get('/', SupplierController.getAll);
router.post('/', SupplierController.create);
router.delete('/:id', SupplierController.delete);

export default router;
