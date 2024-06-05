import { InventoryMovementCreateInput } from "../../../inputs/InventoryMovementCreateInput";
import { InventoryMovementUpdateInput } from "../../../inputs/InventoryMovementUpdateInput";
import { InventoryMovementWhereUniqueInput } from "../../../inputs/InventoryMovementWhereUniqueInput";
export declare class UpsertOneInventoryMovementArgs {
    where: InventoryMovementWhereUniqueInput;
    create: InventoryMovementCreateInput;
    update: InventoryMovementUpdateInput;
}
