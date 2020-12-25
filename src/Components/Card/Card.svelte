<script lang="ts">
  import { CardStyles } from './CardStyles';

  export let styles: CardStyles = new CardStyles();
</script>

<div class={styles.toStyles()}>
  {#if $$slots.header}
    <slot name="header" />
  {/if}

  <div>
    <slot />
  </div>

  {#if $$slots.footer}
    <slot name="footer" />
  {/if}
</div>
