<script lang="ts">
  import { EffectsStyle } from './EffectsStyle';
  import BoxShadowSelect from './BoxShadowSelect.svelte';
  import OpacitySelect from './OpacitySelect.svelte';
  import Button from '../../Components/Button/Button.svelte';
  import { primaryButton } from '../../StyleDefinitions/SveltailStyles';
  export let value: EffectsStyle[] = [new EffectsStyle()];

  let normal: EffectsStyle;
  let hover: EffectsStyle;

  $: {
    normal = value.find((x) => !x.isHover) || new EffectsStyle();
    hover = value.find((x) => x.isHover);
    if (hover) {
      value = [normal, hover];
    } else {
      value = [normal];
    }
  }
</script>

<div class="flex flex-col gap-1">
  <BoxShadowSelect bind:value={normal.boxShadow} />
  <OpacitySelect bind:value={normal.opacity} />
  {#if value.length < 2}
    <Button
      styles={primaryButton}
      on:click={() => (value = [...value, new EffectsStyle({
            isHover: true,
          })])}>
      Add Hover Effects
    </Button>
  {:else}
    Hover Effects
    <BoxShadowSelect bind:value={hover.boxShadow} />
    <OpacitySelect bind:value={hover.opacity} />
  {/if}
</div>
