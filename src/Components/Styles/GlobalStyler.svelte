<script lang="ts">
  import { GlobalStyle } from './GlobalStyle';
  import Accordion from '../Accordion/Accordion.svelte';
  import AccordionItem from '../Accordion/AccordionItem.svelte';
  import StyleGroup from './StyleGroup.svelte';
  import FontSelect from '../../TailwindControls/Font/FontSelect.svelte';
  import SpacingSelect from '../../TailwindControls/Spacing/SpacingSelect.svelte';
  import TransitionSelect from '../../TailwindControls/Transition/TransitionSelect.svelte';
  import ColorsSelects from '../../TailwindControls/Color/ColorsSelects.svelte';

  let accordion: Accordion;
  export let value: GlobalStyle = new GlobalStyle();

  console.log('global style', value);
</script>

<StyleGroup on:closed header="Global Styles">
  <Accordion bind:this={accordion}>
    <AccordionItem isFirst id={0} {accordion} headerText="Background">
      <ColorsSelects prefix="bg" bind:value={value.color} />
    </AccordionItem>
    <AccordionItem id={1} {accordion} headerText="Spacing">
      <SpacingSelect bind:value={value.spacing} />
    </AccordionItem>
    <AccordionItem id={2} {accordion} headerText="Font">
      <FontSelect bind:value={value.font} />
    </AccordionItem>
    <AccordionItem isLast id={3} {accordion} headerText="Transition">
      <TransitionSelect bind:value={value.transition} />
    </AccordionItem>
  </Accordion>
</StyleGroup>
