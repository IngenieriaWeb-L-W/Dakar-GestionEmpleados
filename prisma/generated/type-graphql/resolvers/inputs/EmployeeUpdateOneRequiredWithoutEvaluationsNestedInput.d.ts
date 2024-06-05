import { EmployeeCreateOrConnectWithoutEvaluationsInput } from "../inputs/EmployeeCreateOrConnectWithoutEvaluationsInput";
import { EmployeeCreateWithoutEvaluationsInput } from "../inputs/EmployeeCreateWithoutEvaluationsInput";
import { EmployeeUpdateToOneWithWhereWithoutEvaluationsInput } from "../inputs/EmployeeUpdateToOneWithWhereWithoutEvaluationsInput";
import { EmployeeUpsertWithoutEvaluationsInput } from "../inputs/EmployeeUpsertWithoutEvaluationsInput";
import { EmployeeWhereUniqueInput } from "../inputs/EmployeeWhereUniqueInput";
export declare class EmployeeUpdateOneRequiredWithoutEvaluationsNestedInput {
    create?: EmployeeCreateWithoutEvaluationsInput | undefined;
    connectOrCreate?: EmployeeCreateOrConnectWithoutEvaluationsInput | undefined;
    upsert?: EmployeeUpsertWithoutEvaluationsInput | undefined;
    connect?: EmployeeWhereUniqueInput | undefined;
    update?: EmployeeUpdateToOneWithWhereWithoutEvaluationsInput | undefined;
}
