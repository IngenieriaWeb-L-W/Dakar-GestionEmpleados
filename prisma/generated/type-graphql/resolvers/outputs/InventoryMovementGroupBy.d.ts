import { InventoryMovementAvgAggregate } from "../outputs/InventoryMovementAvgAggregate";
import { InventoryMovementCountAggregate } from "../outputs/InventoryMovementCountAggregate";
import { InventoryMovementMaxAggregate } from "../outputs/InventoryMovementMaxAggregate";
import { InventoryMovementMinAggregate } from "../outputs/InventoryMovementMinAggregate";
import { InventoryMovementSumAggregate } from "../outputs/InventoryMovementSumAggregate";
export declare class InventoryMovementGroupBy {
    id: string;
    movementType: "ENTRADA" | "SALIDA";
    quantity: number;
    materialId: string;
    userId: string;
    _count: InventoryMovementCountAggregate | null;
    _avg: InventoryMovementAvgAggregate | null;
    _sum: InventoryMovementSumAggregate | null;
    _min: InventoryMovementMinAggregate | null;
    _max: InventoryMovementMaxAggregate | null;
}
