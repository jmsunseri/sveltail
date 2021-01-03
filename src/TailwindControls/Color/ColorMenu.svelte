<script lang="ts">
  import Button from '../../Components/Button/Button.svelte';
  import { primaryButton } from '../../StyleDefinitions/SveltailStyles';

  import { colors, numbers } from './color';
  export let value: string;
  export let prefix: string;
  export let isHover: boolean;

  $: {
    if (isHover && value && !value.includes('hover')) {
      value = `hover:${value}`;
    } else if (!isHover && value?.includes('hover')) {
      value = value.replace('hover:', '');
    }
  }
</script>

<div class="flex flex-row flex-1 gap-1">
  <div class="flex flex-row h-80 w-64 gap-1">
    {#each colors as color}
      {#if color !== 'white' && color !== 'black'}
        <div class="flex flex-col flex-1 gap-1">
          {#each numbers as number}
            <button
              on:click={() => (value = `${isHover ? 'hover:' : ''}${prefix}-${color}-${number}`)}
              class={`btn px-1 focus:outline-none border-none rounded-full bg-${color}-${number} flex-1 flex ${value?.replace('hover:', '') === `${prefix}-${color}-${number}` ? 'ring-4 ring-offset-1  ring-blue-300' : 'border-none'}  `} />
          {/each}
        </div>
      {/if}
    {/each}
  </div>
  <div class="flex flex-col flex-1">
    <div
      class={` grid rounded justify-items-auto ${value?.replace('hover:', '') === `${prefix}-black` ? 'ring-4 ring-blue-300 ring-offset-0' : ''}`}>
      <Button
        on:click={() => (value = `${isHover ? 'hover:' : ''}${prefix}-black`)}
        styles={primaryButton}>
        Black
      </Button>
    </div>
    <div
      class={` grid rounded justify-items-auto ${value?.replace('hover:', '') === `${prefix}-white` ? 'ring-4 ring-blue-300 ring-offset-0' : ''}`}>
      <Button
        on:click={() => (value = `${isHover ? 'hover:' : ''}${prefix}-white`)}
        styles={primaryButton}>
        White
      </Button>
    </div>
    <div
      class={` grid rounded justify-items-auto ${value?.replace('hover:', '') === `${prefix}-transparent` ? 'ring-4 ring-blue-300 ring-offset-0' : ''}`}>
      <Button
        on:click={() => {
          value = `${isHover ? 'hover:' : ''}${prefix}-transparent`;
        }}
        styles={primaryButton}>
        Transparent
      </Button>
    </div>
    <div
      class={` grid rounded justify-items-auto ${value?.replace('hover:', '') === `${prefix}-current` ? 'ring-4 ring-blue-300 ring-offset-0' : ''}`}>
      <Button
        on:click={() => {
          value = `${isHover ? 'hover:' : ''}${prefix}-current`;
        }}
        styles={primaryButton}>
        Current
      </Button>
    </div>
  </div>
</div>
