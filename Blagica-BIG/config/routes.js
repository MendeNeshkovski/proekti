/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  '/': { view: 'pages/homepage' },
  '/about': { view: 'pages/about' },
  '/shop': { view: 'pages/shop' },
  '/contact': { view: 'pages/contact' },
  '/login': { view: 'pages/login' },
  '/api/products': 'ProductController.getAllProducts',
  'POST /products': 'ProductController.createProduct'
}