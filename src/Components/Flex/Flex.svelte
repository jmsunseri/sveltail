<script lang="ts">
  import { getStyles } from '../../utils';
  import { combine } from './utils';
  import type { IGap, Gap, GapType } from '../../Models/Gap';
  import { toStyle as gapToStyle } from '../../Models/Gap';
  import { Breakpoint } from '../../Models/Breakpoint';
  import type { JustifyContent } from '../../Models/Justify';
  import type { AlignContent, AlignItems } from '../../Models/Align';
  import type { PlaceContent, PlaceItems } from '../../Models/Place';
  import type {
    FlexSize,
    FlexDirection,
    FlexGrow,
    FlexShrink,
    FlexWrap,
  } from '../../Models/Flex';
  import type { Order } from '../../Models/Order';

  export let css = '';
  export let gap: GapType = undefined;
  export let gapSm: GapType = undefined;
  export let gapMd: GapType = undefined;
  export let gapLg: GapType = undefined;
  export let gapXl: GapType = undefined;
  export let gap2xl: GapType = undefined;

  export let justifyContent: JustifyContent = undefined;
  export let justifyContentSm: JustifyContent = undefined;
  export let justifyContentMd: JustifyContent = undefined;
  export let justifyContentLg: JustifyContent = undefined;
  export let justifyContentXl: JustifyContent = undefined;
  export let justifyContent2xl: JustifyContent = undefined;

  export let order: Order = undefined;
  export let orderSm: Order = undefined;
  export let orderMd: Order = undefined;
  export let orderLg: Order = undefined;
  export let orderXl: Order = undefined;
  export let order2xl: Order = undefined;

  export let alignContent: AlignContent = undefined;
  export let alignItems: AlignItems = undefined;
  export let alignContentSm: AlignContent = undefined;
  export let alignItemsSm: AlignItems = undefined;
  export let alignContentMd: AlignContent = undefined;
  export let alignItemsMd: AlignItems = undefined;
  export let alignContentLg: AlignContent = undefined;
  export let alignItemsLg: AlignItems = undefined;
  export let alignContentXl: AlignContent = undefined;
  export let alignItemsXl: AlignItems = undefined;
  export let alignContent2xl: AlignContent = undefined;
  export let alignItems2xl: AlignItems = undefined;

  export let placeContent: PlaceContent = undefined;
  export let placeItems: PlaceItems = undefined;
  export let placeContentSm: PlaceContent = undefined;
  export let placeItemsSm: PlaceItems = undefined;
  export let placeContentMd: PlaceContent = undefined;
  export let placeItemsMd: PlaceItems = undefined;
  export let placeContentLg: PlaceContent = undefined;
  export let placeItemsLg: PlaceItems = undefined;
  export let placeContentXl: PlaceContent = undefined;
  export let placeItemsXl: PlaceItems = undefined;
  export let placeContent2xl: PlaceContent = undefined;
  export let placeItems2xl: PlaceItems = undefined;

  export let direction: FlexDirection = undefined;
  export let wrap: FlexWrap = undefined;
  export let flex: FlexSize = undefined;
  export let grow: FlexGrow = undefined;
  export let shrink: FlexShrink = undefined;
  export let directionMd: FlexDirection = undefined;
  export let wrapMd: FlexWrap = undefined;
  export let flexMd: FlexSize = undefined;
  export let growMd: FlexGrow = undefined;
  export let shrinkMd: FlexShrink = undefined;
  export let directionSm: FlexDirection = undefined;
  export let wrapSm: FlexWrap = undefined;
  export let flexSm: FlexSize = undefined;
  export let growSm: FlexGrow = undefined;
  export let shrinkSm: FlexShrink = undefined;
  export let directionLg: FlexDirection = undefined;
  export let wrapLg: FlexWrap = undefined;
  export let flexLg: FlexSize = undefined;
  export let growLg: FlexGrow = undefined;
  export let shrinkLg: FlexShrink = undefined;
  export let directionXl: FlexDirection = undefined;
  export let wrapXl: FlexWrap = undefined;
  export let flexXl: FlexSize = undefined;
  export let growXl: FlexGrow = undefined;
  export let shrinkXl: FlexShrink = undefined;
  export let direction2xl: FlexDirection = undefined;
  export let wrap2xl: FlexWrap = undefined;
  export let flex2xl: FlexSize = undefined;
  export let grow2xl: FlexGrow = undefined;
  export let shrink2xl: FlexShrink = undefined;

  const addBreakpoint = (b: Breakpoint, enumStyle?: any) => {
    return enumStyle && `${b}${enumStyle}`;
  };

  let gridStyles: string = '';

  const getGapStyles = (styles?: GapType, breakpoint?: Breakpoint) => {
    if (styles) {
      return combine<IGap | Gap>(gapToStyle, styles, breakpoint);
    }
    return '';
  };

  $: {
    gridStyles = getStyles([
      direction,
      addBreakpoint(Breakpoint.Sm, directionSm),
      addBreakpoint(Breakpoint.Md, directionMd),
      addBreakpoint(Breakpoint.Lg, directionLg),
      addBreakpoint(Breakpoint.Xl, directionXl),
      addBreakpoint(Breakpoint.Xxl, direction2xl),
    ]);

    if (gridStyles) {
      gridStyles += ' flex';
    }
  }
</script>

<div
  class={getStyles([
    gridStyles,
    justifyContent,
    alignContent,
    alignItems,
    placeContent,
    placeItems,
    direction,
    wrap,
    flex,
    grow,
    shrink,
    order,
    addBreakpoint(Breakpoint.Sm, justifyContentSm),
    addBreakpoint(Breakpoint.Md, justifyContentMd),
    addBreakpoint(Breakpoint.Lg, justifyContentLg),
    addBreakpoint(Breakpoint.Xl, justifyContentXl),
    addBreakpoint(Breakpoint.Xxl, justifyContent2xl),
    addBreakpoint(Breakpoint.Sm, alignContentSm),
    addBreakpoint(Breakpoint.Sm, alignItemsSm),
    addBreakpoint(Breakpoint.Md, alignContentMd),
    addBreakpoint(Breakpoint.Md, alignItemsMd),
    addBreakpoint(Breakpoint.Lg, alignContentLg),
    addBreakpoint(Breakpoint.Lg, alignItemsLg),
    addBreakpoint(Breakpoint.Xl, alignContentXl),
    addBreakpoint(Breakpoint.Xl, alignItemsXl),
    addBreakpoint(Breakpoint.Xxl, alignContent2xl),
    addBreakpoint(Breakpoint.Xxl, placeItems2xl),
    addBreakpoint(Breakpoint.Sm, placeContentSm),
    addBreakpoint(Breakpoint.Sm, placeItemsSm),
    addBreakpoint(Breakpoint.Md, placeContentMd),
    addBreakpoint(Breakpoint.Md, placeItemsMd),
    addBreakpoint(Breakpoint.Lg, placeContentLg),
    addBreakpoint(Breakpoint.Lg, placeItemsLg),
    addBreakpoint(Breakpoint.Xl, placeContentXl),
    addBreakpoint(Breakpoint.Xl, placeItemsXl),
    addBreakpoint(Breakpoint.Xxl, placeContent2xl),
    addBreakpoint(Breakpoint.Xxl, placeItems2xl),
    addBreakpoint(Breakpoint.Sm, wrapSm),
    addBreakpoint(Breakpoint.Md, wrapMd),
    addBreakpoint(Breakpoint.Lg, wrapLg),
    addBreakpoint(Breakpoint.Xl, wrapXl),
    addBreakpoint(Breakpoint.Xxl, wrap2xl),
    addBreakpoint(Breakpoint.Sm, flexSm),
    addBreakpoint(Breakpoint.Md, flexMd),
    addBreakpoint(Breakpoint.Lg, flexLg),
    addBreakpoint(Breakpoint.Xl, flexXl),
    addBreakpoint(Breakpoint.Xxl, flex2xl),
    addBreakpoint(Breakpoint.Sm, growSm),
    addBreakpoint(Breakpoint.Md, growMd),
    addBreakpoint(Breakpoint.Lg, growLg),
    addBreakpoint(Breakpoint.Xl, growXl),
    addBreakpoint(Breakpoint.Xxl, grow2xl),
    addBreakpoint(Breakpoint.Sm, shrinkSm),
    addBreakpoint(Breakpoint.Md, shrinkMd),
    addBreakpoint(Breakpoint.Lg, shrinkLg),
    addBreakpoint(Breakpoint.Xl, shrinkXl),
    addBreakpoint(Breakpoint.Xxl, shrink2xl),
    addBreakpoint(Breakpoint.Sm, orderSm),
    addBreakpoint(Breakpoint.Md, orderMd),
    addBreakpoint(Breakpoint.Lg, orderLg),
    addBreakpoint(Breakpoint.Xl, orderXl),
    addBreakpoint(Breakpoint.Xxl, order2xl),
    getGapStyles(gap),
    getGapStyles(gapSm, Breakpoint.Sm),
    getGapStyles(gapMd, Breakpoint.Md),
    getGapStyles(gapLg, Breakpoint.Lg),
    getGapStyles(gapXl, Breakpoint.Xl),
    getGapStyles(gap2xl, Breakpoint.Xxl),
    css,
  ])}
>
  <slot />
</div>
