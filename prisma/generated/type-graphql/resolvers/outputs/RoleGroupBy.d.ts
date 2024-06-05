import { RoleCountAggregate } from "../outputs/RoleCountAggregate";
import { RoleMaxAggregate } from "../outputs/RoleMaxAggregate";
import { RoleMinAggregate } from "../outputs/RoleMinAggregate";
export declare class RoleGroupBy {
    id: string;
    name: "ADMIN" | "USER";
    createdAt: Date;
    updatedAt: Date;
    _count: RoleCountAggregate | null;
    _min: RoleMinAggregate | null;
    _max: RoleMaxAggregate | null;
}
