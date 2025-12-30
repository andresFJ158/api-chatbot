import { PrismaService } from '../prisma/prisma.service';
import { WebSocketGateway } from '../websocket/websocket.gateway';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { AssignConversationDto } from './dto/assign-conversation.dto';
import { UpdateModeDto } from './dto/update-mode.dto';
export declare class ConversationsService {
    private prisma;
    private websocketGateway;
    private readonly logger;
    constructor(prisma: PrismaService, websocketGateway: WebSocketGateway);
    findAll(filters?: {
        tag?: string;
        assignedAgentId?: string;
        mode?: string;
    }): Promise<({
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            phone: string;
            name: string;
            email: string;
            tags: string[];
        };
        assignedAgent: {
            id: string;
            name: string;
            email: string;
            online: boolean;
        };
        messages: {
            id: string;
            createdAt: Date;
            agentId: string | null;
            conversationId: string;
            sender: string;
            content: string;
        }[];
    } & {
        id: string;
        userId: string;
        assignedAgentId: string | null;
        tag: string | null;
        mode: string;
        lastMessage: string | null;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            phone: string | null;
            name: string;
            lastName: string | null;
            email: string | null;
            city: string | null;
            whatsappJid: string | null;
            tags: string[];
        };
        assignedAgent: {
            id: string;
            name: string;
            email: string;
            online: boolean;
        };
        messages: {
            id: string;
            createdAt: Date;
            agentId: string | null;
            conversationId: string;
            sender: string;
            content: string;
        }[];
    } & {
        id: string;
        userId: string;
        assignedAgentId: string | null;
        tag: string | null;
        mode: string;
        lastMessage: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    create(createDto: CreateConversationDto): Promise<{
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            phone: string | null;
            name: string;
            lastName: string | null;
            email: string | null;
            city: string | null;
            whatsappJid: string | null;
            tags: string[];
        };
        assignedAgent: {
            id: string;
            name: string;
            email: string;
            online: boolean;
        };
        messages: {
            id: string;
            createdAt: Date;
            agentId: string | null;
            conversationId: string;
            sender: string;
            content: string;
        }[];
    } & {
        id: string;
        userId: string;
        assignedAgentId: string | null;
        tag: string | null;
        mode: string;
        lastMessage: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    assign(id: string, assignDto: AssignConversationDto): Promise<{
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            phone: string | null;
            name: string;
            lastName: string | null;
            email: string | null;
            city: string | null;
            whatsappJid: string | null;
            tags: string[];
        };
        assignedAgent: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            email: string;
            password: string;
            role: string;
            online: boolean;
        };
    } & {
        id: string;
        userId: string;
        assignedAgentId: string | null;
        tag: string | null;
        mode: string;
        lastMessage: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateMode(id: string, updateModeDto: UpdateModeDto): Promise<{
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            phone: string | null;
            name: string;
            lastName: string | null;
            email: string | null;
            city: string | null;
            whatsappJid: string | null;
            tags: string[];
        };
        assignedAgent: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            email: string;
            password: string;
            role: string;
            online: boolean;
        };
    } & {
        id: string;
        userId: string;
        assignedAgentId: string | null;
        tag: string | null;
        mode: string;
        lastMessage: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
