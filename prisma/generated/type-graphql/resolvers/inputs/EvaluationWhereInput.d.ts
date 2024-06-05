import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EmployeeRelationFilter } from "../inputs/EmployeeRelationFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class EvaluationWhereInput {
    AND?: EvaluationWhereInput[] | undefined;
    OR?: EvaluationWhereInput[] | undefined;
    NOT?: EvaluationWhereInput[] | undefined;
    id?: StringFilter | undefined;
    employeeId?: StringFilter | undefined;
    performance?: FloatFilter | undefined;
    comments?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    employee?: EmployeeRelationFilter | undefined;
}
