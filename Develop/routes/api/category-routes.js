const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const categoryData = await Category.findAll();
    res.status(200).json(categoryData);
  } catch {
  // be sure to include its associated Products
    res.status(500).json(err);
}
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    // be sure to include its associated Products
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{model: Product}]
    })
    if (!categoryData) {
      res.status(404).json({ });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  try {
    // be sure to include its associated Products
    const categoryData = await Category.update({
      where: {
        id: req.params.id
      },
        include: [{model: Product}]
    })
    if (!categoryData) {
      res.status(404).json({ });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
