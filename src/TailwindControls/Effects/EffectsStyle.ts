class EffectsStyle {
  boxShadow: string;
  opacity: string;

  constructor(init?: Partial<EffectsStyle>) {
    Object.assign(this, init);
  }

  toStyles = () => `${this.boxShadow || ''} ${this.opacity || ''}`.trim();
}

export { EffectsStyle };
