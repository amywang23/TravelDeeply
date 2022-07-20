const express = require('express');
const router = express.Router();

/** Require controller modules */
const event_controller = require('../controllers/eventController.js');
const organization_controller = require('../controllers/organizationController.js');
const user_controller = require('../controllers/userController.js');

/// EVENT ROUTES ///

/** GET request to create an Event */
router.get('/event/create', event_controller.event_create_get);

/** POST request to create an Event */
router.post('/event/create', event_controller.event_create_post);

/** GET request to delete an Event */
router.get('/event/:id/delete', event_controller.event_delete_get);

/** POST request to delete an Event */
router.post('/event/:id/delete', event_controller.event_delete_post);

/** GET request to update an Event */
router.get('/event/:id/update', event_controller.event_update_get);

/** POST request to update an Event */
router.post('/event/:id/update', event_controller.event_update_post);

/** GET request for one particular Event */
router.get('/event/:id', event_controller.event_detail);

/** GET request for a list of all Events */
router.get('/events', event_controller.event_list);

/// ORGANIZATION ROUTES ///

/** GET request to create an Organization */
router.get('/organization/create', organization_controller.organization_create_get);

/** POST request to create an Organization */
router.post('/organization/create', organization_controller.organization_create_post);

/** GET request to delete an Organization */
router.get('/organization/:id/delete', organization_controller.organization_delete_get);

/** POST request to delete an Organization */
router.post('/organization/:id/delete', organization_controller.organization_delete_post);

/** GET request to update an Organization */
router.get('/organization/:id/update', organization_controller.organization_update_get);

/** POST request to update an Organization */
router.post('/organization/:id/update', organization_controller.organization_update_post);

/** GET request for one particular Organization */
router.get('/organization/:id', organization_controller.organization_detail);

/** GET request for a list of all Organizations */
router.get('/organizations', organization_controller.organization_list);

/// USER ROUTES ///

/** GET request to create an User */
router.get('/user/create', user_controller.user_create_get);

/** POST request to create an User */
router.post('/user/create', user_controller.user_create_post);

/** GET request to delete an User */
router.get('/user/:id/delete', user_controller.user_delete_get);

/** POST request to delete an User */
router.post('/user/:id/delete', user_controller.user_delete_post);

/** GET request to update an User */
router.get('/user/:id/update', user_controller.user_update_get);

/** POST request to update an User */
router.post('/user/:id/update', user_controller.user_update_post);

/** GET request for one particular User */
router.get('/user/:id', user_controller.user_detail);

/** GET request for a list of all Users */
router.get('/users', user_controller.user_list);

module.exports = router;