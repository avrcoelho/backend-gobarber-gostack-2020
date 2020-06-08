// sobrescrever uma tipagem do express
declare namespace Express {
  // sobrescrever a importação que existe no Request. Ele não substitui, faz um anexo
  // eslint-disable-next-line @typescript-eslint/interface-name-prefix
  export interface Request {
    user: {
      id: string;
    };
  }
}
