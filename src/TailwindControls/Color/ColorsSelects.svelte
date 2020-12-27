<script lang="ts">
  import Button from '../../Components/Button/Button.svelte';
  import { primaryButton } from '../../StyleDefinitions/SveltailStyles';
  import ColorSelect from './ColorSelect.svelte';
  import { ColorStyle } from './ColorStyle';

  export let value: ColorStyle[] = [new ColorStyle()];
  export let prefix: string;
  export let blockGradient: boolean;
  export let blockHover: boolean;

  let normal: ColorStyle;
  let hover: ColorStyle;

  $: {
    normal = value.find((x) => !x.isHover) || new ColorStyle();
    hover = value.find((x) => x.isHover);
    if (hover) {
      value = [normal, hover];
    } else {
      value = [normal];
    }
  }
</script>

<ColorSelect {prefix} bind:value={normal} {blockGradient} />

{#if !hover && !blockHover}
  <div class="flex flex-row justify-center">
    <Button
      styles={primaryButton}
      on:click={() => {
        console.log('value', value);

        value = [...value, new ColorStyle({ isHover: true })];
      }}>
      Add Hover Color
    </Button>
  </div>
{:else if hover}
  Hover Color
  <ColorSelect {prefix} bind:value={hover} {blockGradient} />
{/if}
