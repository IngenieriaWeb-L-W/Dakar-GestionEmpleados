import { EmployeeCreateNestedOneWithoutEvaluationsInput } from "../inputs/EmployeeCreateNestedOneWithoutEvaluationsInput";
export declare class EvaluationCreateInput {
    id?: string | undefined;
    performance: number;
    comments?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    employee: EmployeeCreateNestedOneWithoutEvaluationsInput;
}
