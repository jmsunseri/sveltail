<script lang="ts">
  import { HeaderStyle } from './HeaderStyle';
  import ColorMenu from '@tail/Color/ColorMenu.svelte';
  import BorderStyleSelect from '@tail/Border/BorderStyleSelect.svelte';
  import BorderWidthSelect from '@tail/Border/BorderWidth/BorderWidthSelect.svelte';
  import BorderRadiusSelect from '@tail/Border/BorderRadius/BorderRadiusSelect.svelte';
  import BoxShadowSelect from '@tail/Effects/BoxShadowSelect.svelte';

  export let init: HeaderStyle;
  export let value: HeaderStyle = init || new HeaderStyle();
</script>

<div class="flex flex-col gap-1">
  Background
  <ColorMenu prefix="bg" bind:value={value.color} />

  Border Styles
  <BorderStyleSelect bind:value={value.border.style} />
  <BorderWidthSelect bind:value={value.border.width} />
  <BorderRadiusSelect bind:value={value.border.radius} />
  <ColorMenu bind:value={value.border.color} prefix="border" />
  Effects
  <BoxShadowSelect bind:value={value.effects.boxShadow} />
</div>
