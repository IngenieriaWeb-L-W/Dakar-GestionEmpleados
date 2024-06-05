import { EvaluationCreateManyEmployeeInputEnvelope } from "../inputs/EvaluationCreateManyEmployeeInputEnvelope";
import { EvaluationCreateOrConnectWithoutEmployeeInput } from "../inputs/EvaluationCreateOrConnectWithoutEmployeeInput";
import { EvaluationCreateWithoutEmployeeInput } from "../inputs/EvaluationCreateWithoutEmployeeInput";
import { EvaluationScalarWhereInput } from "../inputs/EvaluationScalarWhereInput";
import { EvaluationUpdateManyWithWhereWithoutEmployeeInput } from "../inputs/EvaluationUpdateManyWithWhereWithoutEmployeeInput";
import { EvaluationUpdateWithWhereUniqueWithoutEmployeeInput } from "../inputs/EvaluationUpdateWithWhereUniqueWithoutEmployeeInput";
import { EvaluationUpsertWithWhereUniqueWithoutEmployeeInput } from "../inputs/EvaluationUpsertWithWhereUniqueWithoutEmployeeInput";
import { EvaluationWhereUniqueInput } from "../inputs/EvaluationWhereUniqueInput";
export declare class EvaluationUpdateManyWithoutEmployeeNestedInput {
    create?: EvaluationCreateWithoutEmployeeInput[] | undefined;
    connectOrCreate?: EvaluationCreateOrConnectWithoutEmployeeInput[] | undefined;
    upsert?: EvaluationUpsertWithWhereUniqueWithoutEmployeeInput[] | undefined;
    createMany?: EvaluationCreateManyEmployeeInputEnvelope | undefined;
    set?: EvaluationWhereUniqueInput[] | undefined;
    disconnect?: EvaluationWhereUniqueInput[] | undefined;
    delete?: EvaluationWhereUniqueInput[] | undefined;
    connect?: EvaluationWhereUniqueInput[] | undefined;
    update?: EvaluationUpdateWithWhereUniqueWithoutEmployeeInput[] | undefined;
    updateMany?: EvaluationUpdateManyWithWhereWithoutEmployeeInput[] | undefined;
    deleteMany?: EvaluationScalarWhereInput[] | undefined;
}
