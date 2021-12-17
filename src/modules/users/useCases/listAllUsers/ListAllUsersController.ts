import { Request, Response } from "express";
import { IncomingHttpHeaders } from "http";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

interface IRequest {
  user_id: string;
}
interface IRequestCustom<Theader> extends Request {
  headers: IncomingHttpHeaders & Theader;
}

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: IRequestCustom<IRequest>, response: Response): Response {
    const { user_id } = request.headers;
    const userList = this.listAllUsersUseCase.execute({ user_id });
    return response.json(userList);
  }
}

export { ListAllUsersController };
