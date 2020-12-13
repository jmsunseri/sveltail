<script lang="ts">
  import FaExpandArrowsAlt from 'svelte-icons/fa/FaExpandArrowsAlt.svelte';
  import IconButton from '../Components/Button/IconButton.svelte';
  import HeightSelect from './HeightSelect.svelte';
  import WidthSelect from './WidthSelect.svelte';
  import MinHeightSelect from './MinHeightSelect.svelte';
  import MinWidthSelect from './MinWidthSelect.svelte';
  import MaxHeightSelect from './MaxHeightSelect.svelte';
  import MaxWidthSelect from './MaxWidthSelect.svelte';
  import { slide } from 'svelte/transition';

  let isMenuVisible: boolean = false;
  let isHeightMenuVisible: boolean = false;
  let isWidthMenuVisible: boolean = false;
  let isMaxHeightMenuVisible: boolean = false;
  let isMaxWidthMenuVisible: boolean = false;
  let isMinHeightMenuVisible: boolean = false;
  let isMinWidthMenuVisible: boolean = false;

  const onShowMenuClick = () => {
    isMenuVisible = !isMenuVisible;
  };

  let height: string = '';
  let width: string = '';
  let maxHeight: string = '';
  let minHeight: string = '';
  let maxWidth: string = '';
  let minWidth: string = '';

  export let value: string = [
    height,
    width,
    maxHeight,
    minHeight,
    maxWidth,
    minWidth,
  ].join(' ');

  const updateValue = () => {
    value = [height, width, maxHeight, minHeight, maxWidth, minWidth].join(' ');
  };

  const onHeightSelect = (style: CustomEvent<any>) => {
    height = style.detail;
    isHeightMenuVisible = false;
    updateValue();
  };

  const onWidthSelect = (style: CustomEvent<any>) => {
    width = style.detail;
    isWidthMenuVisible = false;
    updateValue();
  };

  const onHeightButtonClick = () => {
    isHeightMenuVisible = !isHeightMenuVisible;
  };

  const onMaxHeightSelect = (style: CustomEvent<any>) => {
    maxHeight = style.detail;
    isMaxHeightMenuVisible = false;
    updateValue();
  };

  const onMinWidthSelect = (style: CustomEvent<any>) => {
    minWidth = style.detail;
    isMinWidthMenuVisible = false;
    updateValue();
  };

  const onMaxWidthSelect = (style: CustomEvent<any>) => {
    maxWidth = style.detail;
    isMaxWidthMenuVisible = false;
    updateValue();
  };

  const onWidthButtonClick = () => {
    isWidthMenuVisible = !isWidthMenuVisible;
  };

  const onMinHeightSelect = (style: CustomEvent<any>) => {
    minHeight = style.detail;
    isMinHeightMenuVisible = false;
    updateValue();
  };

  const onMaxHeightButtonClick = () => {
    isMaxHeightMenuVisible = !isMaxHeightMenuVisible;
  };

  const onMinHeightButtonClick = () => {
    isMinHeightMenuVisible = !isMinHeightMenuVisible;
  };

  const onMinWidthButtonClick = () => {
    isMinWidthMenuVisible = !isMinWidthMenuVisible;
  };

  const onMaxWidthButtonClick = () => {
    isMaxWidthMenuVisible = !isMaxWidthMenuVisible;
  };
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
        class="flex flex-col absolute p-4 z-10 bg-white border shadow-md rounded-lg gap-1 w-64">
        <div class="flex gap-2">
          Height:
          <HeightSelect
            value={height}
            on:click={onHeightButtonClick}
            on:selected={onHeightSelect}
            isMenuOpen={isHeightMenuVisible} />
        </div>
        <div class="flex gap-2">
          Width
          <WidthSelect
            value={width}
            on:click={onWidthButtonClick}
            on:selected={onWidthSelect}
            isMenuOpen={isWidthMenuVisible} />
        </div>
        <div class="flex gap-2">
          Min Height
          <MinHeightSelect
            value={minHeight}
            on:click={onMinHeightButtonClick}
            on:selected={onMinHeightSelect}
            isMenuOpen={isMinHeightMenuVisible} />
        </div>
        <div class="flex gap-2">
          Min Width
          <MinWidthSelect
            value={minWidth}
            on:click={onMinWidthButtonClick}
            on:selected={onMinWidthSelect}
            isMenuOpen={isMinWidthMenuVisible} />
        </div>
        <div class="flex gap-2">
          Max Height
          <MaxHeightSelect
            value={maxHeight}
            on:click={onMaxHeightButtonClick}
            on:selected={onMaxHeightSelect}
            isMenuOpen={isMaxHeightMenuVisible} />
        </div>
        <div class="flex gap-2">
          Max Width
          <MaxWidthSelect
            value={maxWidth}
            on:click={onMaxWidthButtonClick}
            on:selected={onMaxWidthSelect}
            isMenuOpen={isMaxWidthMenuVisible} />
        </div>
      </div>
    {/if}
  </div>
</div>
