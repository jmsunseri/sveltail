<script lang="ts">
  import { Trash } from 'tabler-icons-svelte';
  import { selectStyles } from '../../StyleDefinitions/SveltailStyles';
  import Select from '../../Components/Select/Select.svelte';
  import SelectOption from '../../Components/Select/SelectOption.svelte';
  import Switch from '../../Components/Switch.svelte';
  import ColorMenu from './ColorMenu.svelte';
  import type { ColorStyle } from './ColorStyle';
  import IconButton from '../../Components/Button/IconButton.svelte';
  import { Variant } from '../../Variants';
  import RadioButton from '../../Components/RadioButton/RadioButton.svelte';
  export let value: ColorStyle;
  export let prefix: string;
  export let blockGradient: boolean;
  export let variants: Variant[];
  export let onDelete: VoidFunction;

  let isVia: boolean = false;
  let select: Select;

  let radioOptions = [
    { value: undefined, label: 'None' },
    { value: Variant.Hover, label: 'Hover' },
    { value: Variant.Focus, label: 'Focus' },
  ];

  $: {
    radioOptions = radioOptions.filter(
      (x) =>
        variants.includes(x.value) ||
        (!x.value && variants.includes(Variant.None))
    );
  }
</script>

<div class="flex flex-col gap-2">
  <div class="flex flex-row gap-2 justify-end justify-between items-center">
    {#if !blockGradient}
      <div class="flex gap-1 items-center">
        <span>Gradient: </span>
        <Switch bind:checked={value.isGradient} />
      </div>
    {/if}
    <div class="flex-1 flex justify-end">
      <IconButton
        on:click={onDelete}
        styles={['border-none', 'fill-current', 'text-blue-300', 'focus:outline-none']}>
        <Trash />
      </IconButton>
    </div>
  </div>
  {#if radioOptions.length}
    <div class="flex flex-row items-center">
      <span>Variant: </span>
      <RadioButton options={radioOptions} bind:value={value.variant} />
    </div>
  {/if}
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
    <ColorMenu variant={value.variant} prefix="from" bind:value={value.from} />
    <div class="flex flex-row gap-2">
      <Switch bind:checked={isVia} />
      <span>Via ?</span>
    </div>
    {#if isVia}
      <ColorMenu variant={value.variant} prefix="via" bind:value={value.via} />
    {/if}
    To:
    <ColorMenu variant={value.variant} prefix="to" bind:value={value.to} />
  {:else}
    <ColorMenu variant={value.variant} {prefix} bind:value={value.color} />
  {/if}
</div>
