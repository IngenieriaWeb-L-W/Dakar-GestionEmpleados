"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = tslib_1.__importStar(require("tslib"));
const crudResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = tslib_1.__importStar(require("./resolvers/crud/args.index"));
const actionResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = tslib_1.__importStar(require("./resolvers/relations/resolvers.index"));
const models = tslib_1.__importStar(require("./models"));
const outputTypes = tslib_1.__importStar(require("./resolvers/outputs"));
const inputTypes = tslib_1.__importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    Account: crudResolvers.AccountCrudResolver,
    Session: crudResolvers.SessionCrudResolver,
    User: crudResolvers.UserCrudResolver,
    Material: crudResolvers.MaterialCrudResolver,
    InventoryMovement: crudResolvers.InventoryMovementCrudResolver,
    Role: crudResolvers.RoleCrudResolver,
    Employee: crudResolvers.EmployeeCrudResolver,
    Evaluation: crudResolvers.EvaluationCrudResolver,
    VerificationToken: crudResolvers.VerificationTokenCrudResolver
};
const actionResolversMap = {
    Account: {
        aggregateAccount: actionResolvers.AggregateAccountResolver,
        createManyAccount: actionResolvers.CreateManyAccountResolver,
        createOneAccount: actionResolvers.CreateOneAccountResolver,
        deleteManyAccount: actionResolvers.DeleteManyAccountResolver,
        deleteOneAccount: actionResolvers.DeleteOneAccountResolver,
        findFirstAccount: actionResolvers.FindFirstAccountResolver,
        findFirstAccountOrThrow: actionResolvers.FindFirstAccountOrThrowResolver,
        accounts: actionResolvers.FindManyAccountResolver,
        account: actionResolvers.FindUniqueAccountResolver,
        getAccount: actionResolvers.FindUniqueAccountOrThrowResolver,
        groupByAccount: actionResolvers.GroupByAccountResolver,
        updateManyAccount: actionResolvers.UpdateManyAccountResolver,
        updateOneAccount: actionResolvers.UpdateOneAccountResolver,
        upsertOneAccount: actionResolvers.UpsertOneAccountResolver
    },
    Session: {
        aggregateSession: actionResolvers.AggregateSessionResolver,
        createManySession: actionResolvers.CreateManySessionResolver,
        createOneSession: actionResolvers.CreateOneSessionResolver,
        deleteManySession: actionResolvers.DeleteManySessionResolver,
        deleteOneSession: actionResolvers.DeleteOneSessionResolver,
        findFirstSession: actionResolvers.FindFirstSessionResolver,
        findFirstSessionOrThrow: actionResolvers.FindFirstSessionOrThrowResolver,
        sessions: actionResolvers.FindManySessionResolver,
        session: actionResolvers.FindUniqueSessionResolver,
        getSession: actionResolvers.FindUniqueSessionOrThrowResolver,
        groupBySession: actionResolvers.GroupBySessionResolver,
        updateManySession: actionResolvers.UpdateManySessionResolver,
        updateOneSession: actionResolvers.UpdateOneSessionResolver,
        upsertOneSession: actionResolvers.UpsertOneSessionResolver
    },
    User: {
        aggregateUser: actionResolvers.AggregateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        createOneUser: actionResolvers.CreateOneUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        deleteOneUser: actionResolvers.DeleteOneUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
        users: actionResolvers.FindManyUserResolver,
        user: actionResolvers.FindUniqueUserResolver,
        getUser: actionResolvers.FindUniqueUserOrThrowResolver,
        groupByUser: actionResolvers.GroupByUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        updateOneUser: actionResolvers.UpdateOneUserResolver,
        upsertOneUser: actionResolvers.UpsertOneUserResolver
    },
    Material: {
        aggregateMaterial: actionResolvers.AggregateMaterialResolver,
        createManyMaterial: actionResolvers.CreateManyMaterialResolver,
        createOneMaterial: actionResolvers.CreateOneMaterialResolver,
        deleteManyMaterial: actionResolvers.DeleteManyMaterialResolver,
        deleteOneMaterial: actionResolvers.DeleteOneMaterialResolver,
        findFirstMaterial: actionResolvers.FindFirstMaterialResolver,
        findFirstMaterialOrThrow: actionResolvers.FindFirstMaterialOrThrowResolver,
        materials: actionResolvers.FindManyMaterialResolver,
        material: actionResolvers.FindUniqueMaterialResolver,
        getMaterial: actionResolvers.FindUniqueMaterialOrThrowResolver,
        groupByMaterial: actionResolvers.GroupByMaterialResolver,
        updateManyMaterial: actionResolvers.UpdateManyMaterialResolver,
        updateOneMaterial: actionResolvers.UpdateOneMaterialResolver,
        upsertOneMaterial: actionResolvers.UpsertOneMaterialResolver
    },
    InventoryMovement: {
        aggregateInventoryMovement: actionResolvers.AggregateInventoryMovementResolver,
        createManyInventoryMovement: actionResolvers.CreateManyInventoryMovementResolver,
        createOneInventoryMovement: actionResolvers.CreateOneInventoryMovementResolver,
        deleteManyInventoryMovement: actionResolvers.DeleteManyInventoryMovementResolver,
        deleteOneInventoryMovement: actionResolvers.DeleteOneInventoryMovementResolver,
        findFirstInventoryMovement: actionResolvers.FindFirstInventoryMovementResolver,
        findFirstInventoryMovementOrThrow: actionResolvers.FindFirstInventoryMovementOrThrowResolver,
        inventoryMovements: actionResolvers.FindManyInventoryMovementResolver,
        inventoryMovement: actionResolvers.FindUniqueInventoryMovementResolver,
        getInventoryMovement: actionResolvers.FindUniqueInventoryMovementOrThrowResolver,
        groupByInventoryMovement: actionResolvers.GroupByInventoryMovementResolver,
        updateManyInventoryMovement: actionResolvers.UpdateManyInventoryMovementResolver,
        updateOneInventoryMovement: actionResolvers.UpdateOneInventoryMovementResolver,
        upsertOneInventoryMovement: actionResolvers.UpsertOneInventoryMovementResolver
    },
    Role: {
        aggregateRole: actionResolvers.AggregateRoleResolver,
        createManyRole: actionResolvers.CreateManyRoleResolver,
        createOneRole: actionResolvers.CreateOneRoleResolver,
        deleteManyRole: actionResolvers.DeleteManyRoleResolver,
        deleteOneRole: actionResolvers.DeleteOneRoleResolver,
        findFirstRole: actionResolvers.FindFirstRoleResolver,
        findFirstRoleOrThrow: actionResolvers.FindFirstRoleOrThrowResolver,
        roles: actionResolvers.FindManyRoleResolver,
        role: actionResolvers.FindUniqueRoleResolver,
        getRole: actionResolvers.FindUniqueRoleOrThrowResolver,
        groupByRole: actionResolvers.GroupByRoleResolver,
        updateManyRole: actionResolvers.UpdateManyRoleResolver,
        updateOneRole: actionResolvers.UpdateOneRoleResolver,
        upsertOneRole: actionResolvers.UpsertOneRoleResolver
    },
    Employee: {
        aggregateEmployee: actionResolvers.AggregateEmployeeResolver,
        createManyEmployee: actionResolvers.CreateManyEmployeeResolver,
        createOneEmployee: actionResolvers.CreateOneEmployeeResolver,
        deleteManyEmployee: actionResolvers.DeleteManyEmployeeResolver,
        deleteOneEmployee: actionResolvers.DeleteOneEmployeeResolver,
        findFirstEmployee: actionResolvers.FindFirstEmployeeResolver,
        findFirstEmployeeOrThrow: actionResolvers.FindFirstEmployeeOrThrowResolver,
        employees: actionResolvers.FindManyEmployeeResolver,
        employee: actionResolvers.FindUniqueEmployeeResolver,
        getEmployee: actionResolvers.FindUniqueEmployeeOrThrowResolver,
        groupByEmployee: actionResolvers.GroupByEmployeeResolver,
        updateManyEmployee: actionResolvers.UpdateManyEmployeeResolver,
        updateOneEmployee: actionResolvers.UpdateOneEmployeeResolver,
        upsertOneEmployee: actionResolvers.UpsertOneEmployeeResolver
    },
    Evaluation: {
        aggregateEvaluation: actionResolvers.AggregateEvaluationResolver,
        createManyEvaluation: actionResolvers.CreateManyEvaluationResolver,
        createOneEvaluation: actionResolvers.CreateOneEvaluationResolver,
        deleteManyEvaluation: actionResolvers.DeleteManyEvaluationResolver,
        deleteOneEvaluation: actionResolvers.DeleteOneEvaluationResolver,
        findFirstEvaluation: actionResolvers.FindFirstEvaluationResolver,
        findFirstEvaluationOrThrow: actionResolvers.FindFirstEvaluationOrThrowResolver,
        evaluations: actionResolvers.FindManyEvaluationResolver,
        evaluation: actionResolvers.FindUniqueEvaluationResolver,
        getEvaluation: actionResolvers.FindUniqueEvaluationOrThrowResolver,
        groupByEvaluation: actionResolvers.GroupByEvaluationResolver,
        updateManyEvaluation: actionResolvers.UpdateManyEvaluationResolver,
        updateOneEvaluation: actionResolvers.UpdateOneEvaluationResolver,
        upsertOneEvaluation: actionResolvers.UpsertOneEvaluationResolver
    },
    VerificationToken: {
        aggregateVerificationToken: actionResolvers.AggregateVerificationTokenResolver,
        createManyVerificationToken: actionResolvers.CreateManyVerificationTokenResolver,
        createOneVerificationToken: actionResolvers.CreateOneVerificationTokenResolver,
        deleteManyVerificationToken: actionResolvers.DeleteManyVerificationTokenResolver,
        deleteOneVerificationToken: actionResolvers.DeleteOneVerificationTokenResolver,
        findFirstVerificationToken: actionResolvers.FindFirstVerificationTokenResolver,
        findFirstVerificationTokenOrThrow: actionResolvers.FindFirstVerificationTokenOrThrowResolver,
        verificationTokens: actionResolvers.FindManyVerificationTokenResolver,
        verificationToken: actionResolvers.FindUniqueVerificationTokenResolver,
        getVerificationToken: actionResolvers.FindUniqueVerificationTokenOrThrowResolver,
        groupByVerificationToken: actionResolvers.GroupByVerificationTokenResolver,
        updateManyVerificationToken: actionResolvers.UpdateManyVerificationTokenResolver,
        updateOneVerificationToken: actionResolvers.UpdateOneVerificationTokenResolver,
        upsertOneVerificationToken: actionResolvers.UpsertOneVerificationTokenResolver
    }
};
const crudResolversInfo = {
    Account: ["aggregateAccount", "createManyAccount", "createOneAccount", "deleteManyAccount", "deleteOneAccount", "findFirstAccount", "findFirstAccountOrThrow", "accounts", "account", "getAccount", "groupByAccount", "updateManyAccount", "updateOneAccount", "upsertOneAccount"],
    Session: ["aggregateSession", "createManySession", "createOneSession", "deleteManySession", "deleteOneSession", "findFirstSession", "findFirstSessionOrThrow", "sessions", "session", "getSession", "groupBySession", "updateManySession", "updateOneSession", "upsertOneSession"],
    User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
    Material: ["aggregateMaterial", "createManyMaterial", "createOneMaterial", "deleteManyMaterial", "deleteOneMaterial", "findFirstMaterial", "findFirstMaterialOrThrow", "materials", "material", "getMaterial", "groupByMaterial", "updateManyMaterial", "updateOneMaterial", "upsertOneMaterial"],
    InventoryMovement: ["aggregateInventoryMovement", "createManyInventoryMovement", "createOneInventoryMovement", "deleteManyInventoryMovement", "deleteOneInventoryMovement", "findFirstInventoryMovement", "findFirstInventoryMovementOrThrow", "inventoryMovements", "inventoryMovement", "getInventoryMovement", "groupByInventoryMovement", "updateManyInventoryMovement", "updateOneInventoryMovement", "upsertOneInventoryMovement"],
    Role: ["aggregateRole", "createManyRole", "createOneRole", "deleteManyRole", "deleteOneRole", "findFirstRole", "findFirstRoleOrThrow", "roles", "role", "getRole", "groupByRole", "updateManyRole", "updateOneRole", "upsertOneRole"],
    Employee: ["aggregateEmployee", "createManyEmployee", "createOneEmployee", "deleteManyEmployee", "deleteOneEmployee", "findFirstEmployee", "findFirstEmployeeOrThrow", "employees", "employee", "getEmployee", "groupByEmployee", "updateManyEmployee", "updateOneEmployee", "upsertOneEmployee"],
    Evaluation: ["aggregateEvaluation", "createManyEvaluation", "createOneEvaluation", "deleteManyEvaluation", "deleteOneEvaluation", "findFirstEvaluation", "findFirstEvaluationOrThrow", "evaluations", "evaluation", "getEvaluation", "groupByEvaluation", "updateManyEvaluation", "updateOneEvaluation", "upsertOneEvaluation"],
    VerificationToken: ["aggregateVerificationToken", "createManyVerificationToken", "createOneVerificationToken", "deleteManyVerificationToken", "deleteOneVerificationToken", "findFirstVerificationToken", "findFirstVerificationTokenOrThrow", "verificationTokens", "verificationToken", "getVerificationToken", "groupByVerificationToken", "updateManyVerificationToken", "updateOneVerificationToken", "upsertOneVerificationToken"]
};
const argsInfo = {
    AggregateAccountArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyAccountArgs: ["data", "skipDuplicates"],
    CreateOneAccountArgs: ["data"],
    DeleteManyAccountArgs: ["where"],
    DeleteOneAccountArgs: ["where"],
    FindFirstAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstAccountOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueAccountArgs: ["where"],
    FindUniqueAccountOrThrowArgs: ["where"],
    GroupByAccountArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyAccountArgs: ["data", "where"],
    UpdateOneAccountArgs: ["data", "where"],
    UpsertOneAccountArgs: ["where", "create", "update"],
    AggregateSessionArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManySessionArgs: ["data", "skipDuplicates"],
    CreateOneSessionArgs: ["data"],
    DeleteManySessionArgs: ["where"],
    DeleteOneSessionArgs: ["where"],
    FindFirstSessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstSessionOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManySessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueSessionArgs: ["where"],
    FindUniqueSessionOrThrowArgs: ["where"],
    GroupBySessionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManySessionArgs: ["data", "where"],
    UpdateOneSessionArgs: ["data", "where"],
    UpsertOneSessionArgs: ["where", "create", "update"],
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    CreateOneUserArgs: ["data"],
    DeleteManyUserArgs: ["where"],
    DeleteOneUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueUserArgs: ["where"],
    FindUniqueUserOrThrowArgs: ["where"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyUserArgs: ["data", "where"],
    UpdateOneUserArgs: ["data", "where"],
    UpsertOneUserArgs: ["where", "create", "update"],
    AggregateMaterialArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyMaterialArgs: ["data", "skipDuplicates"],
    CreateOneMaterialArgs: ["data"],
    DeleteManyMaterialArgs: ["where"],
    DeleteOneMaterialArgs: ["where"],
    FindFirstMaterialArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstMaterialOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyMaterialArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueMaterialArgs: ["where"],
    FindUniqueMaterialOrThrowArgs: ["where"],
    GroupByMaterialArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyMaterialArgs: ["data", "where"],
    UpdateOneMaterialArgs: ["data", "where"],
    UpsertOneMaterialArgs: ["where", "create", "update"],
    AggregateInventoryMovementArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyInventoryMovementArgs: ["data", "skipDuplicates"],
    CreateOneInventoryMovementArgs: ["data"],
    DeleteManyInventoryMovementArgs: ["where"],
    DeleteOneInventoryMovementArgs: ["where"],
    FindFirstInventoryMovementArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstInventoryMovementOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyInventoryMovementArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueInventoryMovementArgs: ["where"],
    FindUniqueInventoryMovementOrThrowArgs: ["where"],
    GroupByInventoryMovementArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyInventoryMovementArgs: ["data", "where"],
    UpdateOneInventoryMovementArgs: ["data", "where"],
    UpsertOneInventoryMovementArgs: ["where", "create", "update"],
    AggregateRoleArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyRoleArgs: ["data", "skipDuplicates"],
    CreateOneRoleArgs: ["data"],
    DeleteManyRoleArgs: ["where"],
    DeleteOneRoleArgs: ["where"],
    FindFirstRoleArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstRoleOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyRoleArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueRoleArgs: ["where"],
    FindUniqueRoleOrThrowArgs: ["where"],
    GroupByRoleArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyRoleArgs: ["data", "where"],
    UpdateOneRoleArgs: ["data", "where"],
    UpsertOneRoleArgs: ["where", "create", "update"],
    AggregateEmployeeArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyEmployeeArgs: ["data", "skipDuplicates"],
    CreateOneEmployeeArgs: ["data"],
    DeleteManyEmployeeArgs: ["where"],
    DeleteOneEmployeeArgs: ["where"],
    FindFirstEmployeeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstEmployeeOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyEmployeeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueEmployeeArgs: ["where"],
    FindUniqueEmployeeOrThrowArgs: ["where"],
    GroupByEmployeeArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyEmployeeArgs: ["data", "where"],
    UpdateOneEmployeeArgs: ["data", "where"],
    UpsertOneEmployeeArgs: ["where", "create", "update"],
    AggregateEvaluationArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyEvaluationArgs: ["data", "skipDuplicates"],
    CreateOneEvaluationArgs: ["data"],
    DeleteManyEvaluationArgs: ["where"],
    DeleteOneEvaluationArgs: ["where"],
    FindFirstEvaluationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstEvaluationOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyEvaluationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueEvaluationArgs: ["where"],
    FindUniqueEvaluationOrThrowArgs: ["where"],
    GroupByEvaluationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyEvaluationArgs: ["data", "where"],
    UpdateOneEvaluationArgs: ["data", "where"],
    UpsertOneEvaluationArgs: ["where", "create", "update"],
    AggregateVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyVerificationTokenArgs: ["data", "skipDuplicates"],
    CreateOneVerificationTokenArgs: ["data"],
    DeleteManyVerificationTokenArgs: ["where"],
    DeleteOneVerificationTokenArgs: ["where"],
    FindFirstVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstVerificationTokenOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueVerificationTokenArgs: ["where"],
    FindUniqueVerificationTokenOrThrowArgs: ["where"],
    GroupByVerificationTokenArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyVerificationTokenArgs: ["data", "where"],
    UpdateOneVerificationTokenArgs: ["data", "where"],
    UpsertOneVerificationTokenArgs: ["where", "create", "update"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    const mutationOperationPrefixes = [
        "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
    ];
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        const allActionsDecorators = resolverActionsConfig._all;
        const resolverActionNames = crudResolversInfo[modelName];
        for (const resolverActionName of resolverActionNames) {
            const maybeDecoratorsOrFn = resolverActionsConfig[resolverActionName];
            const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
            const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
            const mainDecorators = [
                ...allActionsDecorators ?? [],
                ...operationKindDecorators ?? [],
            ];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(mainDecorators);
            }
            else {
                decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    Account: relationResolvers.AccountRelationsResolver,
    Session: relationResolvers.SessionRelationsResolver,
    User: relationResolvers.UserRelationsResolver,
    Material: relationResolvers.MaterialRelationsResolver,
    InventoryMovement: relationResolvers.InventoryMovementRelationsResolver,
    Role: relationResolvers.RoleRelationsResolver,
    Employee: relationResolvers.EmployeeRelationsResolver,
    Evaluation: relationResolvers.EvaluationRelationsResolver
};
const relationResolversInfo = {
    Account: ["user"],
    Session: ["user"],
    User: ["role", "accounts", "sessions", "materials", "movements"],
    Material: ["createdBy", "movements"],
    InventoryMovement: ["material", "createdBy"],
    Role: ["users"],
    Employee: ["evaluations"],
    Evaluation: ["employee"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        const allActionsDecorators = relationResolverActionsConfig._all ?? [];
        const relationResolverActionNames = relationResolversInfo[modelName];
        for (const relationResolverActionName of relationResolverActionNames) {
            const maybeDecoratorsOrFn = relationResolverActionsConfig[relationResolverActionName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allActionsDecorators);
            }
            else {
                decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        const allFieldsDecorators = enhanceConfig.fields._all ?? [];
        for (const typeFieldName of typeFieldNames) {
            const maybeDecoratorsOrFn = enhanceConfig.fields[typeFieldName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allFieldsDecorators);
            }
            else {
                decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    Account: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    Session: ["id", "sessionToken", "userId", "expires"],
    User: ["id", "name", "email", "emailVerified", "image", "roleId"],
    Material: ["id", "name", "quantity", "userId", "createdAt", "updatedAt"],
    InventoryMovement: ["id", "movementType", "quantity", "materialId", "userId"],
    Role: ["id", "name", "createdAt", "updatedAt"],
    Employee: ["id", "firstName", "lastName", "email", "hireDate", "position", "department", "salary", "hoursWorked", "createdAt", "updatedAt"],
    Evaluation: ["id", "employeeId", "performance", "comments", "createdAt", "updatedAt"],
    VerificationToken: ["identifier", "token", "expires"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateAccount: ["_count", "_avg", "_sum", "_min", "_max"],
    AccountGroupBy: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateSession: ["_count", "_min", "_max"],
    SessionGroupBy: ["id", "sessionToken", "userId", "expires", "_count", "_min", "_max"],
    AggregateUser: ["_count", "_min", "_max"],
    UserGroupBy: ["id", "name", "email", "emailVerified", "image", "roleId", "_count", "_min", "_max"],
    AggregateMaterial: ["_count", "_avg", "_sum", "_min", "_max"],
    MaterialGroupBy: ["id", "name", "quantity", "userId", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateInventoryMovement: ["_count", "_avg", "_sum", "_min", "_max"],
    InventoryMovementGroupBy: ["id", "movementType", "quantity", "materialId", "userId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateRole: ["_count", "_min", "_max"],
    RoleGroupBy: ["id", "name", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregateEmployee: ["_count", "_avg", "_sum", "_min", "_max"],
    EmployeeGroupBy: ["id", "firstName", "lastName", "email", "hireDate", "position", "department", "salary", "hoursWorked", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateEvaluation: ["_count", "_avg", "_sum", "_min", "_max"],
    EvaluationGroupBy: ["id", "employeeId", "performance", "comments", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateVerificationToken: ["_count", "_min", "_max"],
    VerificationTokenGroupBy: ["identifier", "token", "expires", "_count", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    AccountCountAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "_all"],
    AccountAvgAggregate: ["expires_at"],
    AccountSumAggregate: ["expires_at"],
    AccountMinAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    AccountMaxAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    SessionCountAggregate: ["id", "sessionToken", "userId", "expires", "_all"],
    SessionMinAggregate: ["id", "sessionToken", "userId", "expires"],
    SessionMaxAggregate: ["id", "sessionToken", "userId", "expires"],
    UserCount: ["accounts", "sessions", "materials", "movements"],
    UserCountAggregate: ["id", "name", "email", "emailVerified", "image", "roleId", "_all"],
    UserMinAggregate: ["id", "name", "email", "emailVerified", "image", "roleId"],
    UserMaxAggregate: ["id", "name", "email", "emailVerified", "image", "roleId"],
    MaterialCount: ["movements"],
    MaterialCountAggregate: ["id", "name", "quantity", "userId", "createdAt", "updatedAt", "_all"],
    MaterialAvgAggregate: ["quantity"],
    MaterialSumAggregate: ["quantity"],
    MaterialMinAggregate: ["id", "name", "quantity", "userId", "createdAt", "updatedAt"],
    MaterialMaxAggregate: ["id", "name", "quantity", "userId", "createdAt", "updatedAt"],
    InventoryMovementCountAggregate: ["id", "movementType", "quantity", "materialId", "userId", "_all"],
    InventoryMovementAvgAggregate: ["quantity"],
    InventoryMovementSumAggregate: ["quantity"],
    InventoryMovementMinAggregate: ["id", "movementType", "quantity", "materialId", "userId"],
    InventoryMovementMaxAggregate: ["id", "movementType", "quantity", "materialId", "userId"],
    RoleCount: ["users"],
    RoleCountAggregate: ["id", "name", "createdAt", "updatedAt", "_all"],
    RoleMinAggregate: ["id", "name", "createdAt", "updatedAt"],
    RoleMaxAggregate: ["id", "name", "createdAt", "updatedAt"],
    EmployeeCount: ["evaluations"],
    EmployeeCountAggregate: ["id", "firstName", "lastName", "email", "hireDate", "position", "department", "salary", "hoursWorked", "createdAt", "updatedAt", "_all"],
    EmployeeAvgAggregate: ["salary", "hoursWorked"],
    EmployeeSumAggregate: ["salary", "hoursWorked"],
    EmployeeMinAggregate: ["id", "firstName", "lastName", "email", "hireDate", "position", "department", "salary", "hoursWorked", "createdAt", "updatedAt"],
    EmployeeMaxAggregate: ["id", "firstName", "lastName", "email", "hireDate", "position", "department", "salary", "hoursWorked", "createdAt", "updatedAt"],
    EvaluationCountAggregate: ["id", "employeeId", "performance", "comments", "createdAt", "updatedAt", "_all"],
    EvaluationAvgAggregate: ["performance"],
    EvaluationSumAggregate: ["performance"],
    EvaluationMinAggregate: ["id", "employeeId", "performance", "comments", "createdAt", "updatedAt"],
    EvaluationMaxAggregate: ["id", "employeeId", "performance", "comments", "createdAt", "updatedAt"],
    VerificationTokenCountAggregate: ["identifier", "token", "expires", "_all"],
    VerificationTokenMinAggregate: ["identifier", "token", "expires"],
    VerificationTokenMaxAggregate: ["identifier", "token", "expires"],
    CreateManyAccountAndReturnOutputType: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
    CreateManySessionAndReturnOutputType: ["id", "sessionToken", "userId", "expires", "user"],
    CreateManyUserAndReturnOutputType: ["id", "name", "email", "emailVerified", "image", "roleId", "role"],
    CreateManyMaterialAndReturnOutputType: ["id", "name", "quantity", "userId", "createdAt", "updatedAt", "createdBy"],
    CreateManyInventoryMovementAndReturnOutputType: ["id", "movementType", "quantity", "materialId", "userId", "material", "createdBy"],
    CreateManyRoleAndReturnOutputType: ["id", "name", "createdAt", "updatedAt"],
    CreateManyEmployeeAndReturnOutputType: ["id", "firstName", "lastName", "email", "hireDate", "position", "department", "salary", "hoursWorked", "createdAt", "updatedAt"],
    CreateManyEvaluationAndReturnOutputType: ["id", "employeeId", "performance", "comments", "createdAt", "updatedAt", "employee"],
    CreateManyVerificationTokenAndReturnOutputType: ["identifier", "token", "expires"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    AccountWhereInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
    AccountOrderByWithRelationInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
    AccountWhereUniqueInput: ["id", "provider_providerAccountId", "AND", "OR", "NOT", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
    AccountOrderByWithAggregationInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "_count", "_avg", "_max", "_min", "_sum"],
    AccountScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    SessionWhereInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires", "user"],
    SessionOrderByWithRelationInput: ["id", "sessionToken", "userId", "expires", "user"],
    SessionWhereUniqueInput: ["id", "sessionToken", "AND", "OR", "NOT", "userId", "expires", "user"],
    SessionOrderByWithAggregationInput: ["id", "sessionToken", "userId", "expires", "_count", "_max", "_min"],
    SessionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires"],
    UserWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image", "roleId", "role", "accounts", "sessions", "materials", "movements"],
    UserOrderByWithRelationInput: ["id", "name", "email", "emailVerified", "image", "roleId", "role", "accounts", "sessions", "materials", "movements"],
    UserWhereUniqueInput: ["id", "email", "AND", "OR", "NOT", "name", "emailVerified", "image", "roleId", "role", "accounts", "sessions", "materials", "movements"],
    UserOrderByWithAggregationInput: ["id", "name", "email", "emailVerified", "image", "roleId", "_count", "_max", "_min"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image", "roleId"],
    MaterialWhereInput: ["AND", "OR", "NOT", "id", "name", "quantity", "userId", "createdAt", "updatedAt", "createdBy", "movements"],
    MaterialOrderByWithRelationInput: ["id", "name", "quantity", "userId", "createdAt", "updatedAt", "createdBy", "movements"],
    MaterialWhereUniqueInput: ["id", "name", "AND", "OR", "NOT", "quantity", "userId", "createdAt", "updatedAt", "createdBy", "movements"],
    MaterialOrderByWithAggregationInput: ["id", "name", "quantity", "userId", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
    MaterialScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "quantity", "userId", "createdAt", "updatedAt"],
    InventoryMovementWhereInput: ["AND", "OR", "NOT", "id", "movementType", "quantity", "materialId", "userId", "material", "createdBy"],
    InventoryMovementOrderByWithRelationInput: ["id", "movementType", "quantity", "materialId", "userId", "material", "createdBy"],
    InventoryMovementWhereUniqueInput: ["id", "AND", "OR", "NOT", "movementType", "quantity", "materialId", "userId", "material", "createdBy"],
    InventoryMovementOrderByWithAggregationInput: ["id", "movementType", "quantity", "materialId", "userId", "_count", "_avg", "_max", "_min", "_sum"],
    InventoryMovementScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "movementType", "quantity", "materialId", "userId"],
    RoleWhereInput: ["AND", "OR", "NOT", "id", "name", "createdAt", "updatedAt", "users"],
    RoleOrderByWithRelationInput: ["id", "name", "createdAt", "updatedAt", "users"],
    RoleWhereUniqueInput: ["id", "name", "AND", "OR", "NOT", "createdAt", "updatedAt", "users"],
    RoleOrderByWithAggregationInput: ["id", "name", "createdAt", "updatedAt", "_count", "_max", "_min"],
    RoleScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "createdAt", "updatedAt"],
    EmployeeWhereInput: ["AND", "OR", "NOT", "id", "firstName", "lastName", "email", "hireDate", "position", "department", "salary", "hoursWorked", "createdAt", "updatedAt", "evaluations"],
    EmployeeOrderByWithRelationInput: ["id", "firstName", "lastName", "email", "hireDate", "position", "department", "salary", "hoursWorked", "createdAt", "updatedAt", "evaluations"],
    EmployeeWhereUniqueInput: ["id", "email", "AND", "OR", "NOT", "firstName", "lastName", "hireDate", "position", "department", "salary", "hoursWorked", "createdAt", "updatedAt", "evaluations"],
    EmployeeOrderByWithAggregationInput: ["id", "firstName", "lastName", "email", "hireDate", "position", "department", "salary", "hoursWorked", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
    EmployeeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "firstName", "lastName", "email", "hireDate", "position", "department", "salary", "hoursWorked", "createdAt", "updatedAt"],
    EvaluationWhereInput: ["AND", "OR", "NOT", "id", "employeeId", "performance", "comments", "createdAt", "updatedAt", "employee"],
    EvaluationOrderByWithRelationInput: ["id", "employeeId", "performance", "comments", "createdAt", "updatedAt", "employee"],
    EvaluationWhereUniqueInput: ["id", "AND", "OR", "NOT", "employeeId", "performance", "comments", "createdAt", "updatedAt", "employee"],
    EvaluationOrderByWithAggregationInput: ["id", "employeeId", "performance", "comments", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
    EvaluationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "employeeId", "performance", "comments", "createdAt", "updatedAt"],
    VerificationTokenWhereInput: ["AND", "OR", "NOT", "identifier", "token", "expires"],
    VerificationTokenOrderByWithRelationInput: ["identifier", "token", "expires"],
    VerificationTokenWhereUniqueInput: ["token", "identifier_token", "AND", "OR", "NOT", "identifier", "expires"],
    VerificationTokenOrderByWithAggregationInput: ["identifier", "token", "expires", "_count", "_max", "_min"],
    VerificationTokenScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "identifier", "token", "expires"],
    AccountCreateInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
    AccountUpdateInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
    AccountCreateManyInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    AccountUpdateManyMutationInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    SessionCreateInput: ["id", "sessionToken", "expires", "user"],
    SessionUpdateInput: ["id", "sessionToken", "expires", "user"],
    SessionCreateManyInput: ["id", "sessionToken", "userId", "expires"],
    SessionUpdateManyMutationInput: ["id", "sessionToken", "expires"],
    UserCreateInput: ["id", "name", "email", "emailVerified", "image", "role", "accounts", "sessions", "materials", "movements"],
    UserUpdateInput: ["id", "name", "email", "emailVerified", "image", "role", "accounts", "sessions", "materials", "movements"],
    UserCreateManyInput: ["id", "name", "email", "emailVerified", "image", "roleId"],
    UserUpdateManyMutationInput: ["id", "name", "email", "emailVerified", "image"],
    MaterialCreateInput: ["id", "name", "quantity", "createdAt", "updatedAt", "createdBy", "movements"],
    MaterialUpdateInput: ["id", "name", "quantity", "createdAt", "updatedAt", "createdBy", "movements"],
    MaterialCreateManyInput: ["id", "name", "quantity", "userId", "createdAt", "updatedAt"],
    MaterialUpdateManyMutationInput: ["id", "name", "quantity", "createdAt", "updatedAt"],
    InventoryMovementCreateInput: ["id", "movementType", "quantity", "material", "createdBy"],
    InventoryMovementUpdateInput: ["id", "movementType", "quantity", "material", "createdBy"],
    InventoryMovementCreateManyInput: ["id", "movementType", "quantity", "materialId", "userId"],
    InventoryMovementUpdateManyMutationInput: ["id", "movementType", "quantity"],
    RoleCreateInput: ["id", "name", "createdAt", "updatedAt", "users"],
    RoleUpdateInput: ["id", "name", "createdAt", "updatedAt", "users"],
    RoleCreateManyInput: ["id", "name", "createdAt", "updatedAt"],
    RoleUpdateManyMutationInput: ["id", "name", "createdAt", "updatedAt"],
    EmployeeCreateInput: ["id", "firstName", "lastName", "email", "hireDate", "position", "department", "salary", "hoursWorked", "createdAt", "updatedAt", "evaluations"],
    EmployeeUpdateInput: ["id", "firstName", "lastName", "email", "hireDate", "position", "department", "salary", "hoursWorked", "createdAt", "updatedAt", "evaluations"],
    EmployeeCreateManyInput: ["id", "firstName", "lastName", "email", "hireDate", "position", "department", "salary", "hoursWorked", "createdAt", "updatedAt"],
    EmployeeUpdateManyMutationInput: ["id", "firstName", "lastName", "email", "hireDate", "position", "department", "salary", "hoursWorked", "createdAt", "updatedAt"],
    EvaluationCreateInput: ["id", "performance", "comments", "createdAt", "updatedAt", "employee"],
    EvaluationUpdateInput: ["id", "performance", "comments", "createdAt", "updatedAt", "employee"],
    EvaluationCreateManyInput: ["id", "employeeId", "performance", "comments", "createdAt", "updatedAt"],
    EvaluationUpdateManyMutationInput: ["id", "performance", "comments", "createdAt", "updatedAt"],
    VerificationTokenCreateInput: ["identifier", "token", "expires"],
    VerificationTokenUpdateInput: ["identifier", "token", "expires"],
    VerificationTokenCreateManyInput: ["identifier", "token", "expires"],
    VerificationTokenUpdateManyMutationInput: ["identifier", "token", "expires"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    UserRelationFilter: ["is", "isNot"],
    SortOrderInput: ["sort", "nulls"],
    AccountProviderProviderAccountIdCompoundUniqueInput: ["provider", "providerAccountId"],
    AccountCountOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    AccountAvgOrderByAggregateInput: ["expires_at"],
    AccountMaxOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    AccountMinOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    AccountSumOrderByAggregateInput: ["expires_at"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    SessionCountOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
    SessionMaxOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
    SessionMinOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    RoleNullableRelationFilter: ["is", "isNot"],
    AccountListRelationFilter: ["every", "some", "none"],
    SessionListRelationFilter: ["every", "some", "none"],
    MaterialListRelationFilter: ["every", "some", "none"],
    InventoryMovementListRelationFilter: ["every", "some", "none"],
    AccountOrderByRelationAggregateInput: ["_count"],
    SessionOrderByRelationAggregateInput: ["_count"],
    MaterialOrderByRelationAggregateInput: ["_count"],
    InventoryMovementOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image", "roleId"],
    UserMaxOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image", "roleId"],
    UserMinOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image", "roleId"],
    DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    MaterialCountOrderByAggregateInput: ["id", "name", "quantity", "userId", "createdAt", "updatedAt"],
    MaterialAvgOrderByAggregateInput: ["quantity"],
    MaterialMaxOrderByAggregateInput: ["id", "name", "quantity", "userId", "createdAt", "updatedAt"],
    MaterialMinOrderByAggregateInput: ["id", "name", "quantity", "userId", "createdAt", "updatedAt"],
    MaterialSumOrderByAggregateInput: ["quantity"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    EnumEnum_MovementTypeFilter: ["equals", "in", "notIn", "not"],
    MaterialRelationFilter: ["is", "isNot"],
    InventoryMovementCountOrderByAggregateInput: ["id", "movementType", "quantity", "materialId", "userId"],
    InventoryMovementAvgOrderByAggregateInput: ["quantity"],
    InventoryMovementMaxOrderByAggregateInput: ["id", "movementType", "quantity", "materialId", "userId"],
    InventoryMovementMinOrderByAggregateInput: ["id", "movementType", "quantity", "materialId", "userId"],
    InventoryMovementSumOrderByAggregateInput: ["quantity"],
    EnumEnum_MovementTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    EnumEnum_RoleNameFilter: ["equals", "in", "notIn", "not"],
    UserListRelationFilter: ["every", "some", "none"],
    UserOrderByRelationAggregateInput: ["_count"],
    RoleCountOrderByAggregateInput: ["id", "name", "createdAt", "updatedAt"],
    RoleMaxOrderByAggregateInput: ["id", "name", "createdAt", "updatedAt"],
    RoleMinOrderByAggregateInput: ["id", "name", "createdAt", "updatedAt"],
    EnumEnum_RoleNameWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    EvaluationListRelationFilter: ["every", "some", "none"],
    EvaluationOrderByRelationAggregateInput: ["_count"],
    EmployeeCountOrderByAggregateInput: ["id", "firstName", "lastName", "email", "hireDate", "position", "department", "salary", "hoursWorked", "createdAt", "updatedAt"],
    EmployeeAvgOrderByAggregateInput: ["salary", "hoursWorked"],
    EmployeeMaxOrderByAggregateInput: ["id", "firstName", "lastName", "email", "hireDate", "position", "department", "salary", "hoursWorked", "createdAt", "updatedAt"],
    EmployeeMinOrderByAggregateInput: ["id", "firstName", "lastName", "email", "hireDate", "position", "department", "salary", "hoursWorked", "createdAt", "updatedAt"],
    EmployeeSumOrderByAggregateInput: ["salary", "hoursWorked"],
    FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    EmployeeRelationFilter: ["is", "isNot"],
    EvaluationCountOrderByAggregateInput: ["id", "employeeId", "performance", "comments", "createdAt", "updatedAt"],
    EvaluationAvgOrderByAggregateInput: ["performance"],
    EvaluationMaxOrderByAggregateInput: ["id", "employeeId", "performance", "comments", "createdAt", "updatedAt"],
    EvaluationMinOrderByAggregateInput: ["id", "employeeId", "performance", "comments", "createdAt", "updatedAt"],
    EvaluationSumOrderByAggregateInput: ["performance"],
    VerificationTokenIdentifierTokenCompoundUniqueInput: ["identifier", "token"],
    VerificationTokenCountOrderByAggregateInput: ["identifier", "token", "expires"],
    VerificationTokenMaxOrderByAggregateInput: ["identifier", "token", "expires"],
    VerificationTokenMinOrderByAggregateInput: ["identifier", "token", "expires"],
    UserCreateNestedOneWithoutAccountsInput: ["create", "connectOrCreate", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    UserUpdateOneRequiredWithoutAccountsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreateNestedOneWithoutSessionsInput: ["create", "connectOrCreate", "connect"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    UserUpdateOneRequiredWithoutSessionsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    RoleCreateNestedOneWithoutUsersInput: ["create", "connectOrCreate", "connect"],
    AccountCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    SessionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    MaterialCreateNestedManyWithoutCreatedByInput: ["create", "connectOrCreate", "createMany", "connect"],
    InventoryMovementCreateNestedManyWithoutCreatedByInput: ["create", "connectOrCreate", "createMany", "connect"],
    NullableDateTimeFieldUpdateOperationsInput: ["set"],
    RoleUpdateOneWithoutUsersNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    AccountUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    SessionUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    MaterialUpdateManyWithoutCreatedByNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    InventoryMovementUpdateManyWithoutCreatedByNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    UserCreateNestedOneWithoutMaterialsInput: ["create", "connectOrCreate", "connect"],
    InventoryMovementCreateNestedManyWithoutMaterialInput: ["create", "connectOrCreate", "createMany", "connect"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    UserUpdateOneRequiredWithoutMaterialsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    InventoryMovementUpdateManyWithoutMaterialNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    MaterialCreateNestedOneWithoutMovementsInput: ["create", "connectOrCreate", "connect"],
    UserCreateNestedOneWithoutMovementsInput: ["create", "connectOrCreate", "connect"],
    EnumEnum_MovementTypeFieldUpdateOperationsInput: ["set"],
    MaterialUpdateOneRequiredWithoutMovementsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserUpdateOneRequiredWithoutMovementsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreateNestedManyWithoutRoleInput: ["create", "connectOrCreate", "createMany", "connect"],
    EnumEnum_RoleNameFieldUpdateOperationsInput: ["set"],
    UserUpdateManyWithoutRoleNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    EvaluationCreateNestedManyWithoutEmployeeInput: ["create", "connectOrCreate", "createMany", "connect"],
    FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    EvaluationUpdateManyWithoutEmployeeNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    EmployeeCreateNestedOneWithoutEvaluationsInput: ["create", "connectOrCreate", "connect"],
    EmployeeUpdateOneRequiredWithoutEvaluationsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumEnum_MovementTypeFilter: ["equals", "in", "notIn", "not"],
    NestedEnumEnum_MovementTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedEnumEnum_RoleNameFilter: ["equals", "in", "notIn", "not"],
    NestedEnumEnum_RoleNameWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    UserCreateWithoutAccountsInput: ["id", "name", "email", "emailVerified", "image", "role", "sessions", "materials", "movements"],
    UserCreateOrConnectWithoutAccountsInput: ["where", "create"],
    UserUpsertWithoutAccountsInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutAccountsInput: ["where", "data"],
    UserUpdateWithoutAccountsInput: ["id", "name", "email", "emailVerified", "image", "role", "sessions", "materials", "movements"],
    UserCreateWithoutSessionsInput: ["id", "name", "email", "emailVerified", "image", "role", "accounts", "materials", "movements"],
    UserCreateOrConnectWithoutSessionsInput: ["where", "create"],
    UserUpsertWithoutSessionsInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutSessionsInput: ["where", "data"],
    UserUpdateWithoutSessionsInput: ["id", "name", "email", "emailVerified", "image", "role", "accounts", "materials", "movements"],
    RoleCreateWithoutUsersInput: ["id", "name", "createdAt", "updatedAt"],
    RoleCreateOrConnectWithoutUsersInput: ["where", "create"],
    AccountCreateWithoutUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    AccountCreateOrConnectWithoutUserInput: ["where", "create"],
    AccountCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    SessionCreateWithoutUserInput: ["id", "sessionToken", "expires"],
    SessionCreateOrConnectWithoutUserInput: ["where", "create"],
    SessionCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    MaterialCreateWithoutCreatedByInput: ["id", "name", "quantity", "createdAt", "updatedAt", "movements"],
    MaterialCreateOrConnectWithoutCreatedByInput: ["where", "create"],
    MaterialCreateManyCreatedByInputEnvelope: ["data", "skipDuplicates"],
    InventoryMovementCreateWithoutCreatedByInput: ["id", "movementType", "quantity", "material"],
    InventoryMovementCreateOrConnectWithoutCreatedByInput: ["where", "create"],
    InventoryMovementCreateManyCreatedByInputEnvelope: ["data", "skipDuplicates"],
    RoleUpsertWithoutUsersInput: ["update", "create", "where"],
    RoleUpdateToOneWithWhereWithoutUsersInput: ["where", "data"],
    RoleUpdateWithoutUsersInput: ["id", "name", "createdAt", "updatedAt"],
    AccountUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    AccountUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    AccountUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    AccountScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    SessionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    SessionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    SessionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    SessionScalarWhereInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires"],
    MaterialUpsertWithWhereUniqueWithoutCreatedByInput: ["where", "update", "create"],
    MaterialUpdateWithWhereUniqueWithoutCreatedByInput: ["where", "data"],
    MaterialUpdateManyWithWhereWithoutCreatedByInput: ["where", "data"],
    MaterialScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "quantity", "userId", "createdAt", "updatedAt"],
    InventoryMovementUpsertWithWhereUniqueWithoutCreatedByInput: ["where", "update", "create"],
    InventoryMovementUpdateWithWhereUniqueWithoutCreatedByInput: ["where", "data"],
    InventoryMovementUpdateManyWithWhereWithoutCreatedByInput: ["where", "data"],
    InventoryMovementScalarWhereInput: ["AND", "OR", "NOT", "id", "movementType", "quantity", "materialId", "userId"],
    UserCreateWithoutMaterialsInput: ["id", "name", "email", "emailVerified", "image", "role", "accounts", "sessions", "movements"],
    UserCreateOrConnectWithoutMaterialsInput: ["where", "create"],
    InventoryMovementCreateWithoutMaterialInput: ["id", "movementType", "quantity", "createdBy"],
    InventoryMovementCreateOrConnectWithoutMaterialInput: ["where", "create"],
    InventoryMovementCreateManyMaterialInputEnvelope: ["data", "skipDuplicates"],
    UserUpsertWithoutMaterialsInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutMaterialsInput: ["where", "data"],
    UserUpdateWithoutMaterialsInput: ["id", "name", "email", "emailVerified", "image", "role", "accounts", "sessions", "movements"],
    InventoryMovementUpsertWithWhereUniqueWithoutMaterialInput: ["where", "update", "create"],
    InventoryMovementUpdateWithWhereUniqueWithoutMaterialInput: ["where", "data"],
    InventoryMovementUpdateManyWithWhereWithoutMaterialInput: ["where", "data"],
    MaterialCreateWithoutMovementsInput: ["id", "name", "quantity", "createdAt", "updatedAt", "createdBy"],
    MaterialCreateOrConnectWithoutMovementsInput: ["where", "create"],
    UserCreateWithoutMovementsInput: ["id", "name", "email", "emailVerified", "image", "role", "accounts", "sessions", "materials"],
    UserCreateOrConnectWithoutMovementsInput: ["where", "create"],
    MaterialUpsertWithoutMovementsInput: ["update", "create", "where"],
    MaterialUpdateToOneWithWhereWithoutMovementsInput: ["where", "data"],
    MaterialUpdateWithoutMovementsInput: ["id", "name", "quantity", "createdAt", "updatedAt", "createdBy"],
    UserUpsertWithoutMovementsInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutMovementsInput: ["where", "data"],
    UserUpdateWithoutMovementsInput: ["id", "name", "email", "emailVerified", "image", "role", "accounts", "sessions", "materials"],
    UserCreateWithoutRoleInput: ["id", "name", "email", "emailVerified", "image", "accounts", "sessions", "materials", "movements"],
    UserCreateOrConnectWithoutRoleInput: ["where", "create"],
    UserCreateManyRoleInputEnvelope: ["data", "skipDuplicates"],
    UserUpsertWithWhereUniqueWithoutRoleInput: ["where", "update", "create"],
    UserUpdateWithWhereUniqueWithoutRoleInput: ["where", "data"],
    UserUpdateManyWithWhereWithoutRoleInput: ["where", "data"],
    UserScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image", "roleId"],
    EvaluationCreateWithoutEmployeeInput: ["id", "performance", "comments", "createdAt", "updatedAt"],
    EvaluationCreateOrConnectWithoutEmployeeInput: ["where", "create"],
    EvaluationCreateManyEmployeeInputEnvelope: ["data", "skipDuplicates"],
    EvaluationUpsertWithWhereUniqueWithoutEmployeeInput: ["where", "update", "create"],
    EvaluationUpdateWithWhereUniqueWithoutEmployeeInput: ["where", "data"],
    EvaluationUpdateManyWithWhereWithoutEmployeeInput: ["where", "data"],
    EvaluationScalarWhereInput: ["AND", "OR", "NOT", "id", "employeeId", "performance", "comments", "createdAt", "updatedAt"],
    EmployeeCreateWithoutEvaluationsInput: ["id", "firstName", "lastName", "email", "hireDate", "position", "department", "salary", "hoursWorked", "createdAt", "updatedAt"],
    EmployeeCreateOrConnectWithoutEvaluationsInput: ["where", "create"],
    EmployeeUpsertWithoutEvaluationsInput: ["update", "create", "where"],
    EmployeeUpdateToOneWithWhereWithoutEvaluationsInput: ["where", "data"],
    EmployeeUpdateWithoutEvaluationsInput: ["id", "firstName", "lastName", "email", "hireDate", "position", "department", "salary", "hoursWorked", "createdAt", "updatedAt"],
    AccountCreateManyUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    SessionCreateManyUserInput: ["id", "sessionToken", "expires"],
    MaterialCreateManyCreatedByInput: ["id", "name", "quantity", "createdAt", "updatedAt"],
    InventoryMovementCreateManyCreatedByInput: ["id", "movementType", "quantity", "materialId"],
    AccountUpdateWithoutUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    SessionUpdateWithoutUserInput: ["id", "sessionToken", "expires"],
    MaterialUpdateWithoutCreatedByInput: ["id", "name", "quantity", "createdAt", "updatedAt", "movements"],
    InventoryMovementUpdateWithoutCreatedByInput: ["id", "movementType", "quantity", "material"],
    InventoryMovementCreateManyMaterialInput: ["id", "movementType", "quantity", "userId"],
    InventoryMovementUpdateWithoutMaterialInput: ["id", "movementType", "quantity", "createdBy"],
    UserCreateManyRoleInput: ["id", "name", "email", "emailVerified", "image"],
    UserUpdateWithoutRoleInput: ["id", "name", "email", "emailVerified", "image", "accounts", "sessions", "materials", "movements"],
    EvaluationCreateManyEmployeeInput: ["id", "performance", "comments", "createdAt", "updatedAt"],
    EvaluationUpdateWithoutEmployeeInput: ["id", "performance", "comments", "createdAt", "updatedAt"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
