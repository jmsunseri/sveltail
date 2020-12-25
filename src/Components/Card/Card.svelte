<script lang="ts">
  import { CardStyles } from './CardStyles';

  export let styles: CardStyles = new CardStyles();
</script>

<div class={styles.toStyles()}>
  {#if $$slots.header}
    <div class={styles.header.toStyles()}>
      <slot name="header" />
    </div>
  {/if}

  <div class={styles.container.toStyles()}>
    <slot />
  </div>

  {#if $$slots.footer}
    <div class={styles.footer.toStyles()}>
      <slot name="footer" />
    </div>
  {/if}
</div>
