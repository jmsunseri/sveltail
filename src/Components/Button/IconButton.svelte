<script lang="ts">
  export let styles: string[];

  const buttonClass = `btn ${!!styles?.length && styles.join(' ')}`;
</script>

<button class={buttonClass} on:click>
  <slot />
</button>
