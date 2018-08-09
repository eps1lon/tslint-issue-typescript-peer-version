import * as Lint from "tslint";
import * as ts from "typescript";

export class SomeRule extends Lint.Rules.TypedRule {
  applyWithProgram(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
		return this.applyWithFunction(sourceFile, () => {
			return;
		});
	}
}
