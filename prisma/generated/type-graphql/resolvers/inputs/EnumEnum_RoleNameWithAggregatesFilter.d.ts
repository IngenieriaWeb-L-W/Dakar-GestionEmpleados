import { NestedEnumEnum_RoleNameFilter } from "../inputs/NestedEnumEnum_RoleNameFilter";
import { NestedEnumEnum_RoleNameWithAggregatesFilter } from "../inputs/NestedEnumEnum_RoleNameWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumEnum_RoleNameWithAggregatesFilter {
    equals?: "ADMIN" | "USER" | undefined;
    in?: Array<"ADMIN" | "USER"> | undefined;
    notIn?: Array<"ADMIN" | "USER"> | undefined;
    not?: NestedEnumEnum_RoleNameWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumEnum_RoleNameFilter | undefined;
    _max?: NestedEnumEnum_RoleNameFilter | undefined;
}
