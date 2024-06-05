import { EvaluationAvgOrderByAggregateInput } from "../inputs/EvaluationAvgOrderByAggregateInput";
import { EvaluationCountOrderByAggregateInput } from "../inputs/EvaluationCountOrderByAggregateInput";
import { EvaluationMaxOrderByAggregateInput } from "../inputs/EvaluationMaxOrderByAggregateInput";
import { EvaluationMinOrderByAggregateInput } from "../inputs/EvaluationMinOrderByAggregateInput";
import { EvaluationSumOrderByAggregateInput } from "../inputs/EvaluationSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class EvaluationOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    employeeId?: "asc" | "desc" | undefined;
    performance?: "asc" | "desc" | undefined;
    comments?: SortOrderInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: EvaluationCountOrderByAggregateInput | undefined;
    _avg?: EvaluationAvgOrderByAggregateInput | undefined;
    _max?: EvaluationMaxOrderByAggregateInput | undefined;
    _min?: EvaluationMinOrderByAggregateInput | undefined;
    _sum?: EvaluationSumOrderByAggregateInput | undefined;
}
