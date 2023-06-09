import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import {ConfigService} from '@nestjs/config' ;
import { UserService } from 'src/user/service/user.service';
import { LicenseManagerUserSubscriptions } from 'aws-sdk';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,'jwt') {
  constructor(
    readonly configService : ConfigService,
    readonly userService   : UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('jwt.jwtAccessSecret')
    });
  }

  async validate(payload: any) {
    this.userService.validateUser(payload.userId);
    return { userId: payload.userId };
  }
}