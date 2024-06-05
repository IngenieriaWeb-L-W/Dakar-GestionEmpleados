export declare class InventoryMovementCreateManyInput {
    id?: string | undefined;
    movementType: "ENTRADA" | "SALIDA";
    quantity: number;
    materialId: string;
    userId: string;
}
