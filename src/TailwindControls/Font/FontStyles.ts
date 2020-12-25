class FontStyles {
  color?: string;
  weight?: string;
  size?: string;
  family?: string;
  italics?: string;

  constructor(init?: Partial<FontStyles>) {
    Object.assign(this, init);
  }

  toStyles = () =>
    [this.color, this.weight, this.size, this.family, this.italics]
      .filter((x) => !!x)
      .join(' ')
      .trim();
}

export { FontStyles };
