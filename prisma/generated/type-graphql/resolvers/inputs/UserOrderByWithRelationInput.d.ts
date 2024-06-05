import { AccountOrderByRelationAggregateInput } from "../inputs/AccountOrderByRelationAggregateInput";
import { InventoryMovementOrderByRelationAggregateInput } from "../inputs/InventoryMovementOrderByRelationAggregateInput";
import { MaterialOrderByRelationAggregateInput } from "../inputs/MaterialOrderByRelationAggregateInput";
import { RoleOrderByWithRelationInput } from "../inputs/RoleOrderByWithRelationInput";
import { SessionOrderByRelationAggregateInput } from "../inputs/SessionOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class UserOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: SortOrderInput | undefined;
    email?: SortOrderInput | undefined;
    emailVerified?: SortOrderInput | undefined;
    image?: SortOrderInput | undefined;
    roleId?: SortOrderInput | undefined;
    role?: RoleOrderByWithRelationInput | undefined;
    accounts?: AccountOrderByRelationAggregateInput | undefined;
    sessions?: SessionOrderByRelationAggregateInput | undefined;
    materials?: MaterialOrderByRelationAggregateInput | undefined;
    movements?: InventoryMovementOrderByRelationAggregateInput | undefined;
}
