import { User } from "../models/User";
import { RoleCount } from "../resolvers/outputs/RoleCount";
export declare class Role {
    id: string;
    name: "ADMIN" | "USER";
    createdAt: Date;
    updatedAt: Date;
    users?: User[];
    _count?: RoleCount | null;
}
