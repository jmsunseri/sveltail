<script lang="ts">
  import IoIosClose from 'svelte-icons/io/IoIosClose.svelte';
  import IconButton from '../Button/IconButton.svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  export let header: string;

  const closeButtonClicked = () => {
    dispatch('closed');
  };
</script>

<div class="flex flex-col gap-1">
  <div
    class="text-2xl text-color flex flex-row justify-between items-center pl-3 pt-3">
    <h2>{header}</h2>

    <IconButton
      styles={['h-8', 'w-8', 'border-none']}
      on:click={closeButtonClicked}>
      <IoIosClose />
    </IconButton>
  </div>
  <slot />
</div>
