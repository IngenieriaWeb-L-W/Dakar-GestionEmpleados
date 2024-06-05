import { EmployeeAvgAggregate } from "../outputs/EmployeeAvgAggregate";
import { EmployeeCountAggregate } from "../outputs/EmployeeCountAggregate";
import { EmployeeMaxAggregate } from "../outputs/EmployeeMaxAggregate";
import { EmployeeMinAggregate } from "../outputs/EmployeeMinAggregate";
import { EmployeeSumAggregate } from "../outputs/EmployeeSumAggregate";
export declare class AggregateEmployee {
    _count: EmployeeCountAggregate | null;
    _avg: EmployeeAvgAggregate | null;
    _sum: EmployeeSumAggregate | null;
    _min: EmployeeMinAggregate | null;
    _max: EmployeeMaxAggregate | null;
}
