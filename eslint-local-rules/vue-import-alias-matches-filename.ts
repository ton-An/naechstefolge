import type { Rule } from "eslint";
import path from "path";

/**
 * Derives the expected PascalCase component name from a Vue file path.
 * Strips leading underscores (private component convention) and converts
 * kebab-case to PascalCase.
 *
 * Examples:
 *   _CloseUsersMap.vue  → CloseUsersMap
 *   marketing-option-card.vue → MarketingOptionCard
 *   FavoritesCount.vue  → FavoritesCount
 * @param sourcePath - The path to the Vue file.
 * @returns The expected PascalCase component name.
 */
function expectedNameFromPath(sourcePath: string): string {
  const filename = path.basename(sourcePath, ".vue");
  const withoutLeadingUnderscores = filename.replace(/^_+/, "");
  return withoutLeadingUnderscores
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

const rule: Rule.RuleModule = {
  meta: {
    type: "suggestion",
    docs: {
      description:
        "Enforce that Vue component default import aliases match the component filename",
      category: "Best Practices",
      recommended: true,
    },
    messages: {
      mismatch:
        "Vue import alias '{{alias}}' should match the filename '{{expected}}' (from '{{source}}')",
    },
    schema: [],
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        const source = node.source.value;
        if (typeof source !== "string" || !source.endsWith(".vue")) return;

        const expected = expectedNameFromPath(source);

        for (const specifier of node.specifiers) {
          if (specifier.type !== "ImportDefaultSpecifier") continue;

          const alias = specifier.local.name;
          if (alias !== expected) {
            context.report({
              node: specifier,
              messageId: "mismatch",
              data: { alias, expected, source },
            });
          }
        }
      },
    };
  },
};

export default rule;
