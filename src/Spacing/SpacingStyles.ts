interface ISpacing {
  spacing: string;
  size: string;
}

class SpacingStyles {
  padding?: ISpacing[] = [];
  margin?: ISpacing[] = [];

  constructor(init?: Partial<SpacingStyles>) {
    Object.assign(this, init);
  }

  toStyles = () =>
    `${
      this.padding?.map((s: ISpacing) => `${s.spacing}-${s.size}`).join(' ') ||
      ''
    } ${
      this.margin?.map((s: ISpacing) => `${s.spacing}-${s.size}`).join(' ') ||
      ''
    }`.trim();
}

export { SpacingStyles };
