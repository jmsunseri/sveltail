import { getStyles } from '../utils';
import {
  AlignContent,
  alignContentToStyle,
  AlignItems,
  alignItemsToStyle,
  AlignSelf,
  alignSelfToStyle,
} from './Align';
import type { Breakpoint } from './Breakpoint';
import {
  FlexGrow,
  FlexShrink,
  FlexSize,
  growToStyle,
  shrinkToStyle,
  sizeToStyle,
} from './Flex';
import type { GapType, IGap, Gap } from './Gap';
import { gapToStyle } from './Gap';
import {
  JustifyContent,
  justifyContentToStyle,
  JustifyItems,
  justifyItemsToStyle,
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

type Row = 1 | 2 | 3 | 4 | 5 | 6 | 'none';
type Column = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'none';
type ColumnSpan =
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
  | 'full'
  | 'auto';
type ColumnStartEnd =
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
  | 13
  | 'auto';
type RowSpan = 1 | 2 | 3 | 4 | 5 | 6 | 'full' | 'auto';
type RowStartEnd = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 'auto';
type Flow = 'row' | 'col' | 'row-dense' | 'col-dense';
type Auto = 'auto' | 'min' | 'max' | 'fr';
type StartOrEnd = 'start' | 'end';
type ColOrRow = 'col' | 'row';

interface IGrid {
  rows?: Row;
  cols?: Column;
  flow?: Flow;
  rowAuto?: Auto;
  colAuto?: Auto;
  gap?: GapType;
  justify?: JustifyContent;
  justifyItems?: JustifyItems;
  alignContent?: AlignContent;
  align?: AlignItems;
  placeContent?: PlaceContent;
  placeItems?: PlaceItems;
  order?: Order;
  flexSize?: FlexSize;
  flexShrink?: FlexShrink;
  flexGrow?: FlexGrow;
  colSpan?: ColumnSpan;
  colStart?: ColumnStartEnd;
  colEnd?: ColumnStartEnd;
  rowSpan?: ColumnSpan;
  rowStart?: ColumnStartEnd;
  rowEnd?: ColumnStartEnd;
  justifySelf?: JustifySelf;
  alignSelf?: AlignSelf;
  placeSelf?: PlaceSelf;
}

const spanToStyle = (
  colOrRow: ColOrRow,
  grid?: ColumnSpan,
  bp?: Breakpoint
): string => {
  if (grid) {
    return grid
      ? `${bp || ''}${colOrRow}-${
          Number.isInteger(grid) || grid === 'full' ? `span-${grid}` : grid
        }`
      : '';
  }
  return '';
};

const startEndToStyle = (
  colOrRow: ColOrRow,
  startOrEnd: StartOrEnd,
  grid?: ColumnStartEnd,
  bp?: Breakpoint
): string => {
  if (grid) {
    return grid ? `${bp || ''}${colOrRow}-${startOrEnd}-${grid}` : '';
  }
  return '';
};

const gridToStyle = (props?: IGrid, bp?: Breakpoint) => {
  if (props) {
    return getStyles([
      props.rows || props.cols || props.flow ? `${bp || ''}grid` : '',
      props.rows ? `${bp || ''}grid-rows-${props.rows}` : '',
      props.cols ? `${bp || ''}grid-cols-${props.cols}` : '',
      gapToStyle(props.gap, bp),
      props.flow ? `${bp || ''}grid-flow-${props.flow}` : '',
      props.rowAuto ? `${bp || ''}auto-rows-${props.rowAuto}` : '',
      props.colAuto ? `${bp || ''}auto-cols-${props.colAuto}` : '',
      justifyContentToStyle(props.justify, bp),
      justifyItemsToStyle(props.justifyItems, bp),
      alignContentToStyle(props.alignContent, bp),
      alignItemsToStyle(props.align, bp),
      placeContentToStyle(props.placeContent, bp),
      placeItemsToStyle(props.placeItems, bp),
      orderToStyle(props.order, bp),
      sizeToStyle(props.flexSize, bp),
      shrinkToStyle(props.flexShrink, bp),
      growToStyle(props.flexGrow, bp),
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
  IGrid,
  Row,
  Column,
  ColumnSpan,
  ColumnStartEnd,
  RowSpan,
  RowStartEnd,
  Flow,
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
  StartOrEnd,
  ColOrRow,
};

export { gridToStyle, spanToStyle, startEndToStyle };
