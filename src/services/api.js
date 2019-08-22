const api = require('axios')
const telegramToken = require('../config/telegram.json').token

const api = axios.create({
    baseURL: `https://api.telegram.org/${telegramToken}`,
})