<script lang="ts">
  import { getStyles } from '../utils';
  import type {
    Column,
    ColumnSpan,
    ColumnStartEnd,
    Row,
    Flow,
    RowSpan,
    RowStartEnd,
    GapType,
    Order,
    JustifyContent,
    JustifyItems,
    AlignContent,
    AlignItems,
    PlaceContent,
    PlaceItems,
    IGrid,
  } from '../Models/Grid';
  import { gridToStyle } from '../Models/Grid';
  import { Breakpoint } from '../Models/Breakpoint';
  import type { FlexGrow, FlexShrink, FlexSize } from '../Models/Flex';
  import type { JustifySelf } from '../Models/Justify';
  import type { AlignSelf } from '../Models/Align';
  import type { PlaceSelf } from '../Models/Place';

  export let css: string = '';
  export let rows: Row = undefined;
  export let cols: Column = undefined;
  export let colSpan: ColumnSpan = undefined;
  export let colStart: ColumnStartEnd = undefined;
  export let colEnd: ColumnStartEnd = undefined;
  export let rowSpan: RowSpan = undefined;
  export let rowStart: RowStartEnd = undefined;
  export let rowEnd: RowStartEnd = undefined;
  export let flow: Flow = undefined;
  export let gap: GapType = undefined;
  export let justify: JustifyContent = undefined;
  export let justifyItems: JustifyItems = undefined;
  export let alignContent: AlignContent = undefined;
  export let align: AlignItems = undefined;
  export let placeContent: PlaceContent = undefined;
  export let placeItems: PlaceItems = undefined;
  export let flexSize: FlexSize = undefined;
  export let flexGrow: FlexGrow = undefined;
  export let flexShrink: FlexShrink = undefined;
  export let order: Order = undefined;
  export let justifySelf: JustifySelf = undefined;
  export let alignSelf: AlignSelf = undefined;
  export let placeSelf: PlaceSelf = undefined;
  export let sm: IGrid = undefined;
  export let md: IGrid = undefined;
  export let lg: IGrid = undefined;
  export let xl: IGrid = undefined;
  export let xxl: IGrid = undefined;
  export let container: boolean = undefined;

  let classes = '';

  $: {
    classes = getStyles([
      gridToStyle({
        rows,
        cols,
        flow,
        gap,
        justify,
        justifyItems,
        alignContent,
        align,
        placeContent,
        placeItems,
        flexGrow,
        flexShrink,
        flexSize,
        order,
        colSpan,
        colStart,
        colEnd,
        rowStart,
        rowEnd,
        rowSpan,
        justifySelf,
        alignSelf,
        placeSelf,
      }),
      gridToStyle(sm, Breakpoint.Sm),
      gridToStyle(md, Breakpoint.Md),
      gridToStyle(lg, Breakpoint.Lg),
      gridToStyle(xl, Breakpoint.Xl),
      gridToStyle(xxl, Breakpoint.Xxl),
      container ? 'container mx-auto' : '',
      css,
    ]);
  }
</script>

<div class={classes}>
  <slot />
</div>
