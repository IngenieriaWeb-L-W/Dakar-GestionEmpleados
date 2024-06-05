import { RoleCountUsersArgs } from "./args/RoleCountUsersArgs";
export declare class RoleCount {
    users: number;
    getUsers(root: RoleCount, args: RoleCountUsersArgs): number;
}
