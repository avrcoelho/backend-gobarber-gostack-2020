import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppoitmentDTO from '../dtos/ICreateAppoitmentDTO';
import IFindAllMonthProviderDTO from '../dtos/IFindAllMonthProviderDTO';
import IFindAllDayProviderDTO from '../dtos/IFindAllDayProviderDTO';

export default interface IAppointmentRepository {
  create(data: ICreateAppoitmentDTO): Promise<Appointment>;
  findByDate(data: Date): Promise<Appointment | undefined>;
  findAllInMothFromProvider(
    data: IFindAllMonthProviderDTO,
  ): Promise<Appointment[]>;
  findAllInDayFromProvider(
    data: IFindAllDayProviderDTO,
  ): Promise<Appointment[]>;
}
