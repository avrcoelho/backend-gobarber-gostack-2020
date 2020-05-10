import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../../repositories/fake/FakeUsersRepository';
import ShowProfileService from '../ShowProfileService';

let fakeUsersRepository: FakeUsersRepository;
let showProfile: ShowProfileService;

describe('ShowProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    showProfile = new ShowProfileService(fakeUsersRepository);
  });

  it('should be able to show the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456789',
    });

    const profile = await showProfile.execute({
      user_id: user.id,
    });

    expect(profile).toEqual(user);
  });

  it('should be able to show the profile from non-existing user', async () => {
    await expect(
      showProfile.execute({
        user_id: 'non-exists-user-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
