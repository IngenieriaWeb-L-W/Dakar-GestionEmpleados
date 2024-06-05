import { CreateManyUserAndReturnOutputTypeRoleArgs } from "./args/CreateManyUserAndReturnOutputTypeRoleArgs";
import { Role } from "../outputs/Role";
export declare class CreateManyUserAndReturnOutputType {
    id: string;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    image: string | null;
    roleId: string | null;
    role: Role | null;
    getRole(root: CreateManyUserAndReturnOutputType, args: CreateManyUserAndReturnOutputTypeRoleArgs): Role | null;
}
