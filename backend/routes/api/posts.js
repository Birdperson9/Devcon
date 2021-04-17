const express = require('express')
const router = express.Router()

// @desc Test route
// @route GET /api/posts
// @access Public
router.get('/', (req, res) => res.send('Posts route'))

module.exports = router
