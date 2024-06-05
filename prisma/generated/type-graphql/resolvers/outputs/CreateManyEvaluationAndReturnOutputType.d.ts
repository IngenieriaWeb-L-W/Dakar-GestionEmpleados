import { Employee } from "../outputs/Employee";
export declare class CreateManyEvaluationAndReturnOutputType {
    id: string;
    employeeId: string;
    performance: number;
    comments: string | null;
    createdAt: Date;
    updatedAt: Date;
    employee: Employee;
}
