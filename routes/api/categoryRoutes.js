const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
router.get('/', async(req, res) => {
  try {
    const allCategories = await Category.findAll(req.params.id, {      
      include: [{model: Product}]
    });
    res.status(200).json(allCategories);
  }
catch (err) {
  res.status(500).json(err);
}
});

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const oneCategory = await Category.findByPk(req.params.id, {
      include: [{model: Product}]
    });
    res.status(200).json(oneCategory);
  }
catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async(req, res) => {
  try {
    const categoryData = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.put('/:id', async(req, res) => {
  try {
    const newData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!newData[0]) {
      res.status(404).json({ message: 'No item with this id!' });
      return;
    }
    res.status(200).json(newData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.delete('/:id', async(req, res) => {
  // delete one product by its `id` value
  res.json(req.body);
  // try {
  //   const newData = await Category.destroy({
  //     where: {
  //       id: req.params.id,
  //     },
  //   });
  //   if (!newData) {
  //     res.status(404).json({ message: 'no such category'});
  //     return;
  //   } 
  // res.status(200).json(newData);
  // } catch (err) {
  //   res.status(400).json(err);
  // }
});

module.exports = router;
