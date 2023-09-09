import { Table, Column, Model, DataType, ForeignKey, BelongsTo, CreatedAt } from 'sequelize-typescript';
import { Supplier } from '../suppliers/suppliers.model';

@Table({timestamps: true})
export class Product extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.TEXT)
  description: string;

  @Column(DataType.DECIMAL(10, 2))
  price: number;

  @ForeignKey(() => Supplier)
  @Column(DataType.UUID)
  supplier_id: string;

  @BelongsTo(() => Supplier, { onDelete: 'CASCADE' })
  supplier: Supplier;

  @CreatedAt
  date_added: Date;
}

export default Product
