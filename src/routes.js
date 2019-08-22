const express = require('express').Router()
const TelegramController = require('./controllers/TelegramController')

const routes = express

routes.get('/', TelegramController.getUpdates)


module.exports = routes;
