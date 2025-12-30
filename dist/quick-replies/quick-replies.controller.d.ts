import { QuickRepliesService } from './quick-replies.service';
import { CreateQuickReplyDto } from './dto/create-quick-reply.dto';
import { UpdateQuickReplyDto } from './dto/update-quick-reply.dto';
export declare class QuickRepliesController {
    private readonly quickRepliesService;
    private readonly logger;
    constructor(quickRepliesService: QuickRepliesService);
    create(createQuickReplyDto: CreateQuickReplyDto): Promise<{
        id: string;
        order: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        message: string;
        category: string | null;
    }>;
    findAll(category?: string): Promise<{
        id: string;
        order: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        message: string;
        category: string | null;
    }[]>;
    getCategories(): Promise<string[]>;
    findOne(id: string): Promise<{
        id: string;
        order: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        message: string;
        category: string | null;
    }>;
    update(id: string, updateQuickReplyDto: UpdateQuickReplyDto): Promise<{
        id: string;
        order: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        message: string;
        category: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        order: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        message: string;
        category: string | null;
    }>;
}
