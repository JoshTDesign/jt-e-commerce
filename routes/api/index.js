const router = require('express').Router();
const productRoutes = require('./productRoutes');
const tagRoutes = require('./tagRoutes');
const categoryRoutes = require('./categoryRoutes');

// Prefix all routes defined in `bookRoutes.js` with `/books
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);
router.use('/category', categoryRoutes);

module.exports = router;
