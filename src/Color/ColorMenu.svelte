<script lang="ts">
  import { colors, numbers } from './color';
  export let updateColor: (style: string) => void;
</script>

<div class="flex flex-row">
  {#each colors as color}
    {#if color !== 'white' && color !== 'black'}
      <div class="flex flex-col flex-grow">
        {#each numbers as number}
          <button
            on:click={() => updateColor(`${color}-${number}`)}
            class={`btn px-1 border-none rounded-sm bg-${color}-${number} flex-grow flex justify-center items-center text-sm text-${+number > 500 ? 'white' : 'black'}`}>
            {number}
          </button>
        {/each}
      </div>
    {/if}
  {/each}
</div>
<button
  on:click={() => updateColor('black')}
  class={`btn border-none rounded-sm bg-black flex-grow flex justify-center items-center text-sm text-white`}>
  Black
</button>
<button
  on:click={() => updateColor('white')}
  class={`btn border rounded-sm bg-white flex-grow flex justify-center items-center text-sm text-black`}>
  White
</button>
