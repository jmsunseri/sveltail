<script lang="ts">
  import { FontStyles } from './FontStyles';
  import ColorMenu from '../Color/ColorMenu.svelte';
  import FontSizeSelect from './FontSizeSelect.svelte';
  import FontWeightSelect from './FontWeightSelect.svelte';

  export let init: FontStyles;
  export let value: FontStyles = init || new FontStyles();
</script>

<div class="flex flex-col gap-1">
  <FontWeightSelect bind:value={value.weight} />
  <FontSizeSelect bind:value={value.size} />
  <ColorMenu bind:value={value.color} init={value.color} prefix="text" />
</div>
