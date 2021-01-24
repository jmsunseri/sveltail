import type { Breakpoint } from './Breakpoint';

type JustifyContent =
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'evenly';

type JustifyItems = 'start' | 'end' | 'center' | 'stretch' | 'auto';

type JustifySelf = 'start' | 'end' | 'center' | 'stretch' | 'auto';

const justifyContentToStyle = (
  justify?: JustifyContent,
  bp?: Breakpoint
): string => {
  if (justify) {
    return justify ? `${bp || ''}justify-${justify}` : '';
  }
  return '';
};

const justifyItemsToStyle = (
  justify?: JustifyItems,
  bp?: Breakpoint
): string => {
  if (justify) {
    return justify ? `${bp || ''}justify-items-${justify}` : '';
  }
  return '';
};

const justifySelfToStyle = (justify?: JustifySelf, bp?: Breakpoint): string => {
  if (justify) {
    return justify ? `${bp || ''}justify-self-${justify}` : '';
  }
  return '';
};

export type { JustifyContent, JustifyItems, JustifySelf };
export { justifyContentToStyle, justifyItemsToStyle, justifySelfToStyle };
