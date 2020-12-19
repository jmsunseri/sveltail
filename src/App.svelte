<script lang="ts">
  import HeaderStyler from './Components/Styles/HeaderStyler.svelte';
  import IoIosBrowsers from 'svelte-icons/io/IoIosBrowsers.svelte';
  import Viewer from './Viewer.svelte';
  import ButtonStyler from './Components/Styles/ButtonStyler.svelte';
  import {
    primaryButtonStyles,
    secondaryButtonStyles,
    headerStyles,
  } from './store';
  import StyleMenuButton from './StyleMenuButton.svelte';
  import type { header } from './DefaultStyles';

  enum VisibleComponent {
    menu,
    header,
    btn,
    altBtn,
  }

  let visible: VisibleComponent = VisibleComponent.menu;

  const change = (v: VisibleComponent) => {
    visible = v;
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

<main class="flex flex-col items-center m-0 h-screen text-gray-500 font-thin">
  <div
    class="text-3xl w-full h-16 px-4 bg-gray-100 border-b-2 border-dashed shadow py-2 flex items-center">
    SvelTail
  </div>
  <div class="max-w-screen-xl flex flex-row gap-1 w-full h-screen pb-16">
    <div class="flex flex-col w-96 overflow-auto">
      {#if visible === VisibleComponent.menu}
        <div class="flex flex-wrap">
          <StyleMenuButton
            text="Header"
            on:click={() => change(VisibleComponent.header)}>
            <IoIosBrowsers />
          </StyleMenuButton>
          <StyleMenuButton
            text="Button"
            on:click={() => change(VisibleComponent.btn)}>
            <IoIosBrowsers />
          </StyleMenuButton>
          <StyleMenuButton
            text="Alt Button"
            on:click={() => change(VisibleComponent.altBtn)}>
            <IoIosBrowsers />
          </StyleMenuButton>
          <StyleMenuButton
            text="List"
            on:click={() => change(VisibleComponent.header)}>
            <IoIosBrowsers />
          </StyleMenuButton>
          <StyleMenuButton
            text="Card"
            on:click={() => change(VisibleComponent.header)}>
            <IoIosBrowsers />
          </StyleMenuButton>
          <StyleMenuButton
            text="Text Field"
            on:click={() => change(VisibleComponent.header)}>
            <IoIosBrowsers />
          </StyleMenuButton>
          <StyleMenuButton
            text="Select"
            on:click={() => change(VisibleComponent.header)}>
            <IoIosBrowsers />
          </StyleMenuButton>
        </div>
      {:else if visible === VisibleComponent.header}
        <HeaderStyler
          on:closed={() => change(VisibleComponent.menu)}
          bind:value={$headerStyles} />
      {:else if visible === VisibleComponent.btn}
        <ButtonStyler
          on:closed={() => change(VisibleComponent.menu)}
          bind:value={$primaryButtonStyles} />
      {:else if visible === VisibleComponent.altBtn}
        <ButtonStyler
          on:closed={() => change(VisibleComponent.menu)}
          bind:value={$primaryButtonStyles} />
      {/if}
    </div>
    <Viewer />
  </div>
</main>
