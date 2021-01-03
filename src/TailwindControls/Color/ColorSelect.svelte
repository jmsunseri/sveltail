<script lang="ts">
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

  let isVia: boolean = false;
  let select: Select;
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
    <Select
      bind:this={select}
      styles={selectStyles}
      bind:value={value.direction}>
      <SelectOption {select} value={`${prefix}-gradient-to-b`}>
        From Top To Bottom
      </SelectOption>
      <SelectOption {select} value={`${prefix}-gradient-to-t`}>
        From Bottom To Top
      </SelectOption>
      <SelectOption {select} value={`${prefix}-gradient-to-r`}>
        From Left To Right
      </SelectOption>
      <SelectOption {select} value={`${prefix}-gradient-to-l`}>
        From Right To Left
      </SelectOption>
    </Select>
    From:
    <ColorMenu isHover={value.isHover} prefix="from" bind:value={value.from} />
    <div class="flex flex-row gap-2">
      <Switch bind:checked={isVia} />
      <span>Via ?</span>
    </div>
    {#if isVia}
      <ColorMenu isHover={value.isHover} prefix="via" bind:value={value.via} />
    {/if}
    To:
    <ColorMenu isHover={value.isHover} prefix="to" bind:value={value.to} />
  {:else}
    <ColorMenu isHover={value.isHover} {prefix} bind:value={value.color} />
  {/if}
</div>
