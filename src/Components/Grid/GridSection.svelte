<script lang="ts">
  import { getStyles } from '../../utils';

  import type { GridSectionStyle } from './GridSectionStyle';

  export let styles: GridSectionStyle[];
</script>

<div class={getStyles(styles)}>
  <slot />
</div>
