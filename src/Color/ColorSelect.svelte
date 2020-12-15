<script lang="ts">
  import { slide } from 'svelte/transition';
  import FaPalette from 'svelte-icons/fa/FaPalette.svelte';
  import IconButton from '../Components/Button/IconButton.svelte';
  import ColorMenu from './ColorMenu.svelte';
  export let init: string;
  export let value: string;
  export let prefix: string;

  let isShowPalette: boolean = false;

  const onShowPalletteClick = () => {
    isShowPalette = !isShowPalette;
  };
</script>

<div class="flex flex-col">
  <IconButton
    on:click={onShowPalletteClick}
    styles={['h-5', 'w-5', 'border-none', 'active:border-none', 'fill-current', 'text-blue-900']}>
    <FaPalette />
  </IconButton>
  <div>
    {#if isShowPalette}
      <div
        transition:slide
        class="flex flex-col h-72 absolute p-4 z-10 bg-white border shadow-md rounded-lg gap-1">
        <ColorMenu {prefix} bind:value {init} />
      </div>
    {/if}
  </div>
</div>
