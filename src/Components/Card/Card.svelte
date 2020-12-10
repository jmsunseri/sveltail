<script lang="ts">
  export let styles: string[];
  export let containerStyles: string[];
</script>

<div class={styles?.join(' ')}>
  <slot name="header" />
  <div class={containerStyles?.join(' ')}>
    <slot />
  </div>

  <slot name="footer" />
</div>
