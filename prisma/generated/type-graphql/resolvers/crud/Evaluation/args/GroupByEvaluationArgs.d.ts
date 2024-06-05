import { EvaluationOrderByWithAggregationInput } from "../../../inputs/EvaluationOrderByWithAggregationInput";
import { EvaluationScalarWhereWithAggregatesInput } from "../../../inputs/EvaluationScalarWhereWithAggregatesInput";
import { EvaluationWhereInput } from "../../../inputs/EvaluationWhereInput";
export declare class GroupByEvaluationArgs {
    where?: EvaluationWhereInput | undefined;
    orderBy?: EvaluationOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "employeeId" | "performance" | "comments" | "createdAt" | "updatedAt">;
    having?: EvaluationScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
