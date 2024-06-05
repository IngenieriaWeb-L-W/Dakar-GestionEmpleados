import { EmployeeCreateInput } from "../../../inputs/EmployeeCreateInput";
import { EmployeeUpdateInput } from "../../../inputs/EmployeeUpdateInput";
import { EmployeeWhereUniqueInput } from "../../../inputs/EmployeeWhereUniqueInput";
export declare class UpsertOneEmployeeArgs {
    where: EmployeeWhereUniqueInput;
    create: EmployeeCreateInput;
    update: EmployeeUpdateInput;
}
