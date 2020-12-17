<script lang="ts">
  export let styles: string[];
  export let containerStyles: string[];
</script>

<div class={styles?.join(' ')}>
  {#if $$slots.header}
    <slot name="header" />
  {/if}

  <div class={containerStyles?.join(' ')}>
    <slot />
  </div>

  {#if $$slots.footer}
    <slot name="footer" />
  {/if}
</div>
