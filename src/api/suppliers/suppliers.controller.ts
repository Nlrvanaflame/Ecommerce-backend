import express from 'express';
import { SupplierService } from './suppliers.service';

export class SupplierController {
  static async getAll(req: express.Request, res: express.Response) {
    try {
      const suppliers = await SupplierService.getAllSuppliers();
      res.json(suppliers);
    } catch (error) {
      res.status(500).json({ message: 'An error occurred while fetching suppliers', error: (error as Error).message });
    }
  }

  static async create(req: express.Request, res: express.Response) {
    try {
      const newSupplier = await SupplierService.createSupplier(req.body);
      res.json(newSupplier);
    } catch (error) {
      res.status(400).json({ message: 'An error occurred while creating the supplier', error: (error as Error).message });
    }
  }

  static async delete(req: express.Request, res: express.Response) {
    try {
      const { id } = req.params;
      await SupplierService.deleteSupplier(id);
      res.json({ message: 'Supplier deleted successfully' });
    } catch (error) {
      res.status(404).json({ message: 'An error occurred while deleting the supplier', error: (error as Error).message });
    }
  }
}

