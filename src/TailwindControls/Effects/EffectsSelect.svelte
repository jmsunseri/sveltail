<script lang="ts">
  import { EffectsStyle } from './EffectsStyle';
  import BoxShadowSelect from './BoxShadowSelect.svelte';
  import OpacitySelect from './OpacitySelect.svelte';
  import Button from '../../Components/Button/Button.svelte';
  import { primaryButton } from '../../StyleDefinitions/SveltailStyles';
  import Switch from '../../Components/Switch.svelte';
  export let value: EffectsStyle[] = [new EffectsStyle()];
</script>

<div class="flex flex-col gap-1">
  {#each value as effect}
    <div class="flex flex-row gap-2">
      <Switch bind:checked={effect.isHover} />
      <span>Apply On Hover?</span>
    </div>

    <BoxShadowSelect bind:value={effect.boxShadow} />
    <OpacitySelect bind:value={effect.opacity} />
  {/each}
  {#if value.length !== 2}
    <Button
      styles={primaryButton}
      on:click={() => (value = [...value, new EffectsStyle()])}>
      Add Effects
    </Button>
  {/if}
</div>
