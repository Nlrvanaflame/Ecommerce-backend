import { Request, Response } from 'express';
import * as productService from './products.service';

export const getAllProducts = async (req: Request, res: Response) => {
  try {  const products = await productService.getAllProducts();
    res.json(products);
  }
  catch (error){
    res.status(500).json({message: 'An error has occured', error: (error as Error).message})
  }
 
};


export const addProduct = async (req: Request, res: Response) => {


  try{
    const product = await productService.addProduct(req.body);
    res.status(201).json(product);
  }
  catch(error){
    res.status(500).json({message: 'An error has occured', error: (error as Error).message})
  }
  
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await productService.getProductById(req.params.id);
    if (product) res.json(product);
    else res.status(404).send('Product not found');
  }
  catch(error) {
    res.status(500).json({message: 'An error has occured', error: (error as Error).message})

  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try{
    const updated = await productService.updateProduct(req.params.id, req.body);
    if (updated) res.json(updated);
    else res.status(404).send('Product not found');
  }
  catch(error){
    res.status(500).json({message: 'An error has occured', error: (error as Error).message})

  }
 
};

export const deleteProduct = async (req: Request, res: Response) => {
  try{
    const deleted = await productService.deleteProduct(req.params.id);
    if (deleted) res.status(204).send();
    else res.status(404).send('Product not found');
  }
  catch(error){
    res.status(500).json({message: 'An error has occured', error: (error as Error).message})

  }
 
};
