import { Router } from 'express';
import IndexController from '../controllers/index';

const router = Router();
const indexController = new IndexController();

export function setRoutes(app) {
    app.use('/api', router);
    router.get('/items', indexController.getAllItems.bind(indexController));
    router.post('/items', indexController.createItem.bind(indexController));
}