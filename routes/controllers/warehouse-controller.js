const express = require('express');
const app = express();
const knex = require('knex')(require('../../knexfile'));

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
    console.log('hi');
    const warehouse = await knex('warehouses')
      .select(
        'warehouse_name',
        'address',
        'city',
        'country',
        'contact_position',
        'contact_phone',
        'contact_email'
      )
      .where({ id: req.params.id });
    console.log(warehouse);
    if (warehouse.length === 0) {
      res.status(404).send('No warehouse found');
    } else {
      res.json(warehouse);
    }
  } catch (error) {}
};

module.exports = { getAllWarehouses, getWareHouseDetailById };
