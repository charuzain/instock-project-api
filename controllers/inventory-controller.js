const express = require('express');
const app = express();
const knex = require('knex')(require('../knexfile'));

const getAllInventories = async (req, res) => {
  try {
    const inventories = await knex('inventories');
    res.status(200).json(inventories);
  } catch (error) {
    res.status(400).json({ message: 'Error getting i nventories' });
  }
};

const getInventoryByID = async (req, res) => {
  console.log(req.params.inventoryId);
  try {
    const inventoryDetail = await knex('inventories')
      .where('inventories.id', req.params.inventoryId)
      .join('warehouses', 'inventories.warehouse_id', '=', 'warehouses.id')
      .select(
        'item_name',
        'warehouse_name',
        'status',
        'category',
        'description',
        'quantity'
      );
    res.status(200).json(inventoryDetail);
  } catch (error) {
    res.status(400).json({ message: 'Error getting i nventories' });
  }
};

module.exports = { getAllInventories, getInventoryByID };
