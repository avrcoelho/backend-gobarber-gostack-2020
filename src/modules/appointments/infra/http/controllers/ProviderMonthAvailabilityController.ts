import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderMonthAvailibilityService from '@modules/appointments/services/ListProviderMonthAvailibilityService';

export default class ProviderMonthAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { month, year } = request.query;
    const { provider_id } = request.params;

    const listProviderMonthAvailibility = container.resolve(
      ListProviderMonthAvailibilityService,
    );

    const availability = await listProviderMonthAvailibility.execute({
      provider_id,
      month: Number(month),
      year: Number(year),
    });

    return response.json(availability);
  }
}
