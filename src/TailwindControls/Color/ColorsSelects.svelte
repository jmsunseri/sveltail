<script lang="ts">
  import Button from '../../Components/Button/Button.svelte';
  import { primaryButton } from '../../StyleDefinitions/SveltailStyles';
  import { Variant } from '../../Variant';
  import ColorSelect from './ColorSelect.svelte';
  import { ColorStyle } from './ColorStyle';

  export let value: ColorStyle[] = [];
  export let prefix: string;
  export let blockGradient: boolean;
  export let blockOpacity: boolean;
  export let blockFilters: boolean;
  export let variants: Variant[] = [Variant.None, Variant.Hover];

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
      {blockOpacity}
      {blockFilters}
      {variants}
      onDelete={() => remove(index)}
    />
  {/each}
  {#if (variants.length > 1 && value.length !== variants.length) || value.length === 0}
    <div class="flex items-center justify-center">
      <Button
        styles={primaryButton}
        on:click={() => {
          value = [...value, new ColorStyle()];
        }}
      >Add Color Styles</Button>
    </div>
  {/if}
</div>
