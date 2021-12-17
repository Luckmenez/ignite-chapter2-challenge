import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const emailAreadyTaken = this.usersRepository.findByEmail(email);

    if (emailAreadyTaken) {
      throw new Error("Email Already Taken");
    }

    const createdUser = this.usersRepository.create({ name, email });
    return createdUser;
  }
}

export { CreateUserUseCase };
