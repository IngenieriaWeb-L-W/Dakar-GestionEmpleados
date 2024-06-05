import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyInventoryMovementArgs } from "./args/DeleteManyInventoryMovementArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyInventoryMovementResolver {
    deleteManyInventoryMovement(ctx: any, info: GraphQLResolveInfo, args: DeleteManyInventoryMovementArgs): Promise<AffectedRowsOutput>;
}
