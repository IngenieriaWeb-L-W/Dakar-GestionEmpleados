"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MaterialCountMovementsArgs_1 = require("./args/MaterialCountMovementsArgs");
let MaterialCount = class MaterialCount {
    getMovements(root, args) {
        return root.movements;
    }
};
exports.MaterialCount = MaterialCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "movements",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [MaterialCount, MaterialCountMovementsArgs_1.MaterialCountMovementsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], MaterialCount.prototype, "getMovements", null);
exports.MaterialCount = MaterialCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("MaterialCount", {})
], MaterialCount);
