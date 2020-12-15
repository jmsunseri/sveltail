class SizingStyles {
  height?: string;
  maxHeight?: string;
  minHeight?: string;
  width?: string;
  maxWidth?: string;
  minWidth?: string;

  constructor(init?: Partial<SizingStyles>) {
    Object.assign(this, init);
  }

  toStyles = () =>
    `${this.height || ''} ${this.maxHeight || ''} ${this.minHeight || ''} ${
      this.width || ''
    } ${this.maxWidth || ''} ${this.minWidth || ''}`.trim();
}

export { SizingStyles };
