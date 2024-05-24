const express = require('express');
const app = express();
const knex = require('knex')(require('../../knexfile'));

const getAllWarehouses = async (req,res) => {
  try {
    const warehouses = await knex('warehouses');
    res.status(200).json(warehouses)
  } catch (error) {
    res.status(400).send("Error getting warehouse")
  }
};

const getWareHouseDetailById = () => {
  
}

module.exports = {getAllWarehouses}