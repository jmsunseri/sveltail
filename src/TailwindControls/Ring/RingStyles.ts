class RingStyles {
  color?: string;
  width?: string;
  opacity?: string;
  offsetWidth?: string;
  offsetColor?: string;
  onFocus?: boolean = true;

  constructor(init?: Partial<RingStyles>) {
    Object.assign(this, init);
  }

  addFocus = (style?: string) =>
    this.onFocus && style ? `focus:${style}` : style;

  toStyles = () =>
    `${this.addFocus(this.color) || ''} ${this.addFocus(this.width) || ''} ${
      this.addFocus(this.opacity) || ''
    }  ${this.addFocus(this.offsetColor) || ''}  ${
      this.addFocus(this.offsetWidth) || ''
    }`.trim();
}
export { RingStyles };
