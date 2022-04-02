import { ForbiddenException, Injectable, Session } from '@nestjs/common';
import { AuthDto } from 'src/dto';
import { PrismaService } from '../prisma/prisma.service';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signup(dto: AuthDto, @Session() session: Record<string, any>) {
    //generated the password hash
    const hash = await argon.hash(dto.password);

    //save the user in the db
    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash: hash,
          firstName: '',
          lastName: '',
        },
      });
      delete user.hash;

      //add session cookie
      session.userId = user.id;
      session.email = user.email;

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
  async signin(dto: AuthDto) {
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
    //if passwird not correct throw exception
    if (!pwMatches)
      throw new ForbiddenException('Email and password do not match');
    //delete hash from returned user
    delete user.hash;
    //send back the user
    return user;
  }
}
