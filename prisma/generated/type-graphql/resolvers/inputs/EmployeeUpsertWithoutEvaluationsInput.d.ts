import { EmployeeCreateWithoutEvaluationsInput } from "../inputs/EmployeeCreateWithoutEvaluationsInput";
import { EmployeeUpdateWithoutEvaluationsInput } from "../inputs/EmployeeUpdateWithoutEvaluationsInput";
import { EmployeeWhereInput } from "../inputs/EmployeeWhereInput";
export declare class EmployeeUpsertWithoutEvaluationsInput {
    update: EmployeeUpdateWithoutEvaluationsInput;
    create: EmployeeCreateWithoutEvaluationsInput;
    where?: EmployeeWhereInput | undefined;
}
