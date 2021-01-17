<script lang="ts">
  import Button from '../../Components/Button/Button.svelte';
  import { primaryButton } from '../../StyleDefinitions/SveltailStyles';
  import { Variant } from '../../Variant';

  import { colors, numbers } from './color';
  export let value: string;
  export let prefix: string;
  export let variant: Variant = Variant.None;

  let valueWithoutVariant: string;

  $: {
    if (variant && value && !value.includes(':')) {
      value = `${variant}${value}`;
    } else if (variant && value?.includes(':')) {
      value = `${variant}${value.substring(value.indexOf(':') + 1)}`;
    } else if (!variant && value?.includes(':')) {
      value = value.substring(value.indexOf(':') + 1);
    }

    valueWithoutVariant = value?.includes(':')
      ? value.substring(value.indexOf(':') + 1)
      : value;
  }
</script>

<div class="flex flex-row flex-1 gap-1">
  <div class="flex flex-row h-80 w-64 gap-1">
    {#each colors as color}
      {#if color !== 'white' && color !== 'black'}
        <div class="flex flex-col flex-1 gap-1">
          {#each numbers as number}
            <button
              on:click={() =>
                (value = `${variant || ''}${prefix}-${color}-${number}`)}
              class={`btn px-1 focus:outline-none border-none rounded-full bg-${color}-${number} flex-1 flex ${
                valueWithoutVariant === `${prefix}-${color}-${number}`
                  ? 'ring-4 ring-offset-1  ring-blue-300'
                  : 'border-none'
              }  `}
            />
          {/each}
        </div>
      {/if}
    {/each}
  </div>
  <div class="flex flex-col flex-1">
    <div
      class={` grid rounded justify-items-auto ${
        valueWithoutVariant === `${prefix}-black`
          ? 'ring-4 ring-blue-300 ring-offset-0'
          : ''
      }`}
    >
      <Button
        on:click={() => (value = `${variant || ''}${prefix}-black`)}
        styles={primaryButton}
      >Black</Button>
    </div>
    <div
      class={` grid rounded justify-items-auto ${
        valueWithoutVariant === `${prefix}-white`
          ? 'ring-4 ring-blue-300 ring-offset-0'
          : ''
      }`}
    >
      <Button
        on:click={() => (value = `${variant || ''}${prefix}-white`)}
        styles={primaryButton}
      >White</Button>
    </div>
    <div
      class={` grid rounded justify-items-auto ${
        valueWithoutVariant === `${prefix}-transparent`
          ? 'ring-4 ring-blue-300 ring-offset-0'
          : ''
      }`}
    >
      <Button
        on:click={() => {
          value = `${variant || ''}${prefix}-transparent`;
        }}
        styles={primaryButton}
      >Transparent</Button>
    </div>
    <div
      class={` grid rounded justify-items-auto ${
        valueWithoutVariant === `${prefix}-current`
          ? 'ring-4 ring-blue-300 ring-offset-0'
          : ''
      }`}
    >
      <Button
        on:click={() => {
          value = `${variant || ''}${prefix}-current`;
        }}
        styles={primaryButton}
      >Current</Button>
    </div>
  </div>
</div>
