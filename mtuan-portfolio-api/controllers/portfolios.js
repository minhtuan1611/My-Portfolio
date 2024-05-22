// const mongoose = require('mongoose')
const portfolio = require('../db/models/portfolio')

exports.getPortfolios = async (req, res) => {
  const portfolios = await portfolio.find({})
  return res.json(portfolios)
}
