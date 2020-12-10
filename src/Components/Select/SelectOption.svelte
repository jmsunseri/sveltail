<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let styles: string[];
  export let value: any;

  const selected = () => {
    dispatch('selected', value);
  };
</script>

<!-- p-2 block text-black hover:bg-grey-light cursor-pointer -->

<li on:click={selected}>
  <p class={styles?.join(' ')}>
    <slot />
  </p>
</li>
