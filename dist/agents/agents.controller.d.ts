import { AgentsService } from './agents.service';
import { CreateAgentDto } from './dto/create-agent.dto';
export declare class AgentsController {
    private agentsService;
    private readonly logger;
    constructor(agentsService: AgentsService);
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
    updateOnlineStatus(id: string, body: {
        online: boolean;
    }): Promise<{
        id: string;
        name: string;
        email: string;
        role: string;
        online: boolean;
    }>;
}
