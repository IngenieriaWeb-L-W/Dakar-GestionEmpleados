import { EvaluationCreateNestedManyWithoutEmployeeInput } from "../inputs/EvaluationCreateNestedManyWithoutEmployeeInput";
export declare class EmployeeCreateInput {
    id?: string | undefined;
    firstName: string;
    lastName: string;
    email: string;
    hireDate: Date;
    position: string;
    department: string;
    salary: number;
    hoursWorked: number;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    evaluations?: EvaluationCreateNestedManyWithoutEmployeeInput | undefined;
}
