import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderDayAvailibilityService from '@modules/appointments/services/ListProviderDayAvailibilityService';

export default class ProviderDayAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { day, month, year } = request.query;
    const { provider_id } = request.params;

    const listProviderDayAvailibility = container.resolve(
      ListProviderDayAvailibilityService,
    );

    const availability = await listProviderDayAvailibility.execute({
      provider_id,
      day: Number(day),
      month: Number(month),
      year: Number(year),
    });

    return response.json(availability);
  }
}
