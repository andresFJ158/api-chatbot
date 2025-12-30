import { PrismaService } from '../prisma/prisma.service';
import { CreateInventoryTransactionDto } from './dto/create-inventory-transaction.dto';
import { UpdateInventoryTransactionDto } from './dto/update-inventory-transaction.dto';
export declare class InventoryService {
    private prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    createTransaction(createDto: CreateInventoryTransactionDto): Promise<{
        product: {
            category: {
                parent: {
                    parent: {
                        parent: {
                            parent: {
                                id: string;
                                name: string;
                            };
                        } & {
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
                        description: string | null;
                        createdAt: Date;
                        updatedAt: Date;
                        parentId: string | null;
                    };
                } & {
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
    } & {
        id: string;
        type: string;
        createdAt: Date;
        agentId: string | null;
        quantity: number;
        productId: string;
        glosa: string | null;
    }>;
    findAllTransactions(productId?: string, type?: string, agentId?: string): Promise<({
        product: {
            category: {
                parent: {
                    parent: {
                        parent: {
                            parent: {
                                id: string;
                                name: string;
                            };
                        } & {
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
                        description: string | null;
                        createdAt: Date;
                        updatedAt: Date;
                        parentId: string | null;
                    };
                } & {
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
    } & {
        id: string;
        type: string;
        createdAt: Date;
        agentId: string | null;
        quantity: number;
        productId: string;
        glosa: string | null;
    })[]>;
    findOneTransaction(id: string): Promise<{
        product: {
            category: {
                parent: {
                    parent: {
                        parent: {
                            parent: {
                                id: string;
                                name: string;
                            };
                        } & {
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
                        description: string | null;
                        createdAt: Date;
                        updatedAt: Date;
                        parentId: string | null;
                    };
                } & {
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
    } & {
        id: string;
        type: string;
        createdAt: Date;
        agentId: string | null;
        quantity: number;
        productId: string;
        glosa: string | null;
    }>;
    updateTransaction(id: string, updateDto: UpdateInventoryTransactionDto): Promise<{
        product: {
            category: {
                parent: {
                    parent: {
                        parent: {
                            parent: {
                                id: string;
                                name: string;
                            };
                        } & {
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
                        description: string | null;
                        createdAt: Date;
                        updatedAt: Date;
                        parentId: string | null;
                    };
                } & {
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
    } & {
        id: string;
        type: string;
        createdAt: Date;
        agentId: string | null;
        quantity: number;
        productId: string;
        glosa: string | null;
    }>;
    removeTransaction(id: string): Promise<{
        id: string;
        type: string;
        createdAt: Date;
        agentId: string | null;
        quantity: number;
        productId: string;
        glosa: string | null;
    }>;
    getInventorySummary(): Promise<{
        totalProducts: number;
        lowStockProducts: number;
        outOfStockProducts: number;
        totalStockValue: number;
        products: ({
            category: {
                parent: {
                    parent: {
                        parent: {
                            parent: {
                                id: string;
                                name: string;
                            };
                        } & {
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
                        description: string | null;
                        createdAt: Date;
                        updatedAt: Date;
                        parentId: string | null;
                    };
                } & {
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
                description: string | null;
                createdAt: Date;
                updatedAt: Date;
                parentId: string | null;
            };
            _count: {
                transactions: number;
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
        })[];
    }>;
}
