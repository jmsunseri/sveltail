import type { Breakpoint } from './Breakpoint';

type PlaceContent =
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'evenly'
  | 'stretch';

type PlaceItems = 'start' | 'end' | 'center' | 'auto' | 'stretch';
type PlaceSelf = 'start' | 'end' | 'center' | 'stretch' | 'auto';

const placeContentToStyle = (place?: PlaceContent, bp?: Breakpoint): string => {
  if (place) {
    return place ? `${bp || ''}place-content-${place}` : '';
  }
  return '';
};

const placeItemsToStyle = (place?: PlaceItems, bp?: Breakpoint): string => {
  if (place) {
    return place ? `${bp || ''}place-items-${place}` : '';
  }
  return '';
};

const placeSelfToStyle = (place?: PlaceSelf, bp?: Breakpoint): string => {
  if (place) {
    return place ? `${bp || ''}place-self-${place}` : '';
  }
  return '';
};

export type { PlaceContent, PlaceItems, PlaceSelf };
export { placeContentToStyle, placeItemsToStyle, placeSelfToStyle };
