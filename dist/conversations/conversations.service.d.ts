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
            name: string;
            createdAt: Date;
            updatedAt: Date;
            phone: string;
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
            sender: string;
            content: string;
            conversationId: string;
            agentId: string | null;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        mode: string;
        userId: string;
        assignedAgentId: string | null;
        tag: string | null;
        lastMessage: string | null;
    })[]>;
    findOne(id: string): Promise<{
        user: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            phone: string | null;
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
            sender: string;
            content: string;
            conversationId: string;
            agentId: string | null;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        mode: string;
        userId: string;
        assignedAgentId: string | null;
        tag: string | null;
        lastMessage: string | null;
    }>;
    create(createDto: CreateConversationDto): Promise<{
        user: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            phone: string | null;
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
            sender: string;
            content: string;
            conversationId: string;
            agentId: string | null;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        mode: string;
        userId: string;
        assignedAgentId: string | null;
        tag: string | null;
        lastMessage: string | null;
    }>;
    assign(id: string, assignDto: AssignConversationDto): Promise<{
        user: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            phone: string | null;
            lastName: string | null;
            email: string | null;
            city: string | null;
            whatsappJid: string | null;
            tags: string[];
        };
        assignedAgent: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            role: string;
            online: boolean;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        mode: string;
        userId: string;
        assignedAgentId: string | null;
        tag: string | null;
        lastMessage: string | null;
    }>;
    updateMode(id: string, updateModeDto: UpdateModeDto): Promise<{
        user: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            phone: string | null;
            lastName: string | null;
            email: string | null;
            city: string | null;
            whatsappJid: string | null;
            tags: string[];
        };
        assignedAgent: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            role: string;
            online: boolean;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        mode: string;
        userId: string;
        assignedAgentId: string | null;
        tag: string | null;
        lastMessage: string | null;
    }>;
}
