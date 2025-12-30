import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
export declare class MessagesController {
    private messagesService;
    constructor(messagesService: MessagesService);
    create(createDto: CreateMessageDto, req: any): Promise<{
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
