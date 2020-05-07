import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppoitmentDTO from '../dtos/ICreateAppoitmentDTO';

export default interface IAppointmentRepository {
  create(data: ICreateAppoitmentDTO): Promise<Appointment>;
  findByDate(data: Date): Promise<Appointment | undefined>;
}
