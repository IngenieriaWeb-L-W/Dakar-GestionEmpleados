import { EvaluationOrderByWithRelationInput } from "../../../inputs/EvaluationOrderByWithRelationInput";
import { EvaluationWhereInput } from "../../../inputs/EvaluationWhereInput";
import { EvaluationWhereUniqueInput } from "../../../inputs/EvaluationWhereUniqueInput";
export declare class FindManyEvaluationArgs {
    where?: EvaluationWhereInput | undefined;
    orderBy?: EvaluationOrderByWithRelationInput[] | undefined;
    cursor?: EvaluationWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "employeeId" | "performance" | "comments" | "createdAt" | "updatedAt"> | undefined;
}
