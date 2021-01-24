import type { Breakpoint } from './Breakpoint';
import {
  AlignContent,
  alignContentToStyle,
  AlignItems,
  alignItemsToStyle,
  AlignSelf,
  alignSelfToStyle,
} from './Align';
import type { GapType, IGap, Gap } from './Gap';
import { gapToStyle } from './Gap';
import {
  JustifyContent,
  justifyContentToStyle,
  JustifyItems,
  JustifySelf,
  justifySelfToStyle,
} from './Justify';
import { Order, orderToStyle } from './Order';
import {
  PlaceContent,
  placeContentToStyle,
  PlaceItems,
  placeItemsToStyle,
  PlaceSelf,
  placeSelfToStyle,
} from './Place';
import { getStyles } from '../utils';
import {
  ColumnSpan,
  ColumnStartEnd,
  RowSpan,
  RowStartEnd,
  spanToStyle,
  startEndToStyle,
} from './Grid';

type FlexDirection = 'row' | 'row-reverse' | 'col' | 'col-reverse';

type FlexWrap = 'wrap' | 'wrap-reverse' | 'no-wrap';

type FlexSize = 'initial' | '1' | 'auto' | 'none';

type FlexGrow = 'grow' | 'grow-0';

type FlexShrink = 'shrink' | 'shrink-0';

const toStyle = (flex?: any, bp?: Breakpoint): string => {
  if (flex) {
    return flex ? `${bp || ''}flex-${flex}` : '';
  }
  return '';
};

const directionToStyle = (flex?: FlexDirection, bp?: Breakpoint): string => {
  return toStyle(flex, bp);
};

const sizeToStyle = (flex?: FlexSize, bp?: Breakpoint): string => {
  return toStyle(flex, bp);
};

const wrapToStyle = (flex?: FlexWrap, bp?: Breakpoint): string => {
  return toStyle(flex, bp);
};

const growToStyle = (flex?: FlexGrow, bp?: Breakpoint): string => {
  return toStyle(flex, bp);
};

const shrinkToStyle = (flex?: FlexShrink, bp?: Breakpoint): string => {
  return toStyle(flex, bp);
};

interface IFlexLayout {
  dir?: FlexDirection;
  grow?: FlexGrow;
  wrap?: FlexWrap;
  size?: FlexSize;
  shrink?: FlexShrink;
  gap?: GapType;
  justify?: JustifyContent;
  alignContent?: AlignContent;
  align?: AlignItems;
  placeContent?: PlaceContent;
  placeItems?: PlaceItems;
  order?: Order;
  colSpan?: ColumnSpan;
  colStart?: ColumnStartEnd;
  colEnd?: ColumnStartEnd;
  rowSpan?: RowSpan;
  rowStart?: RowStartEnd;
  rowEnd?: RowStartEnd;
  justifySelf?: JustifySelf;
  alignSelf?: AlignSelf;
  placeSelf?: PlaceSelf;
}

const flexToStyle = (props?: IFlexLayout, bp?: Breakpoint) => {
  if (props) {
    return getStyles([
      props.dir || props.wrap ? `${bp || ''}flex` : '',
      directionToStyle(props.dir, bp),
      sizeToStyle(props.size, bp),
      wrapToStyle(props.wrap, bp),
      growToStyle(props.grow, bp),
      shrinkToStyle(props.shrink, bp),
      gapToStyle(props.gap, bp),
      justifyContentToStyle(props.justify, bp),
      alignContentToStyle(props.alignContent, bp),
      alignItemsToStyle(props.align, bp),
      placeContentToStyle(props.placeContent, bp),
      placeItemsToStyle(props.placeItems, bp),
      orderToStyle(props.order, bp),
      spanToStyle('col', props.colSpan, bp),
      startEndToStyle('col', 'start', props.colStart, bp),
      startEndToStyle('col', 'end', props.colEnd),
      spanToStyle('row', props.rowSpan, bp),
      startEndToStyle('row', 'start', props.rowStart, bp),
      startEndToStyle('row', 'end', props.rowEnd),
      justifySelfToStyle(props.justifySelf, bp),
      placeSelfToStyle(props.placeSelf, bp),
      alignSelfToStyle(props.alignSelf, bp),
    ]);
  }
  return '';
};

export type {
  IFlexLayout,
  FlexDirection,
  FlexGrow,
  FlexWrap,
  FlexSize,
  FlexShrink,
  GapType,
  IGap,
  Gap,
  Order,
  JustifyContent,
  JustifyItems,
  AlignContent,
  AlignItems,
  PlaceContent,
  PlaceItems,
};
export {
  directionToStyle,
  sizeToStyle,
  wrapToStyle,
  growToStyle,
  shrinkToStyle,
  flexToStyle,
};
