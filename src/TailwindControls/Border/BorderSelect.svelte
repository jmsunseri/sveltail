<script lang="ts">
  import ColorMenu from '../../TailwindControls/Color/ColorMenu.svelte';
  import BorderStyleSelect from './BorderStyleSelect.svelte';
  import BorderWidthSelect from './BorderWidth/BorderWidthSelect.svelte';
  import BorderRadiusSelect from './BorderRadius/BorderRadiusSelect.svelte';
  import { BorderStyles } from './BorderStyles';

  export let init: BorderStyles;

  export let value: BorderStyles = init || new BorderStyles();
</script>

<div class="flex flex-col gap-1">
  <BorderStyleSelect bind:value={value.style} />
  <BorderWidthSelect bind:value={value.width} />
  <BorderRadiusSelect bind:value={value.radius} />
  <ColorMenu bind:value={value.color} init={value.color} prefix="border" />
</div>
