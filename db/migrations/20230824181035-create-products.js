// xxxxxxxx-create-products.ts in your migrations folder

const { DataTypes } = require ('sequelize');

module.exports =  { 
  up:(queryInterface)=> {
  return queryInterface.createTable('Products', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    supplier_id: {
      type: DataTypes.UUID,
      references: {
        model: 'Suppliers',
        key: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    },
    date_added: {
      type: DataTypes.DATE,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  });
},

 down:(queryInterface)=>{
  return queryInterface.dropTable('Products');
}
}
