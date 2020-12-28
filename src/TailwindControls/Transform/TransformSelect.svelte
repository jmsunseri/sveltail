<script lang="ts">
  import { TransformStyles } from './TransformStyles';
  import TransformOriginSelect from './TransformOriginSelect.svelte';
  import TransformScaleSelect from './TransformScaleSelect.svelte';
  import TransformRotateSelect from './TransformRotateSelect.svelte';
  import TransformTranslateSelect from './TransformTranslateSelect.svelte';
  import TransformSkewSelect from './TransformSkewSelect.svelte';
  import Switch from '../../Components/Switch.svelte';
  import Button from '../../Components/Button/Button.svelte';
  import { primaryButton } from '../../StyleDefinitions/SveltailStyles';

  export let value: TransformStyles[] = [new TransformStyles()];
</script>

<div class="flex flex-col gap-1">
  {#each value as transform}
    <div class="flex flex-row items-center">
      <Switch bind:checked={transform.onHover} />
      On Hover?
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
