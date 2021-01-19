<script lang="ts">
  import { getStyles } from '../../utils';
  import { templateToStyle } from './Template';
  import type { ITemplate } from './Template';
  import { combine } from './utils';
  import type { IBreakpointStyles } from './BreakpointStyles';
  import type { IGap, Gap } from './Gap';

  type Flow = 'row' | 'col' | 'row-dense' | 'col-dense';

  export let template:
    | ITemplate
    | ITemplate[]
    | IBreakpointStyles<ITemplate>
    | IBreakpointStyles<ITemplate>[];
  export let gap:
    | IGap
    | IGap[]
    | Gap
    | IBreakpointStyles<IGap | Gap>
    | IBreakpointStyles<IGap | Gap>[];
  export let flow: Flow | IBreakpointStyles<Flow> | IBreakpointStyles<Flow>[];

  const getTemplateStyles = (
    styles?:
      | ITemplate
      | ITemplate[]
      | IBreakpointStyles<ITemplate>
      | IBreakpointStyles<ITemplate>[]
  ) => {
    const style = combine<ITemplate | IBreakpointStyles<ITemplate>>(
      styles,
      templateToStyle
    );
    return `${!!style && 'grid '}${style}`;
  };

  const getGapStyles = (
    styles?:
      | IGap
      | IGap[]
      | Gap
      | IBreakpointStyles<IGap | Gap>
      | IBreakpointStyles<IGap | Gap>[]
  ) => {
    const toStyle = (gap: IGap | Gap) => {
      if (typeof gap === 'object') {
        return `gap-${gap.direction}-${gap.number}`;
      } else {
        return `gap-${gap}`;
      }
    };

    return combine<IGap | Gap>(styles, toStyle);
  };

  const getFlowStyles = (
    styles?: Flow | IBreakpointStyles<Flow> | IBreakpointStyles<Flow>[]
  ) => {
    const toStyle = (f: Flow) => `grid-flow-${f}`;
    return combine(styles, toStyle);
  };
</script>

<div
  class={getStyles([
    getGapStyles(gap),
    getTemplateStyles(template),
    getFlowStyles(flow),
  ])}
>
  <slot />
</div>
