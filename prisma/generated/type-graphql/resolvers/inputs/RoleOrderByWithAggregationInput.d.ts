import { RoleCountOrderByAggregateInput } from "../inputs/RoleCountOrderByAggregateInput";
import { RoleMaxOrderByAggregateInput } from "../inputs/RoleMaxOrderByAggregateInput";
import { RoleMinOrderByAggregateInput } from "../inputs/RoleMinOrderByAggregateInput";
export declare class RoleOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: RoleCountOrderByAggregateInput | undefined;
    _max?: RoleMaxOrderByAggregateInput | undefined;
    _min?: RoleMinOrderByAggregateInput | undefined;
}
