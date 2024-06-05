import { EmployeeOrderByWithRelationInput } from "../../../inputs/EmployeeOrderByWithRelationInput";
import { EmployeeWhereInput } from "../../../inputs/EmployeeWhereInput";
import { EmployeeWhereUniqueInput } from "../../../inputs/EmployeeWhereUniqueInput";
export declare class AggregateEmployeeArgs {
    where?: EmployeeWhereInput | undefined;
    orderBy?: EmployeeOrderByWithRelationInput[] | undefined;
    cursor?: EmployeeWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
