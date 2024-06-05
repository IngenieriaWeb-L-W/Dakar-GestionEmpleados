import { EvaluationCreateInput } from "../../../inputs/EvaluationCreateInput";
import { EvaluationUpdateInput } from "../../../inputs/EvaluationUpdateInput";
import { EvaluationWhereUniqueInput } from "../../../inputs/EvaluationWhereUniqueInput";
export declare class UpsertOneEvaluationArgs {
    where: EvaluationWhereUniqueInput;
    create: EvaluationCreateInput;
    update: EvaluationUpdateInput;
}
