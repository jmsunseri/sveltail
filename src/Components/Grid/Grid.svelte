<script lang="ts">
  import { getStyles } from '../../utils';
  import { toStyle as templateToStyle } from './Template';
  import type { Template } from './Template';
  import { combine } from './utils';
  import type { IGap, Gap } from './Gap';
  import { toStyle as gapToStyle } from './Gap';
  import { Breakpoint } from '../../Breakpoint';

  type Flow = 'row' | 'col' | 'row-dense' | 'col-dense';
  type TemplateType = Template | Template[];
  type GapType = IGap | IGap[] | Gap;

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
      getTemplateStyles(templateSm, Breakpoint.Small),
      getFlowStyles(flowSm, Breakpoint.Small),
      getTemplateStyles(templateMd, Breakpoint.Medium),
      getFlowStyles(flowMd, Breakpoint.Medium),
      getTemplateStyles(templateLg, Breakpoint.Large),
      getFlowStyles(flowLg, Breakpoint.Large),
      getTemplateStyles(templateXl, Breakpoint.ExtraLarge),
      getFlowStyles(flowXl, Breakpoint.ExtraLarge),
      getTemplateStyles(template2xl, Breakpoint.ExtraExtraLarge),
      getFlowStyles(flow2xl, Breakpoint.ExtraExtraLarge),
    ]);

    if (gridStyles) {
      gridStyles += ' grid';
    }
  }
</script>

<div
  class={getStyles([
    gridStyles,
    getGapStyles(gap),
    getGapStyles(gapSm, Breakpoint.Small),
    getGapStyles(gapMd, Breakpoint.Medium),
    getGapStyles(gapLg, Breakpoint.Large),
    getGapStyles(gapXl, Breakpoint.ExtraLarge),
    getGapStyles(gap2xl, Breakpoint.ExtraExtraLarge),
  ])}
>
  <slot />
</div>
