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
        createdAt: Date;
        conversationId: string;
        sender: string;
        agentId: string | null;
        content: string;
    }>;
    findByConversation(conversationId: string): Promise<({
        agent: {
            id: string;
            name: string;
            email: string;
        };
    } & {
        id: string;
        createdAt: Date;
        conversationId: string;
        sender: string;
        agentId: string | null;
        content: string;
    })[]>;
}
