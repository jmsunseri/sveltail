interface IStyle {
  toStyles: () => string;
  reset: () => IStyle;
  default: IStyle;
}

export type { IStyle };
