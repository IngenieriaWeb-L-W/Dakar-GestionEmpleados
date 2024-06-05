import { Material } from "../models/Material";
import { User } from "../models/User";
export declare class InventoryMovement {
    id: string;
    movementType: "ENTRADA" | "SALIDA";
    quantity: number;
    material?: Material;
    materialId: string;
    createdBy?: User;
    userId: string;
}
