import IMailProvider from '../models/IMailProvider';
import ISendMailDTO from '../dtos/IsendMailDTO';

export default class FakeEmailProvider implements IMailProvider {
  private messages: ISendMailDTO[] = [];

  public async sendMail(message: ISendMailDTO): Promise<void> {
    this.messages.push(message);
  }
}
