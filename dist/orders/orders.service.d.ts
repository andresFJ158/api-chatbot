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
        agent: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            role: string;
            online: boolean;
        };
        branch: {
            id: string;
            name: string;
            description: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            phone: string | null;
            address: string;
            latitude: number;
            longitude: number;
            openingHours: string | null;
        };
        items: ({
            product: {
                category: {
                    id: string;
                    name: string;
                    description: string | null;
                    createdAt: Date;
                    updatedAt: Date;
                    parentId: string | null;
                };
            } & {
                id: string;
                name: string;
                description: string;
                createdAt: Date;
                updatedAt: Date;
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
        updatedAt: Date;
        userId: string | null;
        agentId: string | null;
        status: string;
        subtotal: number;
        discount: number;
        tax: number;
        total: number;
        notes: string | null;
        branchId: string;
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
            name: string;
            phone: string;
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
                    name: string;
                    description: string | null;
                    createdAt: Date;
                    updatedAt: Date;
                    parentId: string | null;
                };
            } & {
                id: string;
                name: string;
                description: string;
                createdAt: Date;
                updatedAt: Date;
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
        updatedAt: Date;
        userId: string | null;
        agentId: string | null;
        status: string;
        subtotal: number;
        discount: number;
        tax: number;
        total: number;
        notes: string | null;
        branchId: string;
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
        agent: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            role: string;
            online: boolean;
        };
        branch: {
            id: string;
            name: string;
            description: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            phone: string | null;
            address: string;
            latitude: number;
            longitude: number;
            openingHours: string | null;
        };
        items: ({
            product: {
                category: {
                    id: string;
                    name: string;
                    description: string | null;
                    createdAt: Date;
                    updatedAt: Date;
                    parentId: string | null;
                };
            } & {
                id: string;
                name: string;
                description: string;
                createdAt: Date;
                updatedAt: Date;
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
        updatedAt: Date;
        userId: string | null;
        agentId: string | null;
        status: string;
        subtotal: number;
        discount: number;
        tax: number;
        total: number;
        notes: string | null;
        branchId: string;
    }>;
    update(id: string, updateDto: UpdateOrderDto): Promise<{
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
        agent: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            role: string;
            online: boolean;
        };
        branch: {
            id: string;
            name: string;
            description: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            phone: string | null;
            address: string;
            latitude: number;
            longitude: number;
            openingHours: string | null;
        };
        items: ({
            product: {
                category: {
                    id: string;
                    name: string;
                    description: string | null;
                    createdAt: Date;
                    updatedAt: Date;
                    parentId: string | null;
                };
            } & {
                id: string;
                name: string;
                description: string;
                createdAt: Date;
                updatedAt: Date;
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
        updatedAt: Date;
        userId: string | null;
        agentId: string | null;
        status: string;
        subtotal: number;
        discount: number;
        tax: number;
        total: number;
        notes: string | null;
        branchId: string;
    }>;
    cancel(id: string, agentId?: string): Promise<{
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
        agent: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            role: string;
            online: boolean;
        };
        branch: {
            id: string;
            name: string;
            description: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            phone: string | null;
            address: string;
            latitude: number;
            longitude: number;
            openingHours: string | null;
        };
        items: ({
            product: {
                category: {
                    id: string;
                    name: string;
                    description: string | null;
                    createdAt: Date;
                    updatedAt: Date;
                    parentId: string | null;
                };
            } & {
                id: string;
                name: string;
                description: string;
                createdAt: Date;
                updatedAt: Date;
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
        updatedAt: Date;
        userId: string | null;
        agentId: string | null;
        status: string;
        subtotal: number;
        discount: number;
        tax: number;
        total: number;
        notes: string | null;
        branchId: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
        agentId: string | null;
        status: string;
        subtotal: number;
        discount: number;
        tax: number;
        total: number;
        notes: string | null;
        branchId: string;
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
