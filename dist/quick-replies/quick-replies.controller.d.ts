import { QuickRepliesService } from './quick-replies.service';
import { CreateQuickReplyDto } from './dto/create-quick-reply.dto';
import { UpdateQuickReplyDto } from './dto/update-quick-reply.dto';
export declare class QuickRepliesController {
    private readonly quickRepliesService;
    private readonly logger;
    constructor(quickRepliesService: QuickRepliesService);
    create(createQuickReplyDto: CreateQuickReplyDto): Promise<{
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
    update(id: string, updateQuickReplyDto: UpdateQuickReplyDto): Promise<{
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
