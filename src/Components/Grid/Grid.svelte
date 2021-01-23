<script lang="ts">
  import { getStyles } from '../../utils';
  import { toStyle as templateToStyle } from './Template';
  import type { Template } from './Template';
  import { combine } from './utils';
  import type { IGap, Gap, GapType } from '../../Models/Gap';
  import { toStyle as gapToStyle } from '../../Models/Gap';
  import { Breakpoint } from '../../Models/Breakpoint';
  import type { JustifyContent, JustifyItems } from '../../Models/Justify';
  import type { AlignContent, AlignItems } from '../../Models/Align';
  import type { PlaceContent, PlaceItems } from '../../Models/Place';

  type Flow = 'row' | 'col' | 'row-dense' | 'col-dense';
  type TemplateType = Template | Template[];

  export let css: string = '';
  export let template: TemplateType = undefined;
  export let gap: GapType = undefined;
  export let flow: Flow = undefined;
  export let templateSm: TemplateType = undefined;
  export let gapSm: GapType = undefined;
  export let flowSm: Flow = undefined;
  export let templateMd: TemplateType = undefined;
  export let gapMd: GapType = undefined;
  export let flowMd: Flow = undefined;
  export let templateLg: TemplateType = undefined;
  export let gapLg: GapType = undefined;
  export let flowLg: Flow = undefined;
  export let templateXl: TemplateType = undefined;
  export let gapXl: GapType = undefined;
  export let flowXl: Flow = undefined;
  export let template2xl: TemplateType = undefined;
  export let gap2xl: GapType = undefined;
  export let flow2xl: Flow = undefined;

  export let justifyContent: JustifyContent = undefined;
  export let justifyItems: JustifyItems = undefined;
  export let justifyContentSm: JustifyContent = undefined;
  export let justifyItemsSm: JustifyItems = undefined;
  export let justifyContentMd: JustifyContent = undefined;
  export let justifyItemsMd: JustifyItems = undefined;
  export let justifyContentLg: JustifyContent = undefined;
  export let justifyItemsLg: JustifyItems = undefined;
  export let justifyContentXl: JustifyContent = undefined;
  export let justifyItemsXl: JustifyItems = undefined;
  export let justifyContent2xl: JustifyContent = undefined;
  export let justifyItems2xl: JustifyItems = undefined;

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

  const addBreakpoint = (b: Breakpoint, enumStyle?: any) => {
    return enumStyle && `${b}${enumStyle}`;
  };

  let gridStyles: string = '';

  const getTemplateStyles = (
    styles?: TemplateType,
    breakpoint?: Breakpoint
  ) => {
    if (styles) {
      return combine<Template>(templateToStyle, styles, breakpoint);
    }
    return '';
  };

  const getGapStyles = (styles?: GapType, breakpoint?: Breakpoint) => {
    if (styles) {
      return combine<IGap | Gap>(gapToStyle, styles, breakpoint);
    }
    return '';
  };

  const getFlowStyles = (styles?: Flow, breakpoint?: Breakpoint) => {
    if (styles) {
      const toStyle = (f?: Flow, bp?: Breakpoint) =>
        f ? `${bp || ''}grid-flow-${f}` : '';
      return combine(toStyle, styles, breakpoint);
    }
    return '';
  };

  $: {
    gridStyles = getStyles([
      getTemplateStyles(template),
      getFlowStyles(flow),
      getTemplateStyles(templateSm, Breakpoint.Sm),
      getFlowStyles(flowSm, Breakpoint.Sm),
      getTemplateStyles(templateMd, Breakpoint.Md),
      getFlowStyles(flowMd, Breakpoint.Md),
      getTemplateStyles(templateLg, Breakpoint.Lg),
      getFlowStyles(flowLg, Breakpoint.Lg),
      getTemplateStyles(templateXl, Breakpoint.Xl),
      getFlowStyles(flowXl, Breakpoint.Xl),
      getTemplateStyles(template2xl, Breakpoint.Xxl),
      getFlowStyles(flow2xl, Breakpoint.Xxl),
    ]);

    if (gridStyles) {
      gridStyles += ' grid';
    }
  }
</script>

<div
  class={getStyles([
    gridStyles,
    justifyContent,
    justifyItems,
    alignContent,
    alignItems,
    placeContent,
    placeItems,
    addBreakpoint(Breakpoint.Sm, justifyContentSm),
    addBreakpoint(Breakpoint.Sm, justifyItemsSm),
    addBreakpoint(Breakpoint.Md, justifyContentMd),
    addBreakpoint(Breakpoint.Md, justifyItemsMd),
    addBreakpoint(Breakpoint.Lg, justifyContentLg),
    addBreakpoint(Breakpoint.Lg, justifyItemsLg),
    addBreakpoint(Breakpoint.Xl, justifyContentXl),
    addBreakpoint(Breakpoint.Xl, justifyItemsXl),
    addBreakpoint(Breakpoint.Xxl, justifyContent2xl),
    addBreakpoint(Breakpoint.Xxl, justifyItems2xl),
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
