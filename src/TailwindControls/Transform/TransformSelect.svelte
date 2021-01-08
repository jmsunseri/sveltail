<script lang="ts">
  import { Trash } from 'tabler-icons-svelte';
  import { TransformStyles } from './TransformStyles';
  import TransformOriginSelect from './TransformOriginSelect.svelte';
  import TransformScaleSelect from './TransformScaleSelect.svelte';
  import TransformRotateSelect from './TransformRotateSelect.svelte';
  import TransformTranslateSelect from './TransformTranslateSelect.svelte';
  import TransformSkewSelect from './TransformSkewSelect.svelte';
  import Switch from '../../Components/Switch.svelte';
  import Button from '../../Components/Button/Button.svelte';
  import {
    primaryButton,
    tooltip,
  } from '../../StyleDefinitions/SveltailStyles';
  import Tooltip from '../../Components/Tooltip/Tooltip.svelte';
  import IconButton from '../../Components/Button/IconButton.svelte';

  export let value: TransformStyles[] = [new TransformStyles()];

  const onDelete = (index: number) => {
    value = value.filter((_, i) => i !== index);
  };
</script>

<div class="flex flex-col gap-1">
  {#each value as transform, index}
    <div class="flex justify-between">
      <div class="flex flex-row gap-2">
        <Switch bind:checked={transform.onHover} />
        <span>Apply On Hover?</span>
      </div>
      <Tooltip styles={tooltip}>
        <div slot="tooltip">Delete Transform</div>
        <IconButton
          on:click={() => onDelete(index)}
          styles={['border-none', 'fill-current', 'text-blue-300', 'focus:outline-none']}>
          <Trash />
        </IconButton>
      </Tooltip>
    </div>
    <TransformOriginSelect bind:value={transform.origin} />
    <TransformScaleSelect bind:value={transform.scale} />
    <TransformRotateSelect bind:value={transform.rotate} />
    <TransformTranslateSelect bind:value={transform.translate} />
    <TransformSkewSelect bind:value={transform.skew} />
  {/each}
  {#if value.length !== 2}
    <div class="flex items-center justify-center">
      <Button
        styles={primaryButton}
        on:click={() => {
          value = [...value, new TransformStyles()];
        }}>
        Add Transform
      </Button>
    </div>
  {/if}
</div>
