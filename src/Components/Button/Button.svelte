<script lang="ts">
  import type { FontWeight, FontSize } from '../../Font/font';
  export let displayStyle: boolean;
  export let text: string = '';
  export let onClick: VoidFunction;
  export let fontWeight: FontWeight;
  export let fontSize: FontSize;
  export let styles: string[];

  $: buttonFontWeight = fontWeight ? `font-${fontWeight}` : '';
  $: buttonFontSize = fontSize ? `text-${fontSize}` : '';

  $: buttonClass = `btn py-2 px-4 ${
    !!styles?.length && styles.join(' ')
  } ${buttonFontWeight} ${buttonFontSize}`;
</script>

<button class={buttonClass} on:click={onClick}>{text}</button>
{#if displayStyle}
  <pre>{buttonClass}</pre>
{/if}
