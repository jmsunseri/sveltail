<script lang="ts">
  import RingWidthSelect from './RingWidthSelect.svelte';
  import { RingStyles } from './RingStyles';
  import Switch from '../../Components/Switch.svelte';
  import RingOffsetWidthSelect from './RingOffsetWidthSelect.svelte';
  import ColorsSelects from '../Color/ColorsSelects.svelte';
  import { Variant } from '../../Variant';

  export let value: RingStyles = new RingStyles();

  let onFocus: boolean = value.variant === Variant.Focus;
  $: {
    if (onFocus) {
      value.variant = Variant.Focus;
    } else {
      value.variant = Variant.None;
    }
  }
</script>

<div class="flex flex-col gap-1">
  <div class="flex flex-row gap-1">
    <Switch bind:checked={onFocus} />
    Apply On Focus?
  </div>
  <RingWidthSelect bind:value={value.width} />
  <ColorsSelects
    prefix="ring"
    bind:value={value.color}
    blockGradient
    blockFilters
    variants={[]}
  />

  <RingOffsetWidthSelect bind:value={value.offsetWidth} />
  <ColorsSelects
    prefix="ring-offset"
    bind:value={value.offsetColor}
    blockGradient
    blockOpacity
    blockFilters
    variants={[]}
  />
</div>
