import express from 'express';
import inventoryRoutes from './src/api/inventory/inventory.routes';
import productRoutes from './src/api/products/products.routes';
import supplierRoutes from './src/api/suppliers/suppliers.routes'
import errorHandler from './src/middleware/error.middleware';
import sequelize from './src/config/db';
import loggingMiddleware from './src/middleware/logging.middleware';
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors(corsOptions));

app.use(loggingMiddleware);
app.use(errorHandler);

app.use('/inventory', inventoryRoutes);
app.use('/products', productRoutes);
app.use('/suppliers' , supplierRoutes)




sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  });


