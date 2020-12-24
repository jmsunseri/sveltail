<script lang="ts">
  import { onMount, tick } from 'svelte';

  import type Select from './Select.svelte';

  let styles: string;
  export let value: any;
  export let select: Select;

  const selected = () => {
    select.onSelected(value);
  };

  onMount(async () => {
    await tick();
    if (select) {
      styles = select.getStyle();
    }
  });
</script>

<div class={styles} on:click={selected}>
  <slot />
</div>
