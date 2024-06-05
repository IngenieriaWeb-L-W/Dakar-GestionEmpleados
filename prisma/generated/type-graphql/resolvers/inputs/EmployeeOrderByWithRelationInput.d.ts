import { EvaluationOrderByRelationAggregateInput } from "../inputs/EvaluationOrderByRelationAggregateInput";
export declare class EmployeeOrderByWithRelationInput {
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
    evaluations?: EvaluationOrderByRelationAggregateInput | undefined;
}
