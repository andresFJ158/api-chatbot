import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class OrdersController {
    private readonly ordersService;
    private readonly logger;
    constructor(ordersService: OrdersService);
    create(createOrderDto: CreateOrderDto, req: any): Promise<{
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
            quantity: number;
            productId: string;
            subtotal: number;
            discount: number;
            unitPrice: number;
            orderId: string;
        })[];
    } & {
        id: string;
        userId: string | null;
        createdAt: Date;
        updatedAt: Date;
        agentId: string | null;
        status: string;
        subtotal: number;
        discount: number;
        tax: number;
        total: number;
        notes: string | null;
        branchId: string;
    }>;
    findAll(branchId?: string, userId?: string, status?: string, startDate?: string, endDate?: string): Promise<({
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
            quantity: number;
            productId: string;
            subtotal: number;
            discount: number;
            unitPrice: number;
            orderId: string;
        })[];
    } & {
        id: string;
        userId: string | null;
        createdAt: Date;
        updatedAt: Date;
        agentId: string | null;
        status: string;
        subtotal: number;
        discount: number;
        tax: number;
        total: number;
        notes: string | null;
        branchId: string;
    })[]>;
    getStats(branchId?: string, startDate?: string, endDate?: string): Promise<{
        totalOrders: number;
        totalRevenue: number;
        completedOrders: number;
        pendingOrders: number;
        averageOrderValue: number;
    }>;
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
            quantity: number;
            productId: string;
            subtotal: number;
            discount: number;
            unitPrice: number;
            orderId: string;
        })[];
    } & {
        id: string;
        userId: string | null;
        createdAt: Date;
        updatedAt: Date;
        agentId: string | null;
        status: string;
        subtotal: number;
        discount: number;
        tax: number;
        total: number;
        notes: string | null;
        branchId: string;
    }>;
    update(id: string, updateOrderDto: UpdateOrderDto): Promise<{
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
            quantity: number;
            productId: string;
            subtotal: number;
            discount: number;
            unitPrice: number;
            orderId: string;
        })[];
    } & {
        id: string;
        userId: string | null;
        createdAt: Date;
        updatedAt: Date;
        agentId: string | null;
        status: string;
        subtotal: number;
        discount: number;
        tax: number;
        total: number;
        notes: string | null;
        branchId: string;
    }>;
    cancel(id: string, req: any): Promise<{
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
            quantity: number;
            productId: string;
            subtotal: number;
            discount: number;
            unitPrice: number;
            orderId: string;
        })[];
    } & {
        id: string;
        userId: string | null;
        createdAt: Date;
        updatedAt: Date;
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
        userId: string | null;
        createdAt: Date;
        updatedAt: Date;
        agentId: string | null;
        status: string;
        subtotal: number;
        discount: number;
        tax: number;
        total: number;
        notes: string | null;
        branchId: string;
    }>;
}
