import { MaterialAvgOrderByAggregateInput } from "../inputs/MaterialAvgOrderByAggregateInput";
import { MaterialCountOrderByAggregateInput } from "../inputs/MaterialCountOrderByAggregateInput";
import { MaterialMaxOrderByAggregateInput } from "../inputs/MaterialMaxOrderByAggregateInput";
import { MaterialMinOrderByAggregateInput } from "../inputs/MaterialMinOrderByAggregateInput";
import { MaterialSumOrderByAggregateInput } from "../inputs/MaterialSumOrderByAggregateInput";
export declare class MaterialOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    quantity?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: MaterialCountOrderByAggregateInput | undefined;
    _avg?: MaterialAvgOrderByAggregateInput | undefined;
    _max?: MaterialMaxOrderByAggregateInput | undefined;
    _min?: MaterialMinOrderByAggregateInput | undefined;
    _sum?: MaterialSumOrderByAggregateInput | undefined;
}
