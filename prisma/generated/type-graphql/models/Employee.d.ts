import { Evaluation } from "../models/Evaluation";
import { EmployeeCount } from "../resolvers/outputs/EmployeeCount";
export declare class Employee {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    hireDate: Date;
    position: string;
    department: string;
    salary: number;
    hoursWorked: number;
    evaluations?: Evaluation[];
    createdAt: Date;
    updatedAt: Date;
    _count?: EmployeeCount | null;
}
