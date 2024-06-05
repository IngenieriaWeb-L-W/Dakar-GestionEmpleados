import { NestedEnumEnum_MovementTypeFilter } from "../inputs/NestedEnumEnum_MovementTypeFilter";
import { NestedEnumEnum_MovementTypeWithAggregatesFilter } from "../inputs/NestedEnumEnum_MovementTypeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumEnum_MovementTypeWithAggregatesFilter {
    equals?: "ENTRADA" | "SALIDA" | undefined;
    in?: Array<"ENTRADA" | "SALIDA"> | undefined;
    notIn?: Array<"ENTRADA" | "SALIDA"> | undefined;
    not?: NestedEnumEnum_MovementTypeWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumEnum_MovementTypeFilter | undefined;
    _max?: NestedEnumEnum_MovementTypeFilter | undefined;
}
