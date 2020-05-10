import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';

const providerssRouter = Router();
const providersController = new ProvidersController();

providerssRouter.use(ensureAuthenticated);

providerssRouter.get('/', providersController.create);

export default providerssRouter;
