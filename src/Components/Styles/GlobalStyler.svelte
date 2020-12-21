<script lang="ts">
  import { GlobalStyle } from './GlobalStyle';
  import ColorMenu from '../../TailwindControls/Color/ColorMenu.svelte';
  import Accordion from '../Accordion/Accordion.svelte';
  import AccordionItem from '../Accordion/AccordionItem.svelte';
  import StyleGroup from './StyleGroup.svelte';
  import FontSelect from '../../TailwindControls/Font/FontSelect.svelte';

  let accordion: Accordion;
  export let init: GlobalStyle;
  export let value: GlobalStyle = init || new GlobalStyle();
</script>

<StyleGroup on:closed header="Global Styles">
  <Accordion bind:this={accordion}>
    <AccordionItem isFirst id={0} {accordion} headerText="Background">
      <ColorMenu prefix="bg" bind:value={value.color} />
    </AccordionItem>
    <AccordionItem isLast id={2} {accordion} headerText="Font">
      <FontSelect bind:value={value.font} />
    </AccordionItem>
  </Accordion>
</StyleGroup>
