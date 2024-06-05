import { EmployeeOrderByWithAggregationInput } from "../../../inputs/EmployeeOrderByWithAggregationInput";
import { EmployeeScalarWhereWithAggregatesInput } from "../../../inputs/EmployeeScalarWhereWithAggregatesInput";
import { EmployeeWhereInput } from "../../../inputs/EmployeeWhereInput";
export declare class GroupByEmployeeArgs {
    where?: EmployeeWhereInput | undefined;
    orderBy?: EmployeeOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "firstName" | "lastName" | "email" | "hireDate" | "position" | "department" | "salary" | "hoursWorked" | "createdAt" | "updatedAt">;
    having?: EmployeeScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
