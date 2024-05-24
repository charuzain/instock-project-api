const express = require('express');
const app = express();
const knex = require('knex')(require('../../knexfile'));

const getAllInventories = async (req,res) => {
  try {
    const inventories = await knex('inventories');
    res.status(200).json(inventories);
  } catch (error) {
    res.status(400).json({ message: 'Error getting i nventories' });
  }
};

module.exports = { getAllInventories };
