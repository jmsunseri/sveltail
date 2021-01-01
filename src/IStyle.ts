interface IStyle {
  toStyles: () => string;
  reset: () => IStyle;
  default: IStyle;
  name?: string;
  getMarkup?: () => string;
}

export type { IStyle };
