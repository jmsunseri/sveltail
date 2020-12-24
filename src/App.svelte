<script lang="ts">
  import HeaderStyler from './Components/Styles/HeaderStyler.svelte';
  import IoIosBrowsers from 'svelte-icons/io/IoIosBrowsers.svelte';
  import Viewer from './Viewer.svelte';
  import ButtonStyler from './Components/Styles/ButtonStyler.svelte';
  import GlobalStyler from './Components/Styles/GlobalStyler.svelte';
  import {
    primaryButtonStyles,
    secondaryButtonStyles,
    headerStyles,
    viewerStyles,
    textFieldStyles,
    selectStyles,
  } from './store';
  import StyleMenuButton from './StyleMenuButton.svelte';
  import NotImplementedStyler from './Components/Styles/NotImplementedStyler.svelte';
  import { slide } from 'svelte/transition';
  import TextFieldStyler from './Components/Styles/TextFieldStyler.svelte';
  import SelectStyler from './Components/Styles/SelectStyler.svelte';

  enum VisibleComponent {
    menu,
    header,
    btn,
    altBtn,
    notImplemented,
    global,
    text,
    select,
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
  @tailwind forms;
  /* purgecss end ignore */

  @tailwind utilities;
</style>

<main
  class="flex flex-col items-center m-0 h-screen text-gray-500 font-thin overflow-hidden">
  <div
    class="text-3xl w-full h-16 px-4 bg-gray-100 border-b-2 border-dashed shadow py-2 flex items-center">
    <div class="container mx-auto">SvelTail - TailwindCSS Styling Lab</div>
  </div>
  <div class="container mx-auto h-screen pb-14 flex flex-row gap-1 ">
    <div class="flex flex-col w-96 overflow-auto">
      {#if visible === VisibleComponent.menu}
        <div transition:slide class="flex flex-wrap">
          <StyleMenuButton
            text="Global"
            on:click={() => change(VisibleComponent.global)}>
            <IoIosBrowsers />
          </StyleMenuButton>
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
            text="Text Field"
            on:click={() => change(VisibleComponent.text)}>
            <IoIosBrowsers />
          </StyleMenuButton>
          <StyleMenuButton
            text="Select"
            on:click={() => change(VisibleComponent.select)}>
            <IoIosBrowsers />
          </StyleMenuButton>
          <StyleMenuButton
            text="List"
            on:click={() => change(VisibleComponent.notImplemented)}>
            <IoIosBrowsers />
          </StyleMenuButton>
          <StyleMenuButton
            text="Card"
            on:click={() => change(VisibleComponent.notImplemented)}>
            <IoIosBrowsers />
          </StyleMenuButton>
        </div>
      {:else if visible === VisibleComponent.global}
        <GlobalStyler
          on:closed={() => change(VisibleComponent.menu)}
          bind:value={$viewerStyles} />
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
          bind:value={$secondaryButtonStyles} />
      {:else if visible === VisibleComponent.text}
        <TextFieldStyler
          on:closed={() => change(VisibleComponent.menu)}
          bind:value={$textFieldStyles} />
      {:else if visible === VisibleComponent.select}
        <SelectStyler
          on:closed={() => change(VisibleComponent.menu)}
          bind:value={$selectStyles} />
      {:else}
        <NotImplementedStyler on:closed={() => change(VisibleComponent.menu)} />
      {/if}
    </div>
    <Viewer />
  </div>
</main>
