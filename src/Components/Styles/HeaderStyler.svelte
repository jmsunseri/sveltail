<script lang="ts">
  import { HeaderStyle } from '../Header/HeaderStyle';
  import BoxShadowSelect from '../../TailwindControls/Effects/BoxShadowSelect.svelte';
  import Accordion from '../Accordion/Accordion.svelte';
  import AccordionItem from '../Accordion/AccordionItem.svelte';
  import StyleGroup from './StyleGroup.svelte';
  import BorderSelect from '../../TailwindControls/Border/BorderSelect.svelte';
  import FontSelect from '../../TailwindControls/Font/FontSelect.svelte';
  import ColorSelect from '../../TailwindControls/Color/ColorSelect.svelte';
  import EffectsSelect from '../../TailwindControls/Effects/EffectsSelect.svelte';

  let accordion: Accordion;
  export let init: HeaderStyle;
  export let value: HeaderStyle = init || new HeaderStyle();
</script>

<StyleGroup on:closed header="Header Styles">
  <Accordion bind:this={accordion}>
    <AccordionItem isFirst id={0} {accordion} headerText="Background">
      <ColorSelect prefix="bg" bind:value={value.color} />
    </AccordionItem>
    <AccordionItem id={1} {accordion} headerText="Border">
      <BorderSelect bind:value={value.border} />
    </AccordionItem>
    <AccordionItem id={2} {accordion} headerText="Font">
      <FontSelect bind:value={value.font} />
    </AccordionItem>
    <AccordionItem isLast id={3} {accordion} headerText="Effects">
      <EffectsSelect bind:value={value.effects} />
    </AccordionItem>
  </Accordion>
</StyleGroup>
