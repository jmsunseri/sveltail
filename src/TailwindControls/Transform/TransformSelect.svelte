<script lang="ts">
  import { TransformStyles } from './TransformStyles';
  import TransformOriginSelect from './TransformOriginSelect.svelte';
  import TransformScaleSelect from './TransformScaleSelect.svelte';
  import TransformRotateSelect from './TransformRotateSelect.svelte';
  import TransformTranslateSelect from './TransformTranslateSelect.svelte';
  import TransformSkewSelect from './TransformSkewSelect.svelte';
  import Switch from '../../Components/Switch.svelte';

  export let value: TransformStyles = new TransformStyles();
</script>

<div class="flex flex-col gap-1">
  <div class="flex flex-row items-center">
    <Switch bind:checked={value.onHover} />
    On Hover?
  </div>
  <TransformOriginSelect bind:value={value.origin} />
  <TransformScaleSelect bind:value={value.scale} />
  <TransformRotateSelect bind:value={value.rotate} />
  <TransformTranslateSelect bind:value={value.translate} />
  <TransformSkewSelect bind:value={value.skew} />
</div>
