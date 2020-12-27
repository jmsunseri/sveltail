<script lang="ts">
  import RingWidthSelect from './RingWidthSelect.svelte';
  import { RingStyles } from './RingStyles';
  import OpacitySelect from '../Effects/OpacitySelect.svelte';
  import Switch from '../../Components/Switch.svelte';
  import RingOffsetWidthSelect from './RingOffsetWidthSelect.svelte';
  import ColorsSelects from '../Color/ColorsSelects.svelte';

  export let value: RingStyles = new RingStyles();

  let opacity: string = value?.opacity?.substring(5);

  $: {
    value.opacity = opacity ? `ring-${opacity}` : '';
  }
</script>

<div class="flex flex-col gap-1">
  <div class="flex flex-row gap-1">
    <Switch bind:checked={value.onFocus} />
    Apply On Focus?
  </div>

  <RingWidthSelect bind:value={value.width} />
  <ColorsSelects prefix="ring" bind:value={value.color} blockGradient />
  <OpacitySelect bind:value={opacity} />
  <RingOffsetWidthSelect bind:value={value.offsetWidth} />
  <ColorsSelects
    prefix="ring-offset"
    bind:value={value.offsetColor}
    blockGradient />
</div>
