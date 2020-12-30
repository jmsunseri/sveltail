<script lang="ts">
  import Button from '../../Components/Button/Button.svelte';
  import { primaryButton } from '../../StyleDefinitions/SveltailStyles';
  import ColorSelect from './ColorSelect.svelte';
  import { ColorStyle } from './ColorStyle';

  export let value: ColorStyle[] = [new ColorStyle()];
  export let prefix: string;
  export let blockGradient: boolean;
  export let blockHover: boolean;

  // const clear = () => {
  //   value = [];
  // };

  // const reset = () => {
  //   value = value.map((x: ColorStyle) => {
  //     x.reset();
  //     return x;
  //   });
  // };
</script>

<div class="flex flex-col gap-1">
  <!-- <div class="flex">
    <Button styles={primaryButton} on:click={clear}>Clear</Button>
    <Button styles={primaryButton} on:click={reset}>Reset</Button>
  </div> -->

  {#each value as color}
    <ColorSelect {prefix} bind:value={color} {blockGradient} {blockHover} />
  {/each}
  {#if !blockHover && value.length !== 2}
    <div class="flex items-center justify-center">
      <Button
        styles={primaryButton}
        on:click={() => {
          value = [...value, new ColorStyle()];
        }}>
        Add Color Styles
      </Button>
    </div>
  {/if}
</div>
