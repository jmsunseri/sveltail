<script lang="ts">
  import { ButtonStyles } from './Models/ButtonStyles';
  import ColorSelect from '../../TailwindControls/Color/ColorSelect.svelte';
  import FontSelect from '../../TailwindControls/Font/FontSelect.svelte';
  import BorderSelect from '../../TailwindControls/Border/BorderSelect.svelte';
  import BoxShadowSelect from '../../TailwindControls/Effects/BoxShadowSelect.svelte';
  import SizingSelect from '../../TailwindControls/Sizing/SizingSelect.svelte';
  import SpacingSelect from '../../TailwindControls/Spacing/SpacingSelect.svelte';

  export let init: ButtonStyles;
  export let value: ButtonStyles = init || new ButtonStyles();
</script>

<div class="flex flex-row items-center gap-2">
  Button:
  <ColorSelect prefix="bg" bind:value={value.color} />
  <FontSelect bind:value={value.font} />
  <BorderSelect bind:value={value.border} />
  <BoxShadowSelect bind:value={value.effects.boxShadow} />
  <SpacingSelect bind:value={value.spacing} />
  Icon:
  <SizingSelect bind:value={value.icon.size} />
</div>
