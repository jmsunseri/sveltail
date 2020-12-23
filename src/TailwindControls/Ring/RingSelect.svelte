<script lang="ts">
  import RingWidthSelect from './RingWidthSelect.svelte';
  import { RingStyles } from './RingStyles';
  import RingColorMenu from './RingColorMenu.svelte';
  import OpacitySelect from '../Effects/OpacitySelect.svelte';
  import Switch from '../../Components/Switch.svelte';
  import RingOffsetWidthSelect from './RingOffsetWidthSelect.svelte';

  export let value: RingStyles = new RingStyles();

  let opacity: string = value?.opacity?.substring(5);

  $: {
    value.opacity = `ring-${opacity}`;
  }
</script>

<div class="flex flex-col gap-1">
  <div class="flex flex-row gap-1">
    <Switch bind:checked={value.onFocus} />
    Apply On Focus?
  </div>

  <RingWidthSelect bind:value={value.width} />
  <RingColorMenu prefix="ring" bind:value={value.color} />
  <OpacitySelect bind:value={opacity} />
  <RingOffsetWidthSelect bind:value={value.offsetWidth} />
  <RingColorMenu prefix="ring-offset" bind:value={value.offsetColor} />
</div>
