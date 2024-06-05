import { Material } from "../outputs/Material";
import { User } from "../outputs/User";
export declare class CreateManyInventoryMovementAndReturnOutputType {
    id: string;
    movementType: "ENTRADA" | "SALIDA";
    quantity: number;
    materialId: string;
    userId: string;
    material: Material;
    createdBy: User;
}
