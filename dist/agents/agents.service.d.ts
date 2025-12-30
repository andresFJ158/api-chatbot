import { PrismaService } from '../prisma/prisma.service';
import { CreateAgentDto } from './dto/create-agent.dto';
export declare class AgentsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        email: string;
        role: string;
        online: boolean;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        email: string;
        role: string;
        online: boolean;
    }>;
    create(createDto: CreateAgentDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        email: string;
        role: string;
        online: boolean;
    }>;
    updateOnlineStatus(id: string, online: boolean): Promise<{
        id: string;
        name: string;
        email: string;
        role: string;
        online: boolean;
    }>;
}
