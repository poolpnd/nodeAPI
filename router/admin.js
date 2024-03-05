/**
 * Express router for handling admin routes.
 * @module adminRouter
 */

const express = require('express');
const router = express.Router();

/**
 * Route for the root path.
 * @name GET /
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.get('/', (req, res)=>{
    res.send('Welcome to our API');
})

/**
 * Route for handling POST requests to /post.
 * @name POST /post
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.post('/post', (req, res)=>{
    res.send('Data received from POST request');
})

/**
 * Route for fetching user data.
 * @name GET /user
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.get('/user', (req, res)=>{
    res.send('Fetching user data...');
})

/**
 * Route for fetching data for a specific user.
 * @name GET /user/:id
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.get('/user/:id', (req, res)=>{
    res.send(`Fetching data for user with ID: ${req.params.id}`);
})

/**
 * Route for updating data for a specific user.
 * @name PUT /user/:id
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.put('/user/:id', (req, res)=>{
    res.send(`Updating data for user with ID: ${req.params.id}`);
})

/**
 * Route for deleting data for a specific user.
 * @name DELETE /user/:id
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.delete('/user/:id', (req, res)=>{
    res.send(`Deleting data for user with ID: ${req.params.id}`);
})

/**
 * Route for fetching data for a user with ID and name.
 * @name GET /user/:id/:name
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.get('/user/:id/:name', (req, res)=>{
    res.send(`Fetching data for user ${req.params.name} with ID: ${req.params.id}`);
})

/**
 * Route for fetching data for a user with ID, name, and age.
 * @name GET /user/:id/:name/:age
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.get('/user/:id/:name/:age', (req, res)=>{
    res.send(`Fetching data for user ${req.params.name} aged ${req.params.age} with ID: ${req.params.id}`);
})

/**
 * Route for fetching data for a user with ID, name, age, and city.
 * @name GET /user/:id/:name/:age/:city
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.get('/user/:id/:name/:age/:city', (req, res)=>{
    res.send(`Fetching data for user ${req.params.name} aged ${req.params.age} from ${req.params.city} with ID: ${req.params.id}`);
})

/**
 * Route for fetching data for a user with ID, name, age, city, and country.
 * @name GET /user/:id/:name/:age/:city/:country
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.get('/user/:id/:name/:age/:city/:country', (req, res)=>{
    res.send(`Fetching data for user ${req.params.name} aged ${req.params.age} from ${req.params.city}, ${req.params.country} with ID: ${req.params.id}`);
})

/**
 * Route for fetching data for a user with ID, name, age, city, country, and state.
 * @name GET /user/:id/:name/:age/:city/:country/:state
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.get('/user/:id/:name/:age/:city/:country/:state', (req, res)=>{
    res.send(`Fetching data for user ${req.params.name} aged ${req.params.age} from ${req.params.city}, ${req.params.state}, ${req.params.country} with ID: ${req.params.id}`);
})

module.exports = router;
