<script lang="ts">
  import { EffectsStyle } from './EffectsStyle';
  import BoxShadowSelect from './BoxShadowSelect.svelte';
  import OpacitySelect from './OpacitySelect.svelte';
  export let value: EffectsStyle = new EffectsStyle();
</script>

<div class="flex flex-col gap-1">
  <BoxShadowSelect bind:value={value.boxShadow} />
  <OpacitySelect bind:value={value.opacity} />
</div>
