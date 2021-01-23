import type { Breakpoint } from '../../Models/Breakpoint';
type TemplateDirection = 'rows' | 'cols';
type TemplateNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'none';

export interface ITemplate {
  direction: TemplateDirection;
  number: TemplateNumber;
}

export type Template = [TemplateDirection, TemplateNumber];

const toStyle = (t?: Template, b?: Breakpoint) => {
  if (t?.[0] === 'rows' && t?.[1] > 6) {
    throw new Error('rows greater than 6 not allowed in grid template');
  } else if (t) {
    return `${b || ''}grid-${t[0]}-${t[1]}`;
  } else {
    return '';
  }
};

export type { TemplateDirection, TemplateNumber };
export { toStyle };
