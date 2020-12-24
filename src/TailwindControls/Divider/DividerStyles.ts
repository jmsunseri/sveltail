class DividerStyles {
  color: string;
  style: string;
  width: string;
  opacity: string;

  /**
   *
   */
  constructor(init?: Partial<DividerStyles>) {
    Object.assign(this, init);
  }

  toStyles = () =>
    [this.color, this.style, this.width, this.opacity].join(' ').trim();
}

export { DividerStyles };
