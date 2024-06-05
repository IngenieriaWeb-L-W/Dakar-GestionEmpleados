import { EmployeeOrderByWithRelationInput } from "../inputs/EmployeeOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class EvaluationOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    employeeId?: "asc" | "desc" | undefined;
    performance?: "asc" | "desc" | undefined;
    comments?: SortOrderInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    employee?: EmployeeOrderByWithRelationInput | undefined;
}
