import type { GraphQLResolveInfo } from "graphql";
import { CreateManyInventoryMovementArgs } from "./args/CreateManyInventoryMovementArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyInventoryMovementResolver {
    createManyInventoryMovement(ctx: any, info: GraphQLResolveInfo, args: CreateManyInventoryMovementArgs): Promise<AffectedRowsOutput>;
}
