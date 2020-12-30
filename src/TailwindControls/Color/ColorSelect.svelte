<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { selectStyles } from '../../StyleDefinitions/SveltailStyles';
  import Select from '../../Components/Select/Select.svelte';
  import SelectOption from '../../Components/Select/SelectOption.svelte';
  import Switch from '../../Components/Switch.svelte';
  import ColorMenu from './ColorMenu.svelte';
  import type { ColorStyle } from './ColorStyle';
  export let value: ColorStyle;
  export let prefix: string;
  export let blockGradient: boolean;
  export let blockHover: boolean;

  let from: string;
  let to: string;
  let via: string;
  let isVia: boolean = false;
  let direction: string = 'b';
  let select: Select;

  $: {
    if (value.isGradient && from && direction) {
      if (to && via && isVia) {
        value.color = `${prefix}-gradient-to-${direction} ${from} ${via} ${to}`;
      } else if (to) {
        value.color = `${prefix}-gradient-to-${direction} ${from} ${to}`;
      } else {
        value.color = `${prefix}-gradient-to-${direction} ${from}`;
      }
    }
  }

  onMount(async () => {
    await tick();
    if (value.color?.includes('gradient')) {
      if (value.color?.includes('gradient-to-b')) {
        direction = 'b';
      } else if (value.color?.includes('gradient-to-t')) {
        direction = 't';
      } else if (value.color?.includes('gradient-to-l')) {
        direction = 'l';
      } else if (value.color?.includes('gradient-to-r')) {
        direction = 'r';
      }
    }
    if (value.color?.includes('via')) {
      isVia = true;
    }
  });
</script>

<div class="flex flex-col gap-2">
  {#if !blockGradient || !blockHover}
    <div class="flex flex-row gap-2">
      {#if !blockGradient}
        <Switch bind:checked={value.isGradient} />
        <span>Gradient ?</span>
      {/if}
      {#if !blockHover}
        <Switch bind:checked={value.isHover} />
        <span>Apply On Hover?</span>
      {/if}
    </div>
  {/if}
  {#if value.isGradient}
    Direction:
    <Select bind:this={select} styles={selectStyles} bind:value={direction}>
      <SelectOption {select} value="b">From Top To Bottom</SelectOption>
      <SelectOption {select} value="t">From Bottom To Top</SelectOption>
      <SelectOption {select} value="r">From Left To Right</SelectOption>
      <SelectOption {select} value="l">From Right To Left</SelectOption>
    </Select>
    From:
    <ColorMenu prefix="from" bind:value={from} />
    <div class="flex flex-row gap-2">
      <Switch bind:checked={isVia} />
      <span>Via ?</span>
    </div>
    {#if isVia}
      <ColorMenu prefix="via" bind:value={via} />
    {/if}
    To:
    <ColorMenu prefix="to" bind:value={to} />
  {:else}
    <ColorMenu {prefix} bind:value={value.color} />
  {/if}
</div>
