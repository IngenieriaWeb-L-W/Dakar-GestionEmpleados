import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EmployeeRelationFilter } from "../inputs/EmployeeRelationFilter";
import { EvaluationWhereInput } from "../inputs/EvaluationWhereInput";
import { FloatFilter } from "../inputs/FloatFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class EvaluationWhereUniqueInput {
    id?: string | undefined;
    AND?: EvaluationWhereInput[] | undefined;
    OR?: EvaluationWhereInput[] | undefined;
    NOT?: EvaluationWhereInput[] | undefined;
    employeeId?: StringFilter | undefined;
    performance?: FloatFilter | undefined;
    comments?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    employee?: EmployeeRelationFilter | undefined;
}
