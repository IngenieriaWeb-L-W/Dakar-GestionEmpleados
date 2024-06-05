"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateManyRoleInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let UserCreateManyRoleInput = class UserCreateManyRoleInput {
};
exports.UserCreateManyRoleInput = UserCreateManyRoleInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateManyRoleInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateManyRoleInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateManyRoleInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateManyRoleInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateManyRoleInput.prototype, "image", void 0);
exports.UserCreateManyRoleInput = UserCreateManyRoleInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateManyRoleInput", {})
], UserCreateManyRoleInput);
