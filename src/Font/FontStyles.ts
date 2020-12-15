class FontStyles {
  color?: string;
  weight?: string;
  size?: string;

  constructor(init?: Partial<FontStyles>) {
    Object.assign(this, init);
  }

  toStyles = () =>
    `${this.color || ''} ${this.weight || ''} ${this.size || ''}`.trim();
}

export { FontStyles };
