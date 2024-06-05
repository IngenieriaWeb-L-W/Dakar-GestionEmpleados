import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class EvaluationScalarWhereWithAggregatesInput {
    AND?: EvaluationScalarWhereWithAggregatesInput[] | undefined;
    OR?: EvaluationScalarWhereWithAggregatesInput[] | undefined;
    NOT?: EvaluationScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    employeeId?: StringWithAggregatesFilter | undefined;
    performance?: FloatWithAggregatesFilter | undefined;
    comments?: StringNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
