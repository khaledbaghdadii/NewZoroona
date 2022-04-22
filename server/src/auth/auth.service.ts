import { ForbiddenException, Injectable, Session } from '@nestjs/common';
import { SignupDTO, SigninDTO } from '../auth/dto';
import { PrismaService } from '../prisma/prisma.service';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signup(
    dto: SignupDTO,
    @Session() session: Record<string, any>,
    isManager: boolean,
  ) {
    //generated the password hash
    const hash = await argon.hash(dto.password);

    //save the user in the db
    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash: hash,
          gender: dto.gender,
          name: dto.name,
          phoneNumber: dto.phoneNumber,
          roleTypeId: isManager ? 2 : 3,
          dateOfBirth: dto.dateOfBirth,
          valid: !dto.fromRequest
        },
      });
      delete user.hash;
      if (!isManager) {
        //add session cookie
        session.userId = user.id;
        session.name = user.name;
        session.roleTypeId = user.roleTypeId;
        session.key_name = user.id;
      }

      //return the user
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if ((error.code = 'P2002')) {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }
  async signin(dto: SigninDTO, @Session() session: Record<string, any>) {
    //find the user by email
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    //if user does not exist throw exception
    if (!user)
      throw new ForbiddenException('No account exists with that email');
    //compare password
    const pwMatches = await argon.verify(user.hash, dto.password);
    //if password not correct throw exception
    if (!pwMatches)
      throw new ForbiddenException('Email and password do not match');
    //delete hash from returned user
    delete user.hash;
    //save session cookie
    session.key = user.id;
    session.key_name = user.id;
    session.userId = user.id;
    session.name = user.name;
    session.roleTypeId = user.roleTypeId;

    //send back the user
    return user;
  }
  async logout(@Session() session: Record<string, any>) {
    if (session.userId) {
      session.destroy((e) => {
        if (e) {
          console.log(e);
        }
      });
      return 'Logged out successfully';
    }
    return "You're not logged in";
  }
}
