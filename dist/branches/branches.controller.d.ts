import { BranchesService } from './branches.service';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { FindNearestBranchDto } from './dto/find-nearest.dto';
export declare class BranchesController {
    private readonly branchesService;
    private readonly logger;
    constructor(branchesService: BranchesService);
    create(createBranchDto: CreateBranchDto): Promise<{
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
    }>;
    findAll(activeOnly?: string): Promise<{
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
    }[]>;
    findNearest(query: FindNearestBranchDto): Promise<any>;
    findNearestFromUrl(body: {
        url: string;
    }): Promise<{
        success: boolean;
        message: string;
        coordinates?: undefined;
        branch?: undefined;
    } | {
        success: boolean;
        coordinates: {
            latitude: number;
            longitude: number;
        };
        branch: any;
        message?: undefined;
    }>;
    findOne(id: string): Promise<{
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
    }>;
    update(id: string, updateBranchDto: UpdateBranchDto): Promise<{
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
    }>;
    remove(id: string): Promise<{
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
    }>;
}
