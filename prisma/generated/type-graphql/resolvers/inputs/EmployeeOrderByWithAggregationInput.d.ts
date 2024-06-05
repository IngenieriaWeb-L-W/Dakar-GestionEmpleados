import { EmployeeAvgOrderByAggregateInput } from "../inputs/EmployeeAvgOrderByAggregateInput";
import { EmployeeCountOrderByAggregateInput } from "../inputs/EmployeeCountOrderByAggregateInput";
import { EmployeeMaxOrderByAggregateInput } from "../inputs/EmployeeMaxOrderByAggregateInput";
import { EmployeeMinOrderByAggregateInput } from "../inputs/EmployeeMinOrderByAggregateInput";
import { EmployeeSumOrderByAggregateInput } from "../inputs/EmployeeSumOrderByAggregateInput";
export declare class EmployeeOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    firstName?: "asc" | "desc" | undefined;
    lastName?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    hireDate?: "asc" | "desc" | undefined;
    position?: "asc" | "desc" | undefined;
    department?: "asc" | "desc" | undefined;
    salary?: "asc" | "desc" | undefined;
    hoursWorked?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: EmployeeCountOrderByAggregateInput | undefined;
    _avg?: EmployeeAvgOrderByAggregateInput | undefined;
    _max?: EmployeeMaxOrderByAggregateInput | undefined;
    _min?: EmployeeMinOrderByAggregateInput | undefined;
    _sum?: EmployeeSumOrderByAggregateInput | undefined;
}
