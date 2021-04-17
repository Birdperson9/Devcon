const express = require('express')
const router = express.Router()

// @desc Test route
// @route GET /api/profile
// @access Public
router.get('/', (req, res) => res.send('Profile route'))

module.exports = router
