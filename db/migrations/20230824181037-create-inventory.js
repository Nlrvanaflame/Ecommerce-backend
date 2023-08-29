// xxxxxxxx-create-inventory.ts in your migrations folder

const { DataTypes } = require('sequelize');

module.exports = { up: (queryInterface) =>{
  return queryInterface.createTable('Inventory', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    product_id: {
      type: DataTypes.UUID,
      references: {
        model: 'Products',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    last_updated: {
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

 down:(queryInterface)=> {
  return queryInterface.dropTable('Inventory');
}
};
