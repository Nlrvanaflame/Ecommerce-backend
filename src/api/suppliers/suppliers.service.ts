import { Supplier } from './suppliers.model';

export class SupplierService {
  static async getAllSuppliers() {
    return Supplier.findAll();
  }

  static async createSupplier(data: any) {
    return Supplier.create(data);
  }

  static async deleteSupplier(id: string) {
    return Supplier.destroy({ where: { id } });
  }

  static async updateSupplier(id: string, data: any) {
    return Supplier.update(data, { where: { id } });
  }
}
