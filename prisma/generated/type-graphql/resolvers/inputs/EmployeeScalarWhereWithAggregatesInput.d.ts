import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class EmployeeScalarWhereWithAggregatesInput {
    AND?: EmployeeScalarWhereWithAggregatesInput[] | undefined;
    OR?: EmployeeScalarWhereWithAggregatesInput[] | undefined;
    NOT?: EmployeeScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    firstName?: StringWithAggregatesFilter | undefined;
    lastName?: StringWithAggregatesFilter | undefined;
    email?: StringWithAggregatesFilter | undefined;
    hireDate?: DateTimeWithAggregatesFilter | undefined;
    position?: StringWithAggregatesFilter | undefined;
    department?: StringWithAggregatesFilter | undefined;
    salary?: FloatWithAggregatesFilter | undefined;
    hoursWorked?: IntWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
