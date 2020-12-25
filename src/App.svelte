<script lang="ts">
  import HeaderStyler from './Components/Styles/HeaderStyler.svelte';
  import IoIosBrowsers from 'svelte-icons/io/IoIosBrowsers.svelte';
  import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte';
  import DiGithubAlt from 'svelte-icons/di/DiGithubAlt.svelte';
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
    checkboxStyles,
    tableStyles,
    cardStyles,
  } from './store';
  import StyleMenuButton from './StyleMenuButton.svelte';
  import NotImplementedStyler from './Components/Styles/NotImplementedStyler.svelte';
  import { slide } from 'svelte/transition';
  import TextFieldStyler from './Components/Styles/TextFieldStyler.svelte';
  import SelectStyler from './Components/Styles/SelectStyler.svelte';
  import CheckboxStyler from './Components/Styles/CheckboxStyler.svelte';
  import TableStyler from './Components/Styles/TableStyler.svelte';
  import CardStyler from './Components/Styles/CardStyler.svelte';

  enum VisibleComponent {
    menu,
    header,
    btn,
    altBtn,
    notImplemented,
    global,
    text,
    select,
    checkbox,
    table,
    card,
  }

  let visible: VisibleComponent = VisibleComponent.menu;

  const change = (v: VisibleComponent) => {
    visible = v;
  };

  const cardClosed = () => {
    change(VisibleComponent.menu);
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

<main class="flex flex-col items-center m-0 h-screen text-gray-500">
  <div
    class="md:text-3xl sm:text-2xl w-full px-4 bg-gray-100 border-b-2 border-dashed shadow py-2 flex">
    <div class="container mx-auto flex items-center gap-4">
      <div class="flex-1">SvelTail - TailwindCSS Styling Lab</div>
      <div class="h-9 w-9 hover:text-blue-300">
        <a alt="GitHub" href="https://github.com/jmsunseri/sveltail">
          <DiGithubAlt />
        </a>
      </div>
      <div class="h-7 w-7 hover:text-blue-300">
        <a alt="Twitter" href="https://twitter.com/jmsunseri">
          <FaTwitter />
        </a>
      </div>
    </div>
  </div>
  <div
    class="container mx-auto h-full grid grid-cols-1 lg:grid-cols-3 lg:gap-1">
    <div class="flex flex-col lg:overflow-auto py-2 lg:px-0 px-2">
      {#if visible === VisibleComponent.menu}
        <div transition:slide class="grid gap-2 grid-cols-3">
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
            text="Checkbox"
            on:click={() => change(VisibleComponent.checkbox)}>
            <IoIosBrowsers />
          </StyleMenuButton>
          <StyleMenuButton
            text="Table"
            on:click={() => change(VisibleComponent.table)}>
            <IoIosBrowsers />
          </StyleMenuButton>
          <StyleMenuButton
            text="Card"
            on:click={() => change(VisibleComponent.card)}>
            <IoIosBrowsers />
          </StyleMenuButton>
        </div>
      {:else if visible === VisibleComponent.global}
        <GlobalStyler on:closed={cardClosed} bind:value={$viewerStyles} />
      {:else if visible === VisibleComponent.header}
        <HeaderStyler on:closed={cardClosed} bind:value={$headerStyles} />
      {:else if visible === VisibleComponent.btn}
        <ButtonStyler
          on:closed={cardClosed}
          bind:value={$primaryButtonStyles} />
      {:else if visible === VisibleComponent.altBtn}
        <ButtonStyler
          on:closed={cardClosed}
          bind:value={$secondaryButtonStyles} />
      {:else if visible === VisibleComponent.text}
        <TextFieldStyler on:closed={cardClosed} bind:value={$textFieldStyles} />
      {:else if visible === VisibleComponent.select}
        <SelectStyler on:closed={cardClosed} bind:value={$selectStyles} />
      {:else if visible === VisibleComponent.checkbox}
        <CheckboxStyler on:closed={cardClosed} bind:value={$checkboxStyles} />
      {:else if visible === VisibleComponent.table}
        <TableStyler on:closed={cardClosed} bind:value={$tableStyles} />
      {:else if visible === VisibleComponent.card}
        <CardStyler on:closed={cardClosed} bind:value={$cardStyles} />
      {:else}
        <NotImplementedStyler on:closed={cardClosed} />
      {/if}
    </div>
    <div
      class="col-span-2 lg:border-l-2 border-dashed border-gray-300 pl-2 lg:pt-2 lg:pr-0  pr-2 ">
      <Viewer />
    </div>
  </div>
</main>
