<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { Trash } from 'tabler-icons-svelte';
  import { selectStyles } from '../../StyleDefinitions/SveltailStyles';
  import Select from '../../Components/Select/Select.svelte';
  import SelectOption from '../../Components/Select/SelectOption.svelte';
  import Switch from '../../Components/Switch.svelte';
  import ColorMenu from './ColorMenu.svelte';
  import type { ColorStyle } from './ColorStyle';
  import IconButton from '../../Components/Button/IconButton.svelte';
  export let value: ColorStyle;
  export let prefix: string;
  export let blockGradient: boolean;
  export let blockHover: boolean;
  export let onDelete: VoidFunction;

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
    if (value.isGradient) {
      if (value.color?.includes('gradient-to-b')) {
        direction = 'b';
      } else if (value.color?.includes('gradient-to-t')) {
        direction = 't';
      } else if (value.color?.includes('gradient-to-l')) {
        direction = 'l';
      } else if (value.color?.includes('gradient-to-r')) {
        direction = 'r';
      }
      if (value.color?.includes('via')) {
        isVia = true;
        via = value.color.split(' ').find((x: string) => x.includes('via'));
      }
      from = value.color.split(' ').find((x: string) => x.includes('from'));
      to = value.color.split(' ').filter((x: string) => x.includes('to'))[1];
    }
  });
</script>

<div class="flex flex-col gap-2">
  <div class="flex flex-row gap-2 justify-end justify-between">
    {#if !blockGradient}
      <div class="flex gap-1">
        <Switch bind:checked={value.isGradient} />
        <span>Gradient ?</span>
      </div>
    {/if}
    {#if !blockHover}
      <div class="flex gap-1">
        <Switch bind:checked={value.isHover} />
        <span>Apply On Hover?</span>
      </div>
    {/if}
    <IconButton
      on:click={onDelete}
      styles={['border-none', 'fill-current', 'text-blue-300', 'focus:outline-none']}>
      <Trash />
    </IconButton>
  </div>
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
