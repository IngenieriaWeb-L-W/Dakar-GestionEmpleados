import { InventoryMovement } from "../models/InventoryMovement";
import { User } from "../models/User";
import { MaterialCount } from "../resolvers/outputs/MaterialCount";
export declare class Material {
    id: string;
    name: string;
    quantity: number;
    createdBy?: User;
    userId: string;
    movements?: InventoryMovement[];
    createdAt: Date;
    updatedAt: Date;
    _count?: MaterialCount | null;
}
