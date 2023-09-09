import { Table, Column, Model, DataType, ForeignKey, BelongsTo, UpdatedAt } from 'sequelize-typescript';
import { Product } from '../products/products.model';

@Table({timestamps: true})
export class Inventory extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.UUID,
    references: {
      model: Product, 
      key: 'id'
    },
    onDelete: 'CASCADE',
  })
  product_id: string;

  @BelongsTo(() => Product)
  product: Product;

  @Column(DataType.INTEGER)
  quantity: number;

  @UpdatedAt
  last_updated: Date;
}

export default Inventory;