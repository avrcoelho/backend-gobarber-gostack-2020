import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderAppointments from '@modules/appointments/services/ListProviderAppointments';

export default class ProviderAppointmentsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { day, month, year } = request.body;
    const provider_id = request.user.id;

    const createAppointment = container.resolve(ListProviderAppointments);

    const appointments = await createAppointment.execute({
      day,
      month,
      year,
      provider_id,
    });

    return response.json(appointments);
  }
}
