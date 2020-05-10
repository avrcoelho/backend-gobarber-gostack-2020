import ListProviderDayAvailibilityService from '../ListProviderDayAvailibilityService';
import FakeAppointmentsRepository from '../../repositories/fakes/FakeAppointmentsRepository';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderDayAvailibility: ListProviderDayAvailibilityService;

describe('ListDayAvailibility', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderDayAvailibility = new ListProviderDayAvailibilityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the day availability', async () => {
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 4, 20, 14, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 4, 20, 15, 0, 0),
    });

    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 4, 20, 11).getTime();
    });

    const availability = await listProviderDayAvailibility.execute({
      provider_id: 'user',
      day: 20,
      year: 2020,
      month: 5,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { hour: 8, available: false },
        { hour: 9, available: false },
        { hour: 10, available: false },
        { hour: 14, available: false },
        { hour: 13, available: true },
        { hour: 15, available: false },
        { hour: 16, available: true },
      ]),
    );
  });
});
