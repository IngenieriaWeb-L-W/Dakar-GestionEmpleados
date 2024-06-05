import { EmployeeCreateOrConnectWithoutEvaluationsInput } from "../inputs/EmployeeCreateOrConnectWithoutEvaluationsInput";
import { EmployeeCreateWithoutEvaluationsInput } from "../inputs/EmployeeCreateWithoutEvaluationsInput";
import { EmployeeWhereUniqueInput } from "../inputs/EmployeeWhereUniqueInput";
export declare class EmployeeCreateNestedOneWithoutEvaluationsInput {
    create?: EmployeeCreateWithoutEvaluationsInput | undefined;
    connectOrCreate?: EmployeeCreateOrConnectWithoutEvaluationsInput | undefined;
    connect?: EmployeeWhereUniqueInput | undefined;
}
