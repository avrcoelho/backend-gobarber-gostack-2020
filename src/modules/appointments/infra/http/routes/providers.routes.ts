import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';
import ProviderDayAvailabilityController from '../controllers/ProviderDayAvailabilityController';
import ProviderMonthAvailabilityController from '../controllers/ProviderMonthAvailabilityController';

const providerssRouter = Router();
const providersController = new ProvidersController();
const providerDayAvailabilityController = new ProviderDayAvailabilityController();
const providerMonthAvailabilityController = new ProviderMonthAvailabilityController();

providerssRouter.use(ensureAuthenticated);

providerssRouter.get('/', providersController.create);
providerssRouter.get(
  '/:provide_id/month-availability',
  celebrate({
    [Segments.PARAMS]: { provider_id: Joi.string().uuid().required },
  }),
  providerMonthAvailabilityController.index,
);
providerssRouter.get(
  '/:provide_id/day-availability',
  celebrate({
    [Segments.PARAMS]: { provider_id: Joi.string().uuid().required },
  }),
  providerDayAvailabilityController.index,
);

export default providerssRouter;
