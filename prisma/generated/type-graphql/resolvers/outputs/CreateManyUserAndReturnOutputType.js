"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyUserAndReturnOutputType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyUserAndReturnOutputTypeRoleArgs_1 = require("./args/CreateManyUserAndReturnOutputTypeRoleArgs");
const Role_1 = require("../outputs/Role");
let CreateManyUserAndReturnOutputType = class CreateManyUserAndReturnOutputType {
    getRole(root, args) {
        return root.role;
    }
};
exports.CreateManyUserAndReturnOutputType = CreateManyUserAndReturnOutputType;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyUserAndReturnOutputType.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyUserAndReturnOutputType.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyUserAndReturnOutputType.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyUserAndReturnOutputType.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyUserAndReturnOutputType.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyUserAndReturnOutputType.prototype, "roleId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Role_1.Role, {
        name: "role",
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CreateManyUserAndReturnOutputType, CreateManyUserAndReturnOutputTypeRoleArgs_1.CreateManyUserAndReturnOutputTypeRoleArgs]),
    tslib_1.__metadata("design:returntype", typeof (_a = typeof Role_1.Role !== "undefined" && Role_1.Role) === "function" ? _a : Object)
], CreateManyUserAndReturnOutputType.prototype, "getRole", null);
exports.CreateManyUserAndReturnOutputType = CreateManyUserAndReturnOutputType = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CreateManyUserAndReturnOutputType", {})
], CreateManyUserAndReturnOutputType);
