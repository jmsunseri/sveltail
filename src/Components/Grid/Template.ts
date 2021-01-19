type TemplateDirection = 'rows' | 'cols';
type TemplateNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'none';

export interface ITemplate {
  direction: TemplateDirection;
  number: TemplateNumber;
}

const templateToStyle = (t: ITemplate) => {
  if (t.direction === 'rows' && t.number > 6) {
    throw new Error('rows greater than 6 not allowed in grid template');
  } else {
    return `grid-${t.direction}-${t.number}`;
  }
};

export type { TemplateDirection, TemplateNumber };
export { templateToStyle };
