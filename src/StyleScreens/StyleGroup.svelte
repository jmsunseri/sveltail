<script lang="ts">
  import FaUndo from 'svelte-icons/fa/FaUndo.svelte';
  import type { IStyle } from '../IStyle';
  import IconButton from '../Components/Button/IconButton.svelte';
  import Tooltip from '../Components/Tooltip/Tooltip.svelte';
  import { tooltip } from '../StyleDefinitions/SveltailStyles';
  export let header: string;
  export let style: IStyle;

  const reset = () => {
    style = style.reset();
  };
</script>

<div class="flex flex-col gap-1">
  <div class="text-2xl text-color flex flex-row gap-2 items-center">
    <h2>{header}</h2>
    <Tooltip styles={tooltip}>
      <div slot="tooltip">reset section</div>
      <IconButton
        on:click={reset}
        styles={['h-5', 'w-5', 'border-none', 'fill-current', 'text-blue-300', 'focus:outline-none']}>
        <FaUndo />
      </IconButton>
    </Tooltip>
  </div>
  <slot />
</div>
