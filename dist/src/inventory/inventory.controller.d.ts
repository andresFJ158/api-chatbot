import { InventoryService } from './inventory.service';
import { CreateInventoryTransactionDto } from './dto/create-inventory-transaction.dto';
import { UpdateInventoryTransactionDto } from './dto/update-inventory-transaction.dto';
export declare class InventoryController {
    private readonly inventoryService;
    private readonly logger;
    constructor(inventoryService: InventoryService);
    createTransaction(createDto: CreateInventoryTransactionDto): Promise<{
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
                        description: string | null;
                        parentId: string | null;
                    };
                } & {
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
        agentId: string | null;
        type: string;
        quantity: number;
        glosa: string | null;
        productId: string;
    }>;
    findAllTransactions(productId?: string, type?: string, agentId?: string): Promise<({
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
                        description: string | null;
                        parentId: string | null;
                    };
                } & {
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
        agentId: string | null;
        type: string;
        quantity: number;
        glosa: string | null;
        productId: string;
    })[]>;
    findOneTransaction(id: string): Promise<{
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
                        description: string | null;
                        parentId: string | null;
                    };
                } & {
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
        agentId: string | null;
        type: string;
        quantity: number;
        glosa: string | null;
        productId: string;
    }>;
    updateTransaction(id: string, updateDto: UpdateInventoryTransactionDto): Promise<{
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
                        description: string | null;
                        parentId: string | null;
                    };
                } & {
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
        agentId: string | null;
        type: string;
        quantity: number;
        glosa: string | null;
        productId: string;
    }>;
    removeTransaction(id: string): Promise<{
        id: string;
        createdAt: Date;
        agentId: string | null;
        type: string;
        quantity: number;
        glosa: string | null;
        productId: string;
    }>;
    getInventorySummary(): Promise<{
        totalProducts: number;
        lowStockProducts: number;
        outOfStockProducts: number;
        totalStockValue: number;
        products: ({
            _count: {
                transactions: number;
            };
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
                        description: string | null;
                        parentId: string | null;
                    };
                } & {
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
        })[];
    }>;
}
