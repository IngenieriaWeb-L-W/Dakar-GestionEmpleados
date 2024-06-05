import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EvaluationListRelationFilter } from "../inputs/EvaluationListRelationFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class EmployeeWhereInput {
    AND?: EmployeeWhereInput[] | undefined;
    OR?: EmployeeWhereInput[] | undefined;
    NOT?: EmployeeWhereInput[] | undefined;
    id?: StringFilter | undefined;
    firstName?: StringFilter | undefined;
    lastName?: StringFilter | undefined;
    email?: StringFilter | undefined;
    hireDate?: DateTimeFilter | undefined;
    position?: StringFilter | undefined;
    department?: StringFilter | undefined;
    salary?: FloatFilter | undefined;
    hoursWorked?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    evaluations?: EvaluationListRelationFilter | undefined;
}
