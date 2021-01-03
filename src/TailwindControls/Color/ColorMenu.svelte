<script lang="ts">
  import Button from '../../Components/Button/Button.svelte';
  import { primaryButton } from '../../StyleDefinitions/SveltailStyles';

  import { colors, numbers } from './color';
  export let value: string;
  export let prefix: string;
</script>

<div class="flex flex-row flex-1 gap-1">
  <div class="flex flex-row h-80 w-64 gap-1">
    {#each colors as color}
      {#if color !== 'white' && color !== 'black'}
        <div class="flex flex-col flex-1 gap-1">
          {#each numbers as number}
            <button
              on:click={() => (value = `${prefix}-${color}-${number}`)}
              class={`btn px-1 focus:outline-none border-none rounded-full bg-${color}-${number} flex-1 flex ${value === `${prefix}-${color}-${number}` ? 'ring-4 ring-offset-1  ring-blue-300' : 'border-none'}  `} />
          {/each}
        </div>
      {/if}
    {/each}
  </div>
  <div class="flex flex-col flex-1">
    <div
      class={` grid rounded justify-items-auto ${value === `${prefix}-black` ? 'ring-4 ring-blue-300 ring-offset-0' : ''}`}>
      <Button
        on:click={() => (value = `${prefix}-black`)}
        styles={primaryButton}>
        Black
      </Button>
    </div>
    <div
      class={` grid rounded justify-items-auto ${value === `${prefix}-white` ? 'ring-4 ring-blue-300 ring-offset-0' : ''}`}>
      <Button
        on:click={() => (value = `${prefix}-white`)}
        styles={primaryButton}>
        White
      </Button>
    </div>
    <div
      class={` grid rounded justify-items-auto ${value === `${prefix}-transparent` ? 'ring-4 ring-blue-300 ring-offset-0' : ''}`}>
      <Button
        on:click={() => {
          value = `${prefix}-transparent`;
        }}
        styles={primaryButton}>
        Transparent
      </Button>
    </div>
    <div
      class={` grid rounded justify-items-auto ${value === `${prefix}-current` ? 'ring-4 ring-blue-300 ring-offset-0' : ''}`}>
      <Button
        on:click={() => {
          value = `${prefix}-current`;
        }}
        styles={primaryButton}>
        Current
      </Button>
    </div>
  </div>
</div>
