<script lang="ts">
  import { Refresh } from 'tabler-icons-svelte';
  import type { IStyle } from '../IStyle';
  import IconButton from '../Components/Button/IconButton.svelte';
  import Tooltip from '../Components/Tooltip/Tooltip.svelte';
  import { tooltip } from '../StyleDefinitions/SveltailStyles';
  import { selectedStyle } from '../store';
  export let header: string;
  export let style: IStyle;
  export let dontSelectSelectedStyle: boolean = false;

  const reset = () => {
    style = style.reset();
  };

  $: {
    if (!dontSelectSelectedStyle) {
      $selectedStyle = style;
    }
  }
</script>

<div class="flex flex-col gap-1">
  <div class="text-2xl text-color flex flex-row gap-2 items-center">
    <h2>{header}</h2>
    <Tooltip styles={tooltip}>
      <div slot="tooltip">reset section</div>
      <IconButton
        on:click={reset}
        styles={['border-none', 'fill-current', 'text-blue-300', 'focus:outline-none']}>
        <Refresh size={30} />
      </IconButton>
    </Tooltip>
  </div>
  <slot />
</div>
