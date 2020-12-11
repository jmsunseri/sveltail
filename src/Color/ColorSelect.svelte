<script lang="ts">
  import FaPalette from 'svelte-icons/fa/FaPalette.svelte';
  import type { dispatch_dev } from 'svelte/internal';
  import IconButton from '../Components/Button/IconButton.svelte';
  import { colors, numbers } from './color';
  export let value: string;
  export let prefix: string;

  let isShowPalette: boolean = false;

  const updateColor = (style: string) => {
    value = `${prefix}-${style}`;
  };

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
        class="flex flex-col h-72 absolute p-4 z-10 bg-white border shadow-md rounded-lg">
        <div class="flex flex-row gap-1 ">
          {#each colors as color}
            {#if color !== 'white' && color !== 'black'}
              <div class="flex flex-col flex-grow">
                {#each numbers as number}
                  <button
                    on:mouseenter={() => updateColor(`${color}-${number}`)}
                    on:click={onShowPalletteClick}
                    class={`btn border-none rounded-md bg-${color}-${number} flex-grow flex justify-center items-center text-sm text-${+number > 500 ? 'white' : 'black'}`}>
                    {number}
                  </button>
                {/each}
              </div>
            {/if}
          {/each}
        </div>
        <button
          on:click={() => updateColor('black')}
          class={`btn border-none rounded-md bg-black flex-grow flex justify-center items-center text-sm text-white`}>
          Black
        </button>
        <button
          on:click={() => updateColor('white')}
          class={`btn border rounded-md bg-white flex-grow flex justify-center items-center text-sm text-black`}>
          White
        </button>
      </div>
    {/if}
  </div>
</div>
