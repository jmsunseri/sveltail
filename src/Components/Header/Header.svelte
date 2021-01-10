<script lang="ts">
  import type { HeaderStyle } from '../Header/HeaderStyle';

  export let styles: HeaderStyle;
</script>

<div class={`${styles.toStyles()} flex items-center gap-2`}>
  {#if $$slots.icon}
    <div class={styles.icon.toStyles()}>
      <slot name="icon" />
    </div>
  {/if}
  {#if $$slots.brand}
    <div class={`flex-1 ${styles.brand.toStyles()}`}>
      <slot name="brand" />
    </div>
  {:else}
    <div class="flex-1" />
  {/if}
  {#if $$slots.menu}
    <div class={styles.menu.toStyles()}>
      <slot name="menu" />
    </div>
  {/if}
</div>
