import type { Breakpoint } from './Breakpoint';
type AlignContent =
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'evenly';

type AlignItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
type AlignSelf = 'start' | 'end' | 'center' | 'stretch' | 'auto';

const alignContentToStyle = (align?: AlignContent, bp?: Breakpoint): string => {
  if (align) {
    return align ? `${bp || ''}content-${align}` : '';
  }
  return '';
};

const alignItemsToStyle = (align?: AlignItems, bp?: Breakpoint): string => {
  if (align) {
    return align ? `${bp || ''}items-${align}` : '';
  }
  return '';
};

const alignSelfToStyle = (align?: AlignSelf, bp?: Breakpoint): string => {
  if (align) {
    return align ? `${bp || ''}self-${align}` : '';
  }
  return '';
};

export type { AlignContent, AlignItems, AlignSelf };
export { alignContentToStyle, alignItemsToStyle, alignSelfToStyle };
