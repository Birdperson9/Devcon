const express = require('express')
const router = express.Router()

// @desc Test route
// @route GET /api/users
// @access Public
router.get('/', (req, res) => res.send('Users route'))

module.exports = router
