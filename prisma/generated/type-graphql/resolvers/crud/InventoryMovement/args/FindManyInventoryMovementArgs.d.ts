import { InventoryMovementOrderByWithRelationInput } from "../../../inputs/InventoryMovementOrderByWithRelationInput";
import { InventoryMovementWhereInput } from "../../../inputs/InventoryMovementWhereInput";
import { InventoryMovementWhereUniqueInput } from "../../../inputs/InventoryMovementWhereUniqueInput";
export declare class FindManyInventoryMovementArgs {
    where?: InventoryMovementWhereInput | undefined;
    orderBy?: InventoryMovementOrderByWithRelationInput[] | undefined;
    cursor?: InventoryMovementWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "movementType" | "quantity" | "materialId" | "userId"> | undefined;
}
