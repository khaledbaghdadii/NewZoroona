import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const session = request.session;
    return matchRoles(roles, session.roleTypeId);
  }
}

function matchRoles(role, sessionRoleTypeId): boolean {
  let sessionRole = '';
  if (sessionRoleTypeId === 1) sessionRole = 'admin';
  else if (sessionRoleTypeId == 2) sessionRole = 'manager';
  else if (sessionRoleTypeId == 3) sessionRole = 'user';
  if (role != sessionRole) return false;
  return true;
}
