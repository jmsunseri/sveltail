<script lang="ts">
  import { Trash } from 'tabler-icons-svelte';
  import { EffectsStyle } from './EffectsStyle';
  import BoxShadowSelect from './BoxShadowSelect.svelte';
  import OpacitySelect from './OpacitySelect.svelte';
  import Button from '../../Components/Button/Button.svelte';
  import {
    primaryButton,
    tooltip,
  } from '../../StyleDefinitions/SveltailStyles';
  import Switch from '../../Components/Switch.svelte';
  import Tooltip from '../../Components/Tooltip/Tooltip.svelte';
  import IconButton from '../../Components/Button/IconButton.svelte';
  export let value: EffectsStyle[] = [new EffectsStyle()];

  const onDelete = (index: number) => {
    value = value.filter((_, i) => i !== index);
  };
</script>

<div class="flex flex-col gap-1">
  {#each value as effect, index}
    <div class="flex justify-between">
      <div class="flex flex-row gap-2">
        <Switch bind:checked={effect.isHover} />
        <span>Apply On Hover?</span>
      </div>
      <Tooltip styles={tooltip}>
        <div slot="tooltip">Delete Effects</div>
        <IconButton
          on:click={() => onDelete(index)}
          styles={['border-none', 'fill-current', 'text-blue-300', 'focus:outline-none']}>
          <Trash />
        </IconButton>
      </Tooltip>
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
