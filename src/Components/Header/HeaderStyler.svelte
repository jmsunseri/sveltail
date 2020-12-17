<script lang="ts">
  import { HeaderStyle } from './HeaderStyle';
  import FaChevronDown from 'svelte-icons/fa/FaChevronDown.svelte';
  import IoIosClose from 'svelte-icons/io/IoIosClose.svelte';
  import ColorMenu from '../../TailwindControls/Color/ColorMenu.svelte';
  import BorderStyleSelect from '../../TailwindControls/Border/BorderStyleSelect.svelte';
  import BorderWidthSelect from '../../TailwindControls/Border/BorderWidth/BorderWidthSelect.svelte';
  import BorderRadiusSelect from '../../TailwindControls/Border/BorderRadius/BorderRadiusSelect.svelte';
  import BoxShadowSelect from '../../TailwindControls/Effects/BoxShadowSelect.svelte';
  import FontSizeSelect from '../../TailwindControls/Font/FontSizeSelect.svelte';
  import FontWeightSelect from '../../TailwindControls/Font/FontWeightSelect.svelte';
  import Card from '../Card/Card.svelte';
  import IconButton from '../Button/IconButton.svelte';
  import { createEventDispatcher } from 'svelte';
  import { slide } from 'svelte/transition';

  const dispatch = createEventDispatcher();

  export let init: HeaderStyle;
  export let value: HeaderStyle = init || new HeaderStyle();
  export let cardStyles: string[];
  export let cardContainerStyles: string[];

  const closeButtonClicked = () => {
    dispatch('closed');
  };

  let isShowBackground = false;
</script>

<div class="flex flex-col gap-1">
  <div
    class="text-2xl text-color flex flex-row justify-between items-center pl-3 pt-3">
    <h2>Header Styles</h2>

    <IconButton
      styles={['h-8', 'w-8', 'border-none']}
      on:click={closeButtonClicked}>
      <IoIosClose />
    </IconButton>
  </div>

  <Card containerStyles={cardContainerStyles} styles={cardStyles}>
    <!-- <div class="flex flex-row justify-between items center" >
      Background
      <IconButton
      styles={['h-8', 'w-8', 'border-none']}
      on:click={closeButtonClicked}>
      <IoIosClose />
    </IconButton>
    </div> -->
    <button
      class="border-none"
      on:click={() => (isShowBackground = !isShowBackground)}>
      <span class="flex justify-between items-center gap-4">
        Background
        <div class="h-4 w-4">
          <FaChevronDown />
        </div>
      </span>
    </button>
    {#if isShowBackground}
      <div transition:slide>
        <ColorMenu prefix="bg" bind:value={value.color} />
      </div>
    {/if}
  </Card>

  <Card containerStyles={cardContainerStyles} styles={cardStyles}>
    Border Styles
    <BorderStyleSelect bind:value={value.border.style} />
    <BorderWidthSelect bind:value={value.border.width} />
    <BorderRadiusSelect bind:value={value.border.radius} />
    <ColorMenu bind:value={value.border.color} prefix="border" />
  </Card>
  <Card containerStyles={cardContainerStyles} styles={cardStyles}>
    Font
    <FontSizeSelect bind:value={value.font.size} />
    <FontWeightSelect bind:value={value.font.weight} />
    <ColorMenu bind:value={value.font.color} prefix="text" />
  </Card>
  <Card containerStyles={cardContainerStyles} styles={cardStyles}>
    Effects
    <BoxShadowSelect bind:value={value.effects.boxShadow} />
  </Card>
</div>
