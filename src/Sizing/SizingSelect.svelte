<script lang="ts">
  import FaExpandArrowsAlt from 'svelte-icons/fa/FaExpandArrowsAlt.svelte';
  import { SizingStyles } from './SizingStyles';
  import IconButton from '../Components/Button/IconButton.svelte';
  import HeightSelect from './HeightSelect.svelte';
  import WidthSelect from './WidthSelect.svelte';
  import MinHeightSelect from './MinHeightSelect.svelte';
  import MinWidthSelect from './MinWidthSelect.svelte';
  import MaxHeightSelect from './MaxHeightSelect.svelte';
  import MaxWidthSelect from './MaxWidthSelect.svelte';
  import { slide } from 'svelte/transition';

  let isMenuVisible: boolean = false;

  const onShowMenuClick = () => {
    isMenuVisible = !isMenuVisible;
  };

  export let init: SizingStyles;
  export let value: SizingStyles = init || new SizingStyles();
</script>

<div class="flex flex-col">
  <IconButton
    on:click={onShowMenuClick}
    styles={['h-5', 'w-5', 'border-none', 'fill-current', 'text-blue-900']}>
    <FaExpandArrowsAlt />
  </IconButton>

  <div>
    {#if isMenuVisible}
      <div
        transition:slide
        class="flex flex-col absolute p-4 z-10 bg-white border shadow-md rounded-lg gap-1 w-72">
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
    {/if}
  </div>
</div>
