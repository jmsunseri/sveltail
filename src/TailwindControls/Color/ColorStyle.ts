class ColorStyle {
  color?: string;
  isHover?: boolean;

  constructor(init?: Partial<ColorStyle>) {
    Object.assign(this, init);
  }

  toStyles = () =>
    this.isHover && this.color
      ? this.color
          .split(' ')
          .map((x) => (x.includes('gradient') ? x : `hover:${x}`))
          .join(' ')
          .trim()
      : this.color || '';
}

export { ColorStyle };
