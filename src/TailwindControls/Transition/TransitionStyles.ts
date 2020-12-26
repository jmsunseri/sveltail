class TransitionStyles {
  transition: string;
  duration: string;
  timing: string;
  delay: string;

  /**
   *
   */
  constructor(init?: Partial<TransitionStyles>) {
    Object.assign(this, init);
  }

  toStyles = () =>
    [this.transition, this.duration, this.timing, this.delay]
      .filter((x) => !!x)
      .join(' ')
      .trim();
}

export { TransitionStyles };
