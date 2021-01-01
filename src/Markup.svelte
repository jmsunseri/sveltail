<script lang="ts">
  import { fade, slide } from 'svelte/transition';
  import FaRegCopy from 'svelte-icons/fa/FaRegCopy.svelte';
  import { selectedStyle } from './store';
  import Tooltip from './Components/Tooltip/Tooltip.svelte';
  import { tooltip } from './StyleDefinitions/SveltailStyles';

  let expanded: boolean = false;
  let copySuccess: boolean = false;

  const copyToClipboard = () => {
    var textArea = document.createElement('textarea');
    textArea.value = $selectedStyle.getMarkup();

    // Avoid scrolling to bottom
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand('copy');
      copySuccess = true;

      setTimeout(() => {
        copySuccess = false;
      }, 2000);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
  };
</script>

<div
  class="border-dashed z-20 border-t-2 bg-gray-100 border-l-2 border-r-2 rounded-t-lg border-gray-300 w-full bg-white flex-col">
  <div class="flex items-center">
    <button
      class="w-full font-mono border-none focus:outline-none my-2 mx-4 flex-1"
      on:click={() => (expanded = !expanded)}>
      <div class="flex">Markup</div>
    </button>
    {#if copySuccess}
      <div class="text-blue-300" transition:fade>Copied To Clipboard</div>
    {/if}

    <Tooltip styles={tooltip}>
      <div slot="tooltip">Copy To Clipboard</div>
      <button
        on:click={copyToClipboard}
        class="font-mono border-none focus:outline-none my-2 mx-4 h-6 w-6 flex-0">
        <FaRegCopy />
      </button>
    </Tooltip>
  </div>

  {#if expanded && !!$selectedStyle.getMarkup}
    <div transition:slide class="flex bg-white">
      <div class="flex-1 p-4">
        <pre
          class="whitespace-pre-wrap break-words">
          {$selectedStyle.getMarkup()}
        </pre>
      </div>
      <!-- <div
        class={`flex-1 hidden md:flex flex-col justify-center items-center ${$pageStyles.toStyles()}`}>
        {@html $selectedStyle.getMarkup()}
      </div> -->
    </div>
  {/if}
</div>
