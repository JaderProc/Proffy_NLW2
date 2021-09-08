import express from 'express';
import ClassesControllers from './controllers/ClassesControllers';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();

const classesControlers = new ClassesControllers();
const connectionsController = new ConnectionsController();

routes.get('/classes', classesControlers.index);
routes.post('/classes', classesControlers.create);

routes.get('/connections',connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;