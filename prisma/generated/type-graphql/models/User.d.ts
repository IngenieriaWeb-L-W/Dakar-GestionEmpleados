import { Account } from "../models/Account";
import { InventoryMovement } from "../models/InventoryMovement";
import { Material } from "../models/Material";
import { Role } from "../models/Role";
import { Session } from "../models/Session";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: string;
    name?: string | null;
    email?: string | null;
    emailVerified?: Date | null;
    image?: string | null;
    role?: Role | null;
    roleId?: string | null;
    accounts?: Account[];
    sessions?: Session[];
    materials?: Material[];
    movements?: InventoryMovement[];
    _count?: UserCount | null;
}
