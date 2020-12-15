<script lang="ts">
  import type { HeaderStyle } from '../Header/HeaderStyle';

  export let styles: HeaderStyle;
</script>

<div class={styles.toStyles()}>
  <slot />
</div>
