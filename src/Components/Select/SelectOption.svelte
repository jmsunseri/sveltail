<script lang="ts">
  import type Select from './Select.svelte';

  export let styles: string[];
  export let value: any;
  export let select: Select;

  const selected = () => {
    select.onSelected(value);
  };
</script>

<!-- p-2 block text-black hover:bg-grey-light cursor-pointer -->

<li on:click={selected}>
  <p class={`h-5 ${styles?.join(' ')}`}>
    <slot />
  </p>
</li>
