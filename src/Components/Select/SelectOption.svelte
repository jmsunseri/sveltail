<script lang="ts">
  import TiInputChecked from 'svelte-icons/ti/TiInputChecked.svelte';

  export let value: any;
  export let text: string;
  export let styles: string[];
  export let isSelected: boolean;
  export let onSelect: (value: any, text: string) => void;
</script>

<!-- p-2 block text-black hover:bg-grey-light cursor-pointer -->

<li on:click={() => onSelect(value, text)}>
  <p class={styles?.join(' ')}>
    {text}
    {#if isSelected}
      <TiInputChecked />
    {/if}
  </p>
</li>
