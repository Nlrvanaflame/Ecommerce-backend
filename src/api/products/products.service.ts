import { Product } from './products.model';

export const getAllProducts = async () => {
  return await Product.findAll();
};

export const addProduct = async (productData: any) => {
  return await Product.create(productData);
};

export const getProductById = async (id: string) => {
  return await Product.findByPk(id);
};

export const updateProduct = async (id: string, updatedData: any) => {
  const product = await Product.findByPk(id);
  if (product) {
    await product.update(updatedData);
    return product;
  }
  return null;
};

export const deleteProduct = async (id: string) => {
  const product = await Product.findByPk(id);
  if (product) {
    await product.destroy();
    return true;
  }
  return false;
};
