const express = require('express');
const knex = require('knex')(require('../../knexfile'));

const getAllWarehouses = async () => {
  try {
    const warehouses = await knex('warehouses');
    res.status(200).json(warehouses)
  } catch (error) {
    res.status(400).send("Error getting warehouse")
  }
};


module.exports = {getAllWarehouses}