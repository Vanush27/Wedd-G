import { toPairs } from "lodash";

export type ModifiersType =
  | { [modifier: string]: boolean | void }
  | string
  | string[]
  | void;

export class BemHelper {
  blockName: string;

  _elementSeparator = "__";

  _modifierSeparator = "--";

  constructor(blockName: string) {
    this.blockName = blockName;
  }

  block(): string {
    return this.blockName;
  }

  element(elementName: string): string {
    return `${this.blockName}${this._elementSeparator}${elementName}`;
  }

  modifyBlock(modifiers: ModifiersType): string {
    return this.modify(this.blockName, modifiers);
  }

  modifyElement(elementName: string, modifiers: ModifiersType): string {
    return this.modify(this.element(elementName), modifiers);
  }

  modify(base: string, modifiers: ModifiersType): string {
    if (typeof modifiers === "string") {
      return `${base}${this._modifierSeparator}${modifiers}`;
    }
    if (Array.isArray(modifiers)) {
      return modifiers
        .map((modifier) => `${base}${this._modifierSeparator}${modifier}`)
        .join(" ");
    }
    if (typeof modifiers === "object") {
      return toPairs(modifiers)
        .reduce((styles: string[], [modifier, enabled]) => {
          if (enabled) {
            return [...styles, `${base}${this._modifierSeparator}${modifier}`];
          }

          return styles;
        }, [])
        .join(" ");
    }

    return "";
  }
}

export const createBlock = (block: string) => new BemHelper(block);
