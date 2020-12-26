<script lang="ts">
  import { EffectsStyle } from './EffectsStyle';
  import BoxShadowSelect from './BoxShadowSelect.svelte';
  import OpacitySelect from './OpacitySelect.svelte';
  import Button from '../../Components/Button/Button.svelte';
  import { primaryButton } from '../../StyleDefinitions/SveltailStyles';
  export let value: EffectsStyle[] = [new EffectsStyle()];
</script>

<div class="flex flex-col gap-1">
  <BoxShadowSelect bind:value={value[0].boxShadow} />
  <OpacitySelect bind:value={value[0].opacity} />
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
    <BoxShadowSelect bind:value={value[1].boxShadow} />
    <OpacitySelect bind:value={value[1].opacity} />
  {/if}
</div>
