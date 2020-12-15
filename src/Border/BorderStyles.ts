class BorderStyles {
  color: string;
  style: string;
  width: string;
  radius: string;
  opacity: string;

  /**
   *
   */
  constructor(init?: Partial<BorderStyles>) {
    Object.assign(this, init);
  }

  toStyles = () =>
    `${this.color || ''} ${this.style || ''} ${this.width || ''} ${
      this.radius || ''
    } ${this.opacity || ''}`.trim();
}

export { BorderStyles };
