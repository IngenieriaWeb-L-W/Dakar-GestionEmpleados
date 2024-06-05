import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyInventoryMovementArgs } from "./args/UpdateManyInventoryMovementArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyInventoryMovementResolver {
    updateManyInventoryMovement(ctx: any, info: GraphQLResolveInfo, args: UpdateManyInventoryMovementArgs): Promise<AffectedRowsOutput>;
}
