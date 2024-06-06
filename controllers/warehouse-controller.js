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
  console.log(req.body);
  if (
    !req.body.warehouse_name ||
    !req.body.address ||
    !req.body.city ||
    !req.body.country ||
    !req.body.contact_name ||
    !req.body.contact_phone ||
    !req.body.contact_email ||
    !req.body.contact_position
  ) {
    console.log('em');
    return res.status(400).json('Please provide all fields');
  }
  try {
    console.log('k');
    const result = await knex('warehouses').insert(req.body);
    console.log(result);
    const newWarehouseId = result[0];
    const createdWarehouse = await knex('warehouses').where({
      id: newWarehouseId,
    });
    res.status(201).json(createdWarehouse);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Unable to create new warehouse: ${error}`,
    });
  }
};

const updateWarehouse = async (req, res) => {
  if (
    !req.body.warehouse_name ||
    !req.body.address ||
    !req.body.city ||
    !req.body.country ||
    !req.body.contact_name ||
    !req.body.contact_phone ||
    !req.body.contact_email ||
    !req.body.contact_position
  ) {
    return res.status(400).json('Please provide all fields');
  }

  try {
    const warehouseUpdated = await knex('warehouses')
      .where({ id: req.params.id })
      .update(req.body);
    if (warehouseUpdated === 0) {
      return res
        .status(400)
        .json({ message: `Warwhouse with Id ${req.params.id} not found` });
    }

    const updatedWarehouse = await knex('warehouses').where({
      id: req.params.id,
    });
    res.json(updatedWarehouse[0]);
  } catch (error) {
    res.status(500).json({
      message: `Unable to update warehouse with ID ${req.params.id}: ${error}`,
    });
  }
};

const deleteWarehouse = async (req, res) => {
  try {
    const rowsDeleted = await knex('warehouses')
      .where({ id: req.params.id })
      .delete();

    if (rowsDeleted === 0) {
      return res
        .status(400)
        .json(`Warehouse with id ${req.params.id} not found`);
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: `Unable to delete warehouse: ${error}` });
  }
};

module.exports = {
  getAllWarehouses,
  getWareHouseDetailById,
  getInventoriesForWarehouse,
  addNewWarehouse,
  updateWarehouse,
  deleteWarehouse,
};
