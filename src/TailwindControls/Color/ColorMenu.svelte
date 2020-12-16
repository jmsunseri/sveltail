<script lang="ts">
  import { colors, numbers } from './color';
  export let init: string;
  export let value: string;
  export let prefix: string;

  if (init?.length) {
    const options = colors.flatMap((c: string) =>
      numbers.map((n: string) => `${prefix}-${c}-${n}`)
    );
    const found = options.find((s: string) => init.includes(s));
    if (found) {
      value = found;
    }
  }
  console.log('value?', value);
</script>

<div class="flex flex-col">
  <div class="flex flex-row">
    {#each colors as color}
      {#if color !== 'white' && color !== 'black'}
        <div class="flex flex-col flex-grow">
          {#each numbers as number}
            <button
              on:click={() => (value = `${prefix}-${color}-${number}`)}
              class={`btn px-1 border-none rounded-sm bg-${color}-${number} flex-grow flex justify-center items-center text-sm text-${+number > 500 ? 'white' : 'black'}`}>
              {number}
            </button>
          {/each}
        </div>
      {/if}
    {/each}
  </div>

  <button
    on:click={() => (value = `${prefix}-black`)}
    class={`btn border-none rounded-sm bg-black flex-grow flex justify-center items-center text-sm text-white`}>
    Black
  </button>
  <button
    on:click={() => (value = `${prefix}-white`)}
    class={`btn border rounded-sm bg-white flex-grow flex justify-center items-center text-sm text-black`}>
    White
  </button>
</div>
