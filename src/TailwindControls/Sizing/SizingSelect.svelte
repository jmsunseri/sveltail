<script lang="ts">
  import { SizingStyles } from './SizingStyles';
  import HeightSelect from './HeightSelect.svelte';
  import WidthSelect from './WidthSelect.svelte';
  import MinHeightSelect from './MinHeightSelect.svelte';
  import MinWidthSelect from './MinWidthSelect.svelte';
  import MaxHeightSelect from './MaxHeightSelect.svelte';
  import MaxWidthSelect from './MaxWidthSelect.svelte';

  export let init: SizingStyles;
  export let value: SizingStyles = init || new SizingStyles();
</script>

<div class="flex flex-col gap-1">
  <div class="flex gap-2 items-center">
    Height:
    <HeightSelect bind:value={value.height} />
  </div>
  <div class="flex gap-2 items-center">
    Width
    <WidthSelect bind:value={value.width} />
  </div>
  <div class="flex gap-2 items-center">
    Min Height
    <MinHeightSelect bind:value={value.minHeight} />
  </div>
  <div class="flex gap-2 items-center">
    Min Width
    <MinWidthSelect bind:value={value.minWidth} />
  </div>
  <div class="flex gap-2 items-center">
    Max Height
    <MaxHeightSelect bind:value={value.maxHeight} />
  </div>
  <div class="flex gap-2 items-center">
    Max Width
    <MaxWidthSelect bind:value={value.maxWidth} />
  </div>
</div>
