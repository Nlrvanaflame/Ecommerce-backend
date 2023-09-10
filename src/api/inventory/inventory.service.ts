import { Inventory } from './inventory.model';

export class InventoryService {
  
  static async getInventoryByProductId(productId: string) {
    return Inventory.findOne({ where: { product_id: productId } });
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
