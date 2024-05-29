module.exports = {
    async getAllProducts(req, res) {
      try {
        const products = await Product.find(); // Assuming you have a Product model
        return res.json(products);
      } catch (error) {
        return res.serverError(error);
      }
    },

    createProduct: async function(req, res) {
      try {
       
        const { name, description, image, price, category } = req.body;
    
        const product = await Product.create({ name, description, image, price, category }).fetch();
    
        // Send success response
        //return res.status(200).json({ message: 'Product created successfully'});
        return res.redirect('/shop')
      } catch (error) {
        console.error(error);
        // Send error response
        return res.status(500).json({ error: 'Failed to create product' });
      }
    }
    
  };