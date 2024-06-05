import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class MaterialScalarWhereWithAggregatesInput {
    AND?: MaterialScalarWhereWithAggregatesInput[] | undefined;
    OR?: MaterialScalarWhereWithAggregatesInput[] | undefined;
    NOT?: MaterialScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    quantity?: IntWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
