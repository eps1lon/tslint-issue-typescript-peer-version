"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Lint = require("tslint");
var SomeRule = (function (_super) {
    __extends(SomeRule, _super);
    function SomeRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SomeRule.prototype.applyWithProgram = function (sourceFile) {
        return this.applyWithFunction(sourceFile, function () {
            return;
        });
    };
    return SomeRule;
}(Lint.Rules.TypedRule));
exports.SomeRule = SomeRule;
