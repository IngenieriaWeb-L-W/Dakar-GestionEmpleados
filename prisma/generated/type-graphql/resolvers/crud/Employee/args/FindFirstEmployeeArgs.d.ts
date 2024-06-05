import { EmployeeOrderByWithRelationInput } from "../../../inputs/EmployeeOrderByWithRelationInput";
import { EmployeeWhereInput } from "../../../inputs/EmployeeWhereInput";
import { EmployeeWhereUniqueInput } from "../../../inputs/EmployeeWhereUniqueInput";
export declare class FindFirstEmployeeArgs {
    where?: EmployeeWhereInput | undefined;
    orderBy?: EmployeeOrderByWithRelationInput[] | undefined;
    cursor?: EmployeeWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "firstName" | "lastName" | "email" | "hireDate" | "position" | "department" | "salary" | "hoursWorked" | "createdAt" | "updatedAt"> | undefined;
}
