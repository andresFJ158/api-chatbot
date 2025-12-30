import { PrismaService } from '../prisma/prisma.service';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
export declare class BranchesService {
    private prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    create(createDto: CreateBranchDto): Promise<{
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
    findAll(activeOnly?: boolean): Promise<{
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
    update(id: string, updateDto: UpdateBranchDto): Promise<{
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
    findNearest(latitude: number, longitude: number): Promise<any>;
    private calculateDistance;
    private toRad;
    extractCoordinatesFromGoogleMaps(url: string): Promise<{
        latitude: number;
        longitude: number;
    } | null>;
    private resolveShortUrl;
}
