import express from 'express';
import inventoryRoutes from './src/api/inventory/inventory.routes';
import productRoutes from './src/api/products/products.routes';
import supplierRoutes from './src/api/suppliers/suppliers.routes';
import errorHandler from './src/middleware/error.middleware';
import loggingMiddleware from './src/middleware/logging.middleware';
import cors from 'cors';
import corsOptions from './config/corsOptions';


const app = express();

app.use(express.json());
app.use(cors(corsOptions));

app.use(loggingMiddleware);
app.use(errorHandler);

app.use('/inventory', inventoryRoutes);
app.use('/products', productRoutes);
app.use('/suppliers', supplierRoutes);

export default app;
