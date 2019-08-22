const api = require('../../services/api')

module.exports = {

    async getUpdates(req, res) {

        const response = await api.get('/getUpdates')

        console.log(response.data)

    }


}