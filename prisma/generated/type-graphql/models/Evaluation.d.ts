import { Employee } from "../models/Employee";
export declare class Evaluation {
    id: string;
    employee?: Employee;
    employeeId: string;
    performance: number;
    comments?: string | null;
    createdAt: Date;
    updatedAt: Date;
}
