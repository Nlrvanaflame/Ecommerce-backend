import request from 'supertest';
import express from 'express';
import supplierRoutes from '../src/api/suppliers/suppliers.routes';
import { Supplier } from '../src/api/suppliers/suppliers.model';

const app = express();
app.use(express.json());
app.use('/suppliers', supplierRoutes);

// Mocking Supplier model methods
Supplier.findAll = jest.fn();
Supplier.create = jest.fn();
Supplier.destroy = jest.fn();

describe('Supplier Routes', () => {
  it('should get all suppliers', async () => {
    // Mock data and function
    const mockData = [{ id: '1', name: 'Supplier 1'}, { id: '2', name: 'Supplier 2' }];
    (Supplier.findAll as jest.Mock).mockResolvedValueOnce(mockData);

    const res = await request(app).get('/suppliers');
    expect(res.status).toBe(200);
    expect(res.body).toEqual(mockData);
  });

  it('should create a supplier', async () => {
    const newSupplier = { id: '3', name: 'New Supplier' };
    (Supplier.create as jest.Mock).mockResolvedValueOnce(newSupplier);

    const res = await request(app).post('/suppliers').send(newSupplier);
    expect(res.status).toBe(200);
    expect(res.body).toEqual(newSupplier);
  });

  it('should delete a supplier', async () => {
    const id = '1';
    (Supplier.destroy as jest.Mock).mockResolvedValueOnce(1); // Assuming destroy returns 1 on successful delete

    const res = await request(app).delete(`/suppliers/${id}`);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Supplier deleted successfully' });
  });

  // Add more tests to cover error cases, etc.
});
