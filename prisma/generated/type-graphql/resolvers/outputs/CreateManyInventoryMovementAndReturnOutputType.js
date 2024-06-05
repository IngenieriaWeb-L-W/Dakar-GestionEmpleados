"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyInventoryMovementAndReturnOutputType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Material_1 = require("../outputs/Material");
const User_1 = require("../outputs/User");
const Enum_MovementType_1 = require("../../enums/Enum_MovementType");
let CreateManyInventoryMovementAndReturnOutputType = class CreateManyInventoryMovementAndReturnOutputType {
};
exports.CreateManyInventoryMovementAndReturnOutputType = CreateManyInventoryMovementAndReturnOutputType;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyInventoryMovementAndReturnOutputType.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_MovementType_1.Enum_MovementType, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyInventoryMovementAndReturnOutputType.prototype, "movementType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CreateManyInventoryMovementAndReturnOutputType.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyInventoryMovementAndReturnOutputType.prototype, "materialId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyInventoryMovementAndReturnOutputType.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Material_1.Material, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof (_a = typeof Material_1.Material !== "undefined" && Material_1.Material) === "function" ? _a : Object)
], CreateManyInventoryMovementAndReturnOutputType.prototype, "material", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof (_b = typeof User_1.User !== "undefined" && User_1.User) === "function" ? _b : Object)
], CreateManyInventoryMovementAndReturnOutputType.prototype, "createdBy", void 0);
exports.CreateManyInventoryMovementAndReturnOutputType = CreateManyInventoryMovementAndReturnOutputType = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CreateManyInventoryMovementAndReturnOutputType", {})
], CreateManyInventoryMovementAndReturnOutputType);
