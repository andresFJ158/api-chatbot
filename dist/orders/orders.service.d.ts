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
        agent: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            email: string;
            password: string;
            role: string;
            online: boolean;
        };
        branch: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            phone: string | null;
            name: string;
            description: string | null;
            address: string;
            latitude: number;
            longitude: number;
            openingHours: string | null;
            isActive: boolean;
        };
        items: ({
            product: {
                category: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    description: string | null;
                    parentId: string | null;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                description: string;
                price: number;
                stock: number;
                categoryId: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            productId: string;
            quantity: number;
            unitPrice: number;
            discount: number;
            subtotal: number;
            orderId: string;
        })[];
    } & {
        id: string;
        userId: string | null;
        createdAt: Date;
        updatedAt: Date;
        agentId: string | null;
        discount: number;
        branchId: string;
        tax: number;
        notes: string | null;
        status: string;
        subtotal: number;
        total: number;
    }>;
    findAll(filters?: {
        branchId?: string;
        userId?: string;
        status?: string;
        startDate?: Date;
        endDate?: Date;
    }): Promise<({
        user: {
            id: string;
            phone: string;
            name: string;
            lastName: string;
        };
        agent: {
            id: string;
            name: string;
            email: string;
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
                    updatedAt: Date;
                    name: string;
                    description: string | null;
                    parentId: string | null;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                description: string;
                price: number;
                stock: number;
                categoryId: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            productId: string;
            quantity: number;
            unitPrice: number;
            discount: number;
            subtotal: number;
            orderId: string;
        })[];
    } & {
        id: string;
        userId: string | null;
        createdAt: Date;
        updatedAt: Date;
        agentId: string | null;
        discount: number;
        branchId: string;
        tax: number;
        notes: string | null;
        status: string;
        subtotal: number;
        total: number;
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
        agent: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            email: string;
            password: string;
            role: string;
            online: boolean;
        };
        branch: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            phone: string | null;
            name: string;
            description: string | null;
            address: string;
            latitude: number;
            longitude: number;
            openingHours: string | null;
            isActive: boolean;
        };
        items: ({
            product: {
                category: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    description: string | null;
                    parentId: string | null;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                description: string;
                price: number;
                stock: number;
                categoryId: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            productId: string;
            quantity: number;
            unitPrice: number;
            discount: number;
            subtotal: number;
            orderId: string;
        })[];
    } & {
        id: string;
        userId: string | null;
        createdAt: Date;
        updatedAt: Date;
        agentId: string | null;
        discount: number;
        branchId: string;
        tax: number;
        notes: string | null;
        status: string;
        subtotal: number;
        total: number;
    }>;
    update(id: string, updateDto: UpdateOrderDto): Promise<{
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
        agent: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            email: string;
            password: string;
            role: string;
            online: boolean;
        };
        branch: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            phone: string | null;
            name: string;
            description: string | null;
            address: string;
            latitude: number;
            longitude: number;
            openingHours: string | null;
            isActive: boolean;
        };
        items: ({
            product: {
                category: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    description: string | null;
                    parentId: string | null;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                description: string;
                price: number;
                stock: number;
                categoryId: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            productId: string;
            quantity: number;
            unitPrice: number;
            discount: number;
            subtotal: number;
            orderId: string;
        })[];
    } & {
        id: string;
        userId: string | null;
        createdAt: Date;
        updatedAt: Date;
        agentId: string | null;
        discount: number;
        branchId: string;
        tax: number;
        notes: string | null;
        status: string;
        subtotal: number;
        total: number;
    }>;
    cancel(id: string, agentId?: string): Promise<{
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
        agent: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            email: string;
            password: string;
            role: string;
            online: boolean;
        };
        branch: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            phone: string | null;
            name: string;
            description: string | null;
            address: string;
            latitude: number;
            longitude: number;
            openingHours: string | null;
            isActive: boolean;
        };
        items: ({
            product: {
                category: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    description: string | null;
                    parentId: string | null;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                description: string;
                price: number;
                stock: number;
                categoryId: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            productId: string;
            quantity: number;
            unitPrice: number;
            discount: number;
            subtotal: number;
            orderId: string;
        })[];
    } & {
        id: string;
        userId: string | null;
        createdAt: Date;
        updatedAt: Date;
        agentId: string | null;
        discount: number;
        branchId: string;
        tax: number;
        notes: string | null;
        status: string;
        subtotal: number;
        total: number;
    }>;
    remove(id: string): Promise<{
        id: string;
        userId: string | null;
        createdAt: Date;
        updatedAt: Date;
        agentId: string | null;
        discount: number;
        branchId: string;
        tax: number;
        notes: string | null;
        status: string;
        subtotal: number;
        total: number;
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
