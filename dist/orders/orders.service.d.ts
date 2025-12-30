import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InventoryService } from '../inventory/inventory.service';
import { WebSocketGateway } from '../websocket/websocket.gateway';
import { WhatsAppService } from '../whatsapp/whatsapp.service';
export declare class OrdersService {
    private prisma;
    private inventoryService;
    private websocketGateway;
    private whatsappService;
    private readonly logger;
    constructor(prisma: PrismaService, inventoryService: InventoryService, websocketGateway: WebSocketGateway, whatsappService: WhatsAppService);
    create(createDto: CreateOrderDto, agentId?: string): Promise<{
        agent: {
            id: string;
            createdAt: Date;
            name: string;
            email: string;
            password: string;
            role: string;
            online: boolean;
            updatedAt: Date;
        };
        user: {
            id: string;
            createdAt: Date;
            name: string;
            email: string | null;
            updatedAt: Date;
            phone: string | null;
            lastName: string | null;
            city: string | null;
            whatsappJid: string | null;
            tags: string[];
        };
        branch: {
            id: string;
            createdAt: Date;
            name: string;
            updatedAt: Date;
            phone: string | null;
            address: string;
            latitude: number;
            longitude: number;
            openingHours: string | null;
            description: string | null;
            isActive: boolean;
        };
        items: ({
            product: {
                category: {
                    id: string;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    description: string | null;
                    parentId: string | null;
                };
            } & {
                id: string;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                description: string;
                price: number;
                stock: number;
                categoryId: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            subtotal: number;
            discount: number;
            quantity: number;
            unitPrice: number;
            productId: string;
            orderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        agentId: string | null;
        updatedAt: Date;
        status: string;
        subtotal: number;
        discount: number;
        tax: number;
        total: number;
        notes: string | null;
        branchId: string;
        userId: string | null;
    }>;
    findAll(filters?: {
        branchId?: string;
        userId?: string;
        status?: string;
        startDate?: Date;
        endDate?: Date;
    }): Promise<({
        agent: {
            id: string;
            name: string;
            email: string;
        };
        user: {
            id: string;
            name: string;
            phone: string;
            lastName: string;
        };
        branch: {
            id: string;
            name: string;
            address: string;
        };
        items: ({
            product: {
                category: {
                    id: string;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    description: string | null;
                    parentId: string | null;
                };
            } & {
                id: string;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                description: string;
                price: number;
                stock: number;
                categoryId: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            subtotal: number;
            discount: number;
            quantity: number;
            unitPrice: number;
            productId: string;
            orderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        agentId: string | null;
        updatedAt: Date;
        status: string;
        subtotal: number;
        discount: number;
        tax: number;
        total: number;
        notes: string | null;
        branchId: string;
        userId: string | null;
    })[]>;
    findOne(id: string): Promise<{
        agent: {
            id: string;
            createdAt: Date;
            name: string;
            email: string;
            password: string;
            role: string;
            online: boolean;
            updatedAt: Date;
        };
        user: {
            id: string;
            createdAt: Date;
            name: string;
            email: string | null;
            updatedAt: Date;
            phone: string | null;
            lastName: string | null;
            city: string | null;
            whatsappJid: string | null;
            tags: string[];
        };
        branch: {
            id: string;
            createdAt: Date;
            name: string;
            updatedAt: Date;
            phone: string | null;
            address: string;
            latitude: number;
            longitude: number;
            openingHours: string | null;
            description: string | null;
            isActive: boolean;
        };
        items: ({
            product: {
                category: {
                    id: string;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    description: string | null;
                    parentId: string | null;
                };
            } & {
                id: string;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                description: string;
                price: number;
                stock: number;
                categoryId: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            subtotal: number;
            discount: number;
            quantity: number;
            unitPrice: number;
            productId: string;
            orderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        agentId: string | null;
        updatedAt: Date;
        status: string;
        subtotal: number;
        discount: number;
        tax: number;
        total: number;
        notes: string | null;
        branchId: string;
        userId: string | null;
    }>;
    update(id: string, updateDto: UpdateOrderDto): Promise<{
        agent: {
            id: string;
            createdAt: Date;
            name: string;
            email: string;
            password: string;
            role: string;
            online: boolean;
            updatedAt: Date;
        };
        user: {
            id: string;
            createdAt: Date;
            name: string;
            email: string | null;
            updatedAt: Date;
            phone: string | null;
            lastName: string | null;
            city: string | null;
            whatsappJid: string | null;
            tags: string[];
        };
        branch: {
            id: string;
            createdAt: Date;
            name: string;
            updatedAt: Date;
            phone: string | null;
            address: string;
            latitude: number;
            longitude: number;
            openingHours: string | null;
            description: string | null;
            isActive: boolean;
        };
        items: ({
            product: {
                category: {
                    id: string;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    description: string | null;
                    parentId: string | null;
                };
            } & {
                id: string;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                description: string;
                price: number;
                stock: number;
                categoryId: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            subtotal: number;
            discount: number;
            quantity: number;
            unitPrice: number;
            productId: string;
            orderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        agentId: string | null;
        updatedAt: Date;
        status: string;
        subtotal: number;
        discount: number;
        tax: number;
        total: number;
        notes: string | null;
        branchId: string;
        userId: string | null;
    }>;
    cancel(id: string, agentId?: string): Promise<{
        agent: {
            id: string;
            createdAt: Date;
            name: string;
            email: string;
            password: string;
            role: string;
            online: boolean;
            updatedAt: Date;
        };
        user: {
            id: string;
            createdAt: Date;
            name: string;
            email: string | null;
            updatedAt: Date;
            phone: string | null;
            lastName: string | null;
            city: string | null;
            whatsappJid: string | null;
            tags: string[];
        };
        branch: {
            id: string;
            createdAt: Date;
            name: string;
            updatedAt: Date;
            phone: string | null;
            address: string;
            latitude: number;
            longitude: number;
            openingHours: string | null;
            description: string | null;
            isActive: boolean;
        };
        items: ({
            product: {
                category: {
                    id: string;
                    createdAt: Date;
                    name: string;
                    updatedAt: Date;
                    description: string | null;
                    parentId: string | null;
                };
            } & {
                id: string;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                description: string;
                price: number;
                stock: number;
                categoryId: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            subtotal: number;
            discount: number;
            quantity: number;
            unitPrice: number;
            productId: string;
            orderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        agentId: string | null;
        updatedAt: Date;
        status: string;
        subtotal: number;
        discount: number;
        tax: number;
        total: number;
        notes: string | null;
        branchId: string;
        userId: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        agentId: string | null;
        updatedAt: Date;
        status: string;
        subtotal: number;
        discount: number;
        tax: number;
        total: number;
        notes: string | null;
        branchId: string;
        userId: string | null;
    }>;
    getStats(branchId?: string, startDate?: Date, endDate?: Date): Promise<{
        totalOrders: number;
        totalRevenue: number;
        completedOrders: number;
        pendingOrders: number;
        averageOrderValue: number;
    }>;
    private sendStatusNotification;
}
