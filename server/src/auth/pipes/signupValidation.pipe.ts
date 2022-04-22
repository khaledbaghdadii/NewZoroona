import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { SignupDTO } from '../dto';

export class PasswordValidation implements PipeTransform {
  transform(value: SignupDTO, metadata: ArgumentMetadata) {
    const password = value.password;
    if (password.length < 5 || password.length > 15) {
      throw new BadRequestException(
        'password should be between 5 and 15 characters',
      );
    }
    if (this.isNotValidPassword(password)) {
      throw new BadRequestException('password invalid');
    }

    return value;
  }

  isNotValidPassword(str) {
    return (
      !/[a-z]/.test(str) ||
      !/[A-Z]/.test(str) ||
      !/\d/.test(str) ||
      /[!@#$%\^&*)?{},<>~`"'/\\\]\](+=_-]/.test(str)
    );
  }
  isNotValidUsername(str) {
    return /[!@#$%\^&*)?{},<>~`"'/\\\]\](+=_-]/.test(str);
  }
}
