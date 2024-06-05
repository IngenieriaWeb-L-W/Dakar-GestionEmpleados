import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumEnum_RoleNameWithAggregatesFilter } from "../inputs/EnumEnum_RoleNameWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class RoleScalarWhereWithAggregatesInput {
    AND?: RoleScalarWhereWithAggregatesInput[] | undefined;
    OR?: RoleScalarWhereWithAggregatesInput[] | undefined;
    NOT?: RoleScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: EnumEnum_RoleNameWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
