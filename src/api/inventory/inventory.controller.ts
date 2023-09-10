import express from 'express';
import { InventoryService } from './inventory.service';

export class InventoryController {
  
  static async getById(req: express.Request, res: express.Response) {
    try {
      const { id } = req.params;
      const inventory = await InventoryService.getInventoryByProductId(id);
      if (inventory) {
        res.json(inventory);
      } else {
        res.status(404).json({ message: 'No inventory found for the given product ID' });
      }
    } catch (error: any) {
      res.status(500).json({ message: 'An error occurred while fetching the inventory', error: error.message });
    }
  }


  static async create(req: express.Request, res: express.Response) {
    try {
      const newInventory = await InventoryService.createInventory(req.body);
      res.json(newInventory);
    } catch (error: any) {
      res.status(400).json({ message: 'An error occurred while creating the inventory', error: error.message });
    }
  }

  static async update(req: express.Request, res: express.Response) {
    try {
      const { id } = req.params;
      await InventoryService.updateInventory(id, req.body);
      res.json({ message: 'Inventory updated successfully' });
    } catch (error: any) {
      res.status(400).json({ message: 'An error occurred while updating the inventory', error: error.message });
    }
  }

  static async delete(req: express.Request, res: express.Response) {
    try {
      const { id } = req.params;
      await InventoryService.deleteInventory(id);
      res.json({ message: 'Inventory deleted successfully' });
    } catch (error: any) {
      res.status(404).json({ message: 'An error occurred while deleting the inventory', error: error.message });
    }
  }
}
