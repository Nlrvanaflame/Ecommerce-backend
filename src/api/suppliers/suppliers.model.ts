
import {
    Table,
    Column,
    Model,
    DataType,
    HasMany,
  } from 'sequelize-typescript';
  import { Product } from '../products/products.model';
  
  @Table
  export class Supplier extends Model {
    @Column({
      type: DataType.UUID,
      defaultValue: DataType.UUIDV4,
      primaryKey: true,
    })
    id: string;
  
    @Column(DataType.STRING)
    name: string;
  
    @Column(DataType.TEXT)
    contact_info: string;
  
    @Column(DataType.STRING)
    location: string;
  
    @HasMany(() => Product, { onDelete: 'CASCADE' })
     products: Product[];

  }
  
  export default Supplier