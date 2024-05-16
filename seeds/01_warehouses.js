/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const warehousesData = require('../seeds-data/warehouses-data');
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('warehouses').del()
  await knex('warehouses').insert(warehousesData);
};


