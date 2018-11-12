// docs: https://www.npmjs.com/package/config
// https://github.com/lorenwest/node-config/wiki/Environment-Variables
// Rename example.env to .env
// docs: https://github.com/motdotla/dotenv
const dotenv = require('dotenv').config({ path: process.cwd(), 'example.env' })

module.exports = {
  app_name: dotenv.APP_NAME || 'app seed'
}

