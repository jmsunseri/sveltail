<script lang="ts">
  import HeaderStyler from './Components/Header/HeaderStyler.svelte';
  import IoIosBrowsers from 'svelte-icons/io/IoIosBrowsers.svelte';
  import Card from './Components/Card/Card.svelte';
  import Viewer from './Viewer.svelte';
  import ButtonStyler from './Components/Button/ButtonStyler.svelte';
  import {
    primaryButtonStyles,
    secondaryButtonStyles,
    headerStyles,
  } from './store';
  import IconButton from './Components/Button/IconButton.svelte';
  import StyleMenuButton from './StyleMenuButton.svelte';

  let cardStyles = [
    'p-4',
    'm-2',
    'rounded-lg',
    'shadow-md',
    'border-2',
    'border-grey-100',
    'flex',
  ];
  let cardContainerStyles = ['flex', 'flex-grow', 'flex-col', 'gap-4'];

  let isHeaderStylerVisible: boolean = false;
  let isMenuVisible: boolean = true;

  const closeHeaderStyler = () => {
    isHeaderStylerVisible = false;
    isMenuVisible = true;
  };

  const openHeaderStyler = () => {
    isHeaderStylerVisible = true;
    isMenuVisible = false;
  };
</script>

<!--  -->
<style global lang="postcss">
  /* only apply purgecss on utilities, per Tailwind docs */
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */

  @tailwind utilities;
</style>

<main class="flex flex-col items-center m-0 h-screen overflow-hidden">
  <div
    class="bg-red-400 text-white text-3xl font-thin shadow-md w-full h-16 px-4 py-2 flex items-center">
    SvelTail
  </div>
  <div class="max-w-screen-xl flex flex-row gap-1 w-full h-screen pb-16">
    <div class="flex flex-col w-96 overflow-auto">
      {#if isMenuVisible}
        <div class="flex flex-wrap">
          <StyleMenuButton text="Header" on:click={openHeaderStyler}>
            <IoIosBrowsers />
          </StyleMenuButton>
          <StyleMenuButton text="Button" on:click={openHeaderStyler}>
            <IoIosBrowsers />
          </StyleMenuButton>
          <StyleMenuButton text="2nd Button" on:click={openHeaderStyler}>
            <IoIosBrowsers />
          </StyleMenuButton>
          <StyleMenuButton text="List" on:click={openHeaderStyler}>
            <IoIosBrowsers />
          </StyleMenuButton>
          <StyleMenuButton text="Card" on:click={openHeaderStyler}>
            <IoIosBrowsers />
          </StyleMenuButton>
          <StyleMenuButton text="Text Field" on:click={openHeaderStyler}>
            <IoIosBrowsers />
          </StyleMenuButton>
          <StyleMenuButton text="Select" on:click={openHeaderStyler}>
            <IoIosBrowsers />
          </StyleMenuButton>
        </div>
      {/if}
      {#if isHeaderStylerVisible}
        <HeaderStyler
          on:closed={closeHeaderStyler}
          bind:value={$headerStyles}
          {cardStyles}
          {cardContainerStyles} />
      {/if}
    </div>

    <!-- Primary Button:
      <ButtonStyler bind:value={$primaryButtonStyles} />
      Secondary Button:
      <ButtonStyler bind:value={$secondaryButtonStyles} /> -->
    <!-- </Card> -->
    <Viewer />
  </div>
</main>
