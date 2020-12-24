<script lang="ts">
  import FontSelect from '../../TailwindControls/Font/FontSelect.svelte';
  import BorderSelect from '../../TailwindControls/Border/BorderSelect.svelte';
  import SizingSelect from '../../TailwindControls/Sizing/SizingSelect.svelte';
  import SpacingSelect from '../../TailwindControls/Spacing/SpacingSelect.svelte';
  import StyleGroup from './StyleGroup.svelte';
  import Accordion from '../Accordion/Accordion.svelte';
  import AccordionItem from '../Accordion/AccordionItem.svelte';
  import ColorSelect from '../../TailwindControls/Color/ColorSelect.svelte';
  import EffectsSelect from '../../TailwindControls/Effects/EffectsSelect.svelte';
  import { CheckboxStyles } from '../Checkbox/CheckboxStyles';

  let accordion: Accordion;
  export let value: CheckboxStyles = new CheckboxStyles();
</script>

<StyleGroup on:closed header="Checkbox Styles">
  <Accordion bind:this={accordion}>
    <AccordionItem isFirst id={0} {accordion} headerText="Color">
      <ColorSelect prefix="bg" bind:value={value.color} />
    </AccordionItem>
    <AccordionItem id={2} {accordion} headerText="Checkmark">
      <FontSelect bind:value={value.font} />
    </AccordionItem>
    <AccordionItem id={3} {accordion} headerText="Border">
      <BorderSelect bind:value={value.border} />
    </AccordionItem>
    <AccordionItem id={5} {accordion} headerText="Effects">
      <EffectsSelect bind:value={value.effects} />
    </AccordionItem>
    <AccordionItem id={6} {accordion} headerText="Spacing">
      <SpacingSelect bind:value={value.spacing} />
    </AccordionItem>
    <AccordionItem isLast id={7} {accordion} headerText="Size">
      <SizingSelect bind:value={value.size} />
    </AccordionItem>
  </Accordion>
</StyleGroup>
