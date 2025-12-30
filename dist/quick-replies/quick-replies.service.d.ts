import { PrismaService } from '../prisma/prisma.service';
import { CreateQuickReplyDto } from './dto/create-quick-reply.dto';
import { UpdateQuickReplyDto } from './dto/update-quick-reply.dto';
export declare class QuickRepliesService {
    private prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    create(createDto: CreateQuickReplyDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        message: string;
        category: string | null;
        order: number;
        title: string;
    }>;
    findAll(category?: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        message: string;
        category: string | null;
        order: number;
        title: string;
    }[]>;
    getCategories(): Promise<string[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        message: string;
        category: string | null;
        order: number;
        title: string;
    }>;
    update(id: string, updateDto: UpdateQuickReplyDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        message: string;
        category: string | null;
        order: number;
        title: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        message: string;
        category: string | null;
        order: number;
        title: string;
    }>;
}
