import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class MaterialScalarWhereInput {
    AND?: MaterialScalarWhereInput[] | undefined;
    OR?: MaterialScalarWhereInput[] | undefined;
    NOT?: MaterialScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    quantity?: IntFilter | undefined;
    userId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
