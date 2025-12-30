import { PrismaService } from '../prisma/prisma.service';
import { WebSocketGateway } from '../websocket/websocket.gateway';
import { BotService } from '../bot/bot.service';
import { WhatsAppService } from '../whatsapp/whatsapp.service';
import { CreateMessageDto } from './dto/create-message.dto';
export declare class MessagesService {
    private prisma;
    private websocketGateway;
    private botService;
    private whatsappService;
    constructor(prisma: PrismaService, websocketGateway: WebSocketGateway, botService: BotService, whatsappService: WhatsAppService);
    create(createDto: CreateMessageDto): Promise<{
        agent: {
            id: string;
            name: string;
            email: string;
        };
    } & {
        id: string;
        sender: string;
        content: string;
        createdAt: Date;
        conversationId: string;
        agentId: string | null;
    }>;
    findByConversation(conversationId: string): Promise<({
        agent: {
            id: string;
            name: string;
            email: string;
        };
    } & {
        id: string;
        sender: string;
        content: string;
        createdAt: Date;
        conversationId: string;
        agentId: string | null;
    })[]>;
}
