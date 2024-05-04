import { Inject, Injectable, InternalServerErrorException, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthorizeDto } from './dto/auth.dto';
import { User } from '../users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}

	// @Inject() jwtService: JwtService;
	// async createTokenByJwt(body: AuthorizeDto) {
	// 	try {
	// 		const user_info = await this.usersRepo.findOneBy({
        
  //     });

	// 		if (!user_info || !user_info.id) {
	// 			throw new UnauthorizedException();
	// 		}

	// 		const user = await this.usersRepo.getUserById({ id: user_info.id });

	// 		if (!user || !user.id) {
	// 			throw new UnauthorizedException();
	// 		}

	// 		const access_token = await this.jwtService.signAsync(
	// 			{
	// 				...user,
	// 			},
	// 			{
	// 				algorithm: 'HS256',
	// 				expiresIn: process.env.JWT_EXPIRES_IN,
	// 				secret: process.env.JWT_SECRET,
	// 				privateKey: process.env.JWT_SECRET,
	// 			},
	// 		);
	// 		return { access_token, user };
	// 	} catch (error) {
	// 		if (error instanceof UnauthorizedException) {
	// 			throw new ForbiddenException();
	// 		}

	// 		throw new InternalServerErrorException();
	// 	}
	// }
}