import { EvaluationCreateManyEmployeeInputEnvelope } from "../inputs/EvaluationCreateManyEmployeeInputEnvelope";
import { EvaluationCreateOrConnectWithoutEmployeeInput } from "../inputs/EvaluationCreateOrConnectWithoutEmployeeInput";
import { EvaluationCreateWithoutEmployeeInput } from "../inputs/EvaluationCreateWithoutEmployeeInput";
import { EvaluationWhereUniqueInput } from "../inputs/EvaluationWhereUniqueInput";
export declare class EvaluationCreateNestedManyWithoutEmployeeInput {
    create?: EvaluationCreateWithoutEmployeeInput[] | undefined;
    connectOrCreate?: EvaluationCreateOrConnectWithoutEmployeeInput[] | undefined;
    createMany?: EvaluationCreateManyEmployeeInputEnvelope | undefined;
    connect?: EvaluationWhereUniqueInput[] | undefined;
}
