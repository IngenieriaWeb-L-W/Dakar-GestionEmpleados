import type { GraphQLResolveInfo } from "graphql";
import { AggregateEmployeeArgs } from "./args/AggregateEmployeeArgs";
import { CreateManyEmployeeArgs } from "./args/CreateManyEmployeeArgs";
import { CreateOneEmployeeArgs } from "./args/CreateOneEmployeeArgs";
import { DeleteManyEmployeeArgs } from "./args/DeleteManyEmployeeArgs";
import { DeleteOneEmployeeArgs } from "./args/DeleteOneEmployeeArgs";
import { FindFirstEmployeeArgs } from "./args/FindFirstEmployeeArgs";
import { FindFirstEmployeeOrThrowArgs } from "./args/FindFirstEmployeeOrThrowArgs";
import { FindManyEmployeeArgs } from "./args/FindManyEmployeeArgs";
import { FindUniqueEmployeeArgs } from "./args/FindUniqueEmployeeArgs";
import { FindUniqueEmployeeOrThrowArgs } from "./args/FindUniqueEmployeeOrThrowArgs";
import { GroupByEmployeeArgs } from "./args/GroupByEmployeeArgs";
import { UpdateManyEmployeeArgs } from "./args/UpdateManyEmployeeArgs";
import { UpdateOneEmployeeArgs } from "./args/UpdateOneEmployeeArgs";
import { UpsertOneEmployeeArgs } from "./args/UpsertOneEmployeeArgs";
import { Employee } from "../../../models/Employee";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateEmployee } from "../../outputs/AggregateEmployee";
import { EmployeeGroupBy } from "../../outputs/EmployeeGroupBy";
export declare class EmployeeCrudResolver {
    aggregateEmployee(ctx: any, info: GraphQLResolveInfo, args: AggregateEmployeeArgs): Promise<AggregateEmployee>;
    createManyEmployee(ctx: any, info: GraphQLResolveInfo, args: CreateManyEmployeeArgs): Promise<AffectedRowsOutput>;
    createOneEmployee(ctx: any, info: GraphQLResolveInfo, args: CreateOneEmployeeArgs): Promise<Employee>;
    deleteManyEmployee(ctx: any, info: GraphQLResolveInfo, args: DeleteManyEmployeeArgs): Promise<AffectedRowsOutput>;
    deleteOneEmployee(ctx: any, info: GraphQLResolveInfo, args: DeleteOneEmployeeArgs): Promise<Employee | null>;
    findFirstEmployee(ctx: any, info: GraphQLResolveInfo, args: FindFirstEmployeeArgs): Promise<Employee | null>;
    findFirstEmployeeOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstEmployeeOrThrowArgs): Promise<Employee | null>;
    employees(ctx: any, info: GraphQLResolveInfo, args: FindManyEmployeeArgs): Promise<Employee[]>;
    employee(ctx: any, info: GraphQLResolveInfo, args: FindUniqueEmployeeArgs): Promise<Employee | null>;
    getEmployee(ctx: any, info: GraphQLResolveInfo, args: FindUniqueEmployeeOrThrowArgs): Promise<Employee | null>;
    groupByEmployee(ctx: any, info: GraphQLResolveInfo, args: GroupByEmployeeArgs): Promise<EmployeeGroupBy[]>;
    updateManyEmployee(ctx: any, info: GraphQLResolveInfo, args: UpdateManyEmployeeArgs): Promise<AffectedRowsOutput>;
    updateOneEmployee(ctx: any, info: GraphQLResolveInfo, args: UpdateOneEmployeeArgs): Promise<Employee | null>;
    upsertOneEmployee(ctx: any, info: GraphQLResolveInfo, args: UpsertOneEmployeeArgs): Promise<Employee>;
}
