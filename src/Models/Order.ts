import type { Breakpoint } from './Breakpoint';

export type Order =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 'first'
  | 'last';

export const orderToStyle = (order?: Order, bp?: Breakpoint): string => {
  if (order) {
    return order ? `${bp || ''}order-${order}` : '';
  }
  return '';
};
