import { UserCountAccountsArgs } from "./args/UserCountAccountsArgs";
import { UserCountMaterialsArgs } from "./args/UserCountMaterialsArgs";
import { UserCountMovementsArgs } from "./args/UserCountMovementsArgs";
import { UserCountSessionsArgs } from "./args/UserCountSessionsArgs";
export declare class UserCount {
    accounts: number;
    sessions: number;
    materials: number;
    movements: number;
    getAccounts(root: UserCount, args: UserCountAccountsArgs): number;
    getSessions(root: UserCount, args: UserCountSessionsArgs): number;
    getMaterials(root: UserCount, args: UserCountMaterialsArgs): number;
    getMovements(root: UserCount, args: UserCountMovementsArgs): number;
}
