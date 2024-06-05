import { EmployeeAvgAggregate } from "../outputs/EmployeeAvgAggregate";
import { EmployeeCountAggregate } from "../outputs/EmployeeCountAggregate";
import { EmployeeMaxAggregate } from "../outputs/EmployeeMaxAggregate";
import { EmployeeMinAggregate } from "../outputs/EmployeeMinAggregate";
import { EmployeeSumAggregate } from "../outputs/EmployeeSumAggregate";
export declare class EmployeeGroupBy {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    hireDate: Date;
    position: string;
    department: string;
    salary: number;
    hoursWorked: number;
    createdAt: Date;
    updatedAt: Date;
    _count: EmployeeCountAggregate | null;
    _avg: EmployeeAvgAggregate | null;
    _sum: EmployeeSumAggregate | null;
    _min: EmployeeMinAggregate | null;
    _max: EmployeeMaxAggregate | null;
}
