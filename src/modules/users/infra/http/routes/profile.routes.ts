import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import ProfileController from '../controllers/ProfileController';

const usersRouter = Router();
const profileController = new ProfileController();

usersRouter.use(ensureAuthenticated);

usersRouter.put('/', profileController.update);

export default usersRouter;
