import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateAgent(email: string, password: string): Promise<any> {
    const agent = await this.prisma.agent.findUnique({
      where: { email },
    });

    if (!agent) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, agent.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const { password: _, ...result } = agent;
    return result;
  }

  async login(loginDto: LoginDto) {
    const agent = await this.validateAgent(loginDto.email, loginDto.password);
    const payload = { email: agent.email, sub: agent.id, role: agent.role };

    return {
      access_token: this.jwtService.sign(payload),
      agent: {
        id: agent.id,
        name: agent.name,
        email: agent.email,
        role: agent.role,
      },
    };
  }

  async validateToken(payload: any) {
    const agent = await this.prisma.agent.findUnique({
      where: { id: payload.sub },
    });

    if (!agent) {
      throw new UnauthorizedException();
    }

    return agent;
  }
}

