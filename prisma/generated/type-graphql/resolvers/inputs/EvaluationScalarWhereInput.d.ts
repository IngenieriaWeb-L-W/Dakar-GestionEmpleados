import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class EvaluationScalarWhereInput {
    AND?: EvaluationScalarWhereInput[] | undefined;
    OR?: EvaluationScalarWhereInput[] | undefined;
    NOT?: EvaluationScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    employeeId?: StringFilter | undefined;
    performance?: FloatFilter | undefined;
    comments?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
