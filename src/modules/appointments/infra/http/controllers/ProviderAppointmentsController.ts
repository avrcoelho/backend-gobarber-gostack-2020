import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderAppointments from '@modules/appointments/services/ListProviderAppointments';
import { classToClass } from 'class-transformer';

export default class ProviderAppointmentsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { day, month, year } = request.query;
    const provider_id = request.user.id;

    const createAppointment = container.resolve(ListProviderAppointments);

    const appointments = await createAppointment.execute({
      day: Number(day),
      month: Number(month),
      year: Number(year),
      provider_id,
    });

    // classToClass: faz a serealização
    return response.json(classToClass(appointments));
  }
}
