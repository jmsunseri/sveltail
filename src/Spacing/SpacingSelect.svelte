<script lang="ts">
  import FaBraille from 'svelte-icons/fa/FaBraille.svelte';
  import IconButton from '../Components/Button/IconButton.svelte';
  import MarginSelect from './MarginSelect.svelte';
  import SizeSelect from './SizeSelect.svelte';
  import PaddingSelect from './PaddingSelect.svelte';
  import { slide } from 'svelte/transition';

  let isMenuVisible: boolean = false;
  let isStyleMenuVisible: boolean = false;
  let isWidthMenuVisible: boolean = false;
  let isRadiusMenuVisible: boolean = false;

  const onShowMenuClick = () => {
    isMenuVisible = !isMenuVisible;
  };

  const styles: string[][] = [[], []];

  // export let value: string = [
  //   borderColor,
  //   borderStyle,
  //   borderWidth,
  //   borderRadius,
  // ].join(' ');

  const updateValue = () => {
    value = [borderColor, borderStyle, borderWidth, borderRadius].join(' ');
  };

  const updateColor = (style: string) => {
    borderColor = `border-${style}`;
    updateValue();
  };

  const onStyleSelect = (style: CustomEvent<any>) => {
    borderStyle = style.detail;
    isStyleMenuVisible = false;
    updateValue();
  };

  const onStyleButtonClick = () => {
    isStyleMenuVisible = !isStyleMenuVisible;
  };

  const onWidthSelect = (style: CustomEvent<any>) => {
    borderWidth = style.detail;
    isWidthMenuVisible = false;
    updateValue();
  };

  const onWidthButtonClick = () => {
    isWidthMenuVisible = !isWidthMenuVisible;
  };

  const onRadiusSelect = (style: CustomEvent<any>) => {
    borderRadius = style.detail;
    isRadiusMenuVisible = false;
    updateValue();
  };

  const onRadiusButtonClick = () => {
    isRadiusMenuVisible = !isRadiusMenuVisible;
  };
</script>

<div class="flex flex-col">
  <IconButton
    on:click={onShowMenuClick}
    styles={['h-5', 'w-5', 'border-none', 'fill-current', 'text-blue-900']}>
    <FaBraille />
  </IconButton>

  <div>
    {#if isMenuVisible}
      <div
        transition:slide
        class="flex flex-col absolute p-4 z-10 bg-white border shadow-md rounded-lg gap-1" />
    {/if}
  </div>
</div>
