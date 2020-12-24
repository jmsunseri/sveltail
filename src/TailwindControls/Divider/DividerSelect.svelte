<script lang="ts">
  import DividerWidthSelect from './DividerWidthSelect.svelte';
  import { DividerStyles } from './DividerStyles';
  import DividerColorMenu from './DividerColorMenu.svelte';
  import OpacitySelect from '../Effects/OpacitySelect.svelte';
  import DividerStyleSelect from './DividerStyleSelect.svelte';

  export let value: DividerStyles = new DividerStyles();

  let opacity: string = value?.opacity?.substring(5);

  $: {
    value.opacity = `divide-${opacity}`;
  }
</script>

<div class="flex flex-col gap-1">
  <DividerStyleSelect bind:value={value.style} />
  <DividerWidthSelect bind:value={value.width} />
  <DividerColorMenu prefix="divide" bind:value={value.color} />
  <OpacitySelect bind:value={opacity} />
</div>
