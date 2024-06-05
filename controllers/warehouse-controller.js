const express = require('express');
const app = express();
const knex = require('knex')(require('../knexfile'));

const getAllWarehouses = async (req, res) => {
  try {
    const warehouses = await knex('warehouses');
    res.status(200).json(warehouses);
  } catch (error) {
    res.status(400).send('Error getting warehouse');
  }
};

const getWareHouseDetailById = async (req, res) => {
  try {
    const warehouse = await knex('warehouses')
      .select(
        'warehouse_name',
        'address',
        'city',
        'country',
        'contact_position',
        'contact_phone',
        'contact_email',
        'contact_name'
      )
      .where({ id: req.params.id })
      .first();
    if (warehouse.length === 0) {
      res.status(404).send(`No warehouse with the id ${req.params.id}found`);
    } else {
      res.status(200).json(warehouse);
    }
  } catch (error) {
    res.status(500).send(`Error retrieving Warehouse: ${error}`);
  }
};

const getInventoriesForWarehouse = async (req, res) => {
  try {
    const warehouseInventories = await knex('inventories').where(
      'warehouse_id',
      req.params.id
    );
    console.log(warehouseInventories.length);
    if (warehouseInventories.length === 0) {
      res.status(404).send(`No warehouse with the id ${req.params.id}found`);
    }
    res.json(warehouseInventories);
  } catch (error) {
    res
      .status(500)
      .send(
        `Error retriving inventories for warehouse with id ${req.params.id} : ${error}`
      );
  }
};

const addNewWarehouse = async (req, res) => {
  console.log("post request")
  console.log(req.body)
}

module.exports = {
  getAllWarehouses,
  getWareHouseDetailById,
  getInventoriesForWarehouse,
  addNewWarehouse
};
