import { container } from 'tsyringe';

import uploadConfig from '@config/upload';

import IStorageProvider from './models/IStorageProvider';
import DiskStorageProvider from './implementation/DiskStorageProvider';
import S3storageProvider from './implementation/S3storageProvider';

const providers = {
  disk: DiskStorageProvider,
  S3: S3storageProvider,
};

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  providers[uploadConfig.driver],
);
