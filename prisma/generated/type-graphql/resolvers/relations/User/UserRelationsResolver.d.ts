import type { GraphQLResolveInfo } from "graphql";
import { Account } from "../../../models/Account";
import { InventoryMovement } from "../../../models/InventoryMovement";
import { Material } from "../../../models/Material";
import { Role } from "../../../models/Role";
import { Session } from "../../../models/Session";
import { User } from "../../../models/User";
import { UserAccountsArgs } from "./args/UserAccountsArgs";
import { UserMaterialsArgs } from "./args/UserMaterialsArgs";
import { UserMovementsArgs } from "./args/UserMovementsArgs";
import { UserRoleArgs } from "./args/UserRoleArgs";
import { UserSessionsArgs } from "./args/UserSessionsArgs";
export declare class UserRelationsResolver {
    role(user: User, ctx: any, info: GraphQLResolveInfo, args: UserRoleArgs): Promise<Role | null>;
    accounts(user: User, ctx: any, info: GraphQLResolveInfo, args: UserAccountsArgs): Promise<Account[]>;
    sessions(user: User, ctx: any, info: GraphQLResolveInfo, args: UserSessionsArgs): Promise<Session[]>;
    materials(user: User, ctx: any, info: GraphQLResolveInfo, args: UserMaterialsArgs): Promise<Material[]>;
    movements(user: User, ctx: any, info: GraphQLResolveInfo, args: UserMovementsArgs): Promise<InventoryMovement[]>;
}
