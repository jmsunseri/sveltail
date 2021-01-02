<script lang="ts">
  import Button from '../../Components/Button/Button.svelte';
  import { primaryButton } from '../../StyleDefinitions/SveltailStyles';
  import ColorSelect from './ColorSelect.svelte';
  import { ColorStyle } from './ColorStyle';

  export let value: ColorStyle[] = [new ColorStyle()];
  export let prefix: string;
  export let blockGradient: boolean;
  export let blockHover: boolean;

  const remove = (toBeRemoved: number) => {
    value = value.filter((_, index: number) => index !== toBeRemoved);
  };
</script>

<div class="flex flex-col gap-1">
  {#each value as color, index}
    <ColorSelect
      {prefix}
      bind:value={color}
      {blockGradient}
      {blockHover}
      onDelete={() => remove(index)} />
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
