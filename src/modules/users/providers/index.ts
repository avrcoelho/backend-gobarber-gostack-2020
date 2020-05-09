import { container } from 'tsyringe';

import IHashProvider from './hashProvider/models/IHashProvider';
import BcryptHashProvider from './hashProvider/implementations/BCryptHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', BcryptHashProvider);
