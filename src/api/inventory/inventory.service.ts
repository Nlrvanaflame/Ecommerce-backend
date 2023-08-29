import { Inventory } from './inventory.model';

export class InventoryService {
  
  static async getInventoryById(id: string) {
    return Inventory.findByPk(id);
  }

  static async createInventory(data: any) {
    return Inventory.create(data);
  }

  static async updateInventory(id: string, data: any) {
    return Inventory.update(data, { where: { id } });
  }

  static async deleteInventory(id: string) {
    return Inventory.destroy({ where: { id } });
  }
}
