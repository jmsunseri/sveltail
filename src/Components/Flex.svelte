<script lang="ts">
  import { getStyles } from '../utils';
  import type { GapType } from '../Models/Gap';
  import { Breakpoint } from '../Models/Breakpoint';
  import type { JustifyContent, JustifySelf } from '../Models/Justify';
  import type { AlignContent, AlignItems, AlignSelf } from '../Models/Align';
  import type { PlaceContent, PlaceItems, PlaceSelf } from '../Models/Place';
  import type {
    FlexSize,
    FlexDirection,
    FlexGrow,
    FlexShrink,
    FlexWrap,
    IFlexLayout,
    Order,
  } from '../Models/Flex';
  import { flexToStyle } from '../Models/Flex';
  import type {
    ColumnSpan,
    ColumnStartEnd,
    RowSpan,
    RowStartEnd,
  } from '../Models/Grid';

  export let css = '';
  export let gap: GapType = undefined;
  export let justify: JustifyContent = undefined;
  export let alignContent: AlignContent = undefined;
  export let align: AlignItems = undefined;
  export let placeContent: PlaceContent = undefined;
  export let placeItems: PlaceItems = undefined;
  export let dir: FlexDirection = undefined;
  export let wrap: FlexWrap = undefined;
  export let size: FlexSize = undefined;
  export let grow: FlexGrow = undefined;
  export let shrink: FlexShrink = undefined;
  export let order: Order = undefined;
  export let colSpan: ColumnSpan = undefined;
  export let colStart: ColumnStartEnd = undefined;
  export let colEnd: ColumnStartEnd = undefined;
  export let rowSpan: RowSpan = undefined;
  export let rowStart: RowStartEnd = undefined;
  export let rowEnd: RowStartEnd = undefined;
  export let justifySelf: JustifySelf = undefined;
  export let alignSelf: AlignSelf = undefined;
  export let placeSelf: PlaceSelf = undefined;
  export let container: boolean = undefined;

  let classes: string = '';
  export let sm: IFlexLayout = undefined;
  export let md: IFlexLayout = undefined;
  export let lg: IFlexLayout = undefined;
  export let xl: IFlexLayout = undefined;
  export let xxl: IFlexLayout = undefined;

  $: {
    classes = getStyles([
      flexToStyle({
        dir,
        wrap,
        size,
        grow,
        shrink,
        gap,
        justify,
        alignContent,
        align,
        placeContent,
        placeItems,
        order,
        colSpan,
        colStart,
        colEnd,
        rowSpan,
        rowStart,
        rowEnd,
        justifySelf,
        alignSelf,
        placeSelf,
      }),
      flexToStyle(sm, Breakpoint.Sm),
      flexToStyle(md, Breakpoint.Md),
      flexToStyle(lg, Breakpoint.Lg),
      flexToStyle(xl, Breakpoint.Xl),
      flexToStyle(xxl, Breakpoint.Xxl),
      container ? 'container mx-auto' : '',
      css,
    ]);
  }
</script>

<div class={classes}>
  <slot />
</div>
