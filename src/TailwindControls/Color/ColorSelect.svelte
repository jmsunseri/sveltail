<script lang="ts">
  import { Trash } from 'tabler-icons-svelte';
  import { selectStyles, tooltip } from '../../StyleDefinitions/SveltailStyles';
  import Select from '../../Components/Select/Select.svelte';
  import SelectOption from '../../Components/Select/SelectOption.svelte';
  import Switch from '../../Components/Switch.svelte';
  import ColorMenu from './ColorMenu.svelte';
  import type { ColorStyle } from './ColorStyle';
  import IconButton from '../../Components/Button/IconButton.svelte';
  import { Variant } from '../../Variant';
  import RadioButton from '../../Components/RadioButton/RadioButton.svelte';
  import Tooltip from '../../Components/Tooltip/Tooltip.svelte';
  import OpacitySelect from '../Effects/OpacitySelect.svelte';
  import Slider from '../../Components/Slider/Slider.svelte';
  export let value: ColorStyle;
  export let prefix: string;
  export let blockGradient: boolean;
  export let blockOpacity: boolean;
  export let blockFilters: boolean;
  export let variants: Variant[];
  export let onDelete: VoidFunction;

  let isVia: boolean = false;
  let select: Select;
  let backdropFilter: number;

  $: {
    backdropFilter =
      value.backdropBlur && value.backdropBlur.split('-blur-').length
        ? +value.backdropBlur.split('-blur-')[1]
        : 0;
  }

  let radioOptions = [
    { value: undefined, label: 'None' },
    { value: Variant.Hover, label: 'Hover' },
    { value: Variant.Focus, label: 'Focus' },
  ];

  let filterOptions = [
    { value: undefined, label: 'None' },
    { value: 'filter-invert', label: 'Invert' },
    { value: 'filter-sepia', label: 'Sepia' },
    { value: 'filter-grayscale', label: 'Grayscale' },
  ];

  $: {
    radioOptions = radioOptions.filter(
      (x) =>
        variants.includes(x.value) ||
        (!x.value && variants.includes(Variant.None))
    );
  }

  const onBlurChanged = (event: any) => {
    console.log(event);
    value.backdropBlur = `${value.variant || ''}backdrop-blur-${
      event.target.value
    }`;
  };
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
      <Tooltip styles={tooltip}>
        <div slot="tooltip">Delete Color</div>
        <IconButton
          on:click={onDelete}
          styles={[
            'border-none',
            'fill-current',
            'text-blue-300',
            'focus:outline-none',
          ]}
        >
          <Trash />
        </IconButton>
      </Tooltip>
    </div>
  </div>
  {#if !blockOpacity}
    <OpacitySelect
      prefix={`${value.variant || ''}${prefix}`}
      bind:value={value.opacity}
    />
  {/if}
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
      bind:value={value.direction}
    >
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
  {#if !blockFilters}
    <div class="flex flex-row items-center">
      <span>Filters: </span>
      <RadioButton options={filterOptions} bind:value={value.filter} />
    </div>

    <Slider
      min={0}
      max={20}
      value={backdropFilter}
      step={1}
      label="Backdrop Blur:"
      units="px"
      on:input={onBlurChanged}
    />
  {/if}
</div>
