import { InventoryMovementOrderByWithRelationInput } from "../../../inputs/InventoryMovementOrderByWithRelationInput";
import { InventoryMovementWhereInput } from "../../../inputs/InventoryMovementWhereInput";
import { InventoryMovementWhereUniqueInput } from "../../../inputs/InventoryMovementWhereUniqueInput";
export declare class AggregateInventoryMovementArgs {
    where?: InventoryMovementWhereInput | undefined;
    orderBy?: InventoryMovementOrderByWithRelationInput[] | undefined;
    cursor?: InventoryMovementWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
