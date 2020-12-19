<script lang="ts">
  import { ButtonStyles } from '../Button/Models/ButtonStyles';
  import ColorSelect from '../../TailwindControls/Color/ColorSelect.svelte';
  import FontSelect from '../../TailwindControls/Font/FontSelect.svelte';
  import BorderSelect from '../../TailwindControls/Border/BorderSelect.svelte';
  import BoxShadowSelect from '../../TailwindControls/Effects/BoxShadowSelect.svelte';
  import SizingSelect from '../../TailwindControls/Sizing/SizingSelect.svelte';
  import SpacingSelect from '../../TailwindControls/Spacing/SpacingSelect.svelte';
  import StyleGroup from './StyleGroup.svelte';
  import Accordion from '../Accordion/Accordion.svelte';
  import AccordionItem from '../Accordion/AccordionItem.svelte';

  let accordion: Accordion;
  export let init: ButtonStyles;
  export let value: ButtonStyles = init || new ButtonStyles();
</script>

<StyleGroup on:closed header="Button Styles">
  <Accordion bind:this={accordion}>
    <AccordionItem isFirst id={0} {accordion} headerText="Button">
      <ColorSelect prefix="bg" bind:value={value.color} />
      <FontSelect bind:value={value.font} />
      <BorderSelect bind:value={value.border} />
      <BoxShadowSelect bind:value={value.effects.boxShadow} />
      <SpacingSelect bind:value={value.spacing} />
    </AccordionItem>
    <AccordionItem isLast id={1} {accordion} headerText="Icon">
      <SizingSelect bind:value={value.icon.size} />
      <ColorSelect prefix="text" bind:value={value.icon.color} />
    </AccordionItem>
  </Accordion>
</StyleGroup>
