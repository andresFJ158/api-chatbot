import { PrismaService } from '../prisma/prisma.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ConversationsService } from '../conversations/conversations.service';
import { MessagesService } from '../messages/messages.service';
export declare class ContactsService {
    private prisma;
    private conversationsService;
    private messagesService;
    private readonly logger;
    constructor(prisma: PrismaService, conversationsService: ConversationsService, messagesService: MessagesService);
    create(createDto: CreateContactDto): Promise<{
        _count: {
            conversations: number;
        };
    } & {
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
    }>;
    findAll(city?: string, search?: string): Promise<({
        _count: {
            conversations: number;
        };
    } & {
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
    })[]>;
    findOne(id: string): Promise<{
        _count: {
            conversations: number;
        };
        conversations: {
            id: string;
            userId: string;
            assignedAgentId: string | null;
            tag: string | null;
            mode: string;
            lastMessage: string | null;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
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
    }>;
    findByPhone(phone: string): Promise<{
        _count: {
            conversations: number;
        };
    } & {
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
    }>;
    update(id: string, updateDto: UpdateContactDto): Promise<{
        _count: {
            conversations: number;
        };
    } & {
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
    }>;
    remove(id: string): Promise<{
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
    }>;
    getCities(): Promise<string[]>;
    getStats(): Promise<{
        totalContacts: number;
        contactsWithCity: number;
        contactsWithEmail: number;
        contactsWithConversations: number;
    }>;
}
