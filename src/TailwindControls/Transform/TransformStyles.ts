class TransformStyles {
  origin: string;
  scale: string;
  rotate: string;
  translate: string;
  skew: string;
  onHover: boolean = false;

  /**
   *
   */
  constructor(init?: Partial<TransformStyles>) {
    Object.assign(this, init);
  }

  toStyles = () => {
    let styles = [
      this.origin,
      this.scale,
      this.rotate,
      this.translate,
      this.skew,
    ]
      .filter((x) => !!x)
      .map((x) => (this.onHover ? `hover:${x}` : x))
      .join(' ')
      .trim();

    if (styles) {
      return `transform-gpu ${styles}`;
    } else {
      return styles;
    }
  };
}

export { TransformStyles };
