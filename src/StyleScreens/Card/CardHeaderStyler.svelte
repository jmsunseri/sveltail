<script lang="ts">
  import FontSelect from '../../TailwindControls/Font/FontSelect.svelte';
  import BorderSelect from '../../TailwindControls/Border/BorderSelect.svelte';
  import SpacingSelect from '../../TailwindControls/Spacing/SpacingSelect.svelte';
  import StyleGroup from '../StyleGroup.svelte';
  import Accordion from '../../Components/Accordion/Accordion.svelte';
  import AccordionItem from '../../Components/Accordion/AccordionItem.svelte';
  import TransformSelect from '../../TailwindControls/Transform/TransformSelect.svelte';
  import ColorsSelects from '../../TailwindControls/Color/ColorsSelects.svelte';
  import TransitionSelect from '../../TailwindControls/Transition/TransitionSelect.svelte';
  import { cardStyles, selectedStyle } from '../../store';

  let accordion: Accordion;

  $: {
    $selectedStyle = $cardStyles;
  }
</script>

<StyleGroup
  on:closed
  header="Header Styles"
  bind:style={$cardStyles.header}
  dontSelectSelectedStyle>
  <Accordion bind:this={accordion}>
    <AccordionItem isFirst id={1} {accordion} headerText="Color">
      <ColorsSelects prefix="bg" bind:value={$cardStyles.header.color} />
    </AccordionItem>
    <AccordionItem id={2} {accordion} headerText="Font">
      <FontSelect bind:value={$cardStyles.header.font} />
    </AccordionItem>
    <AccordionItem id={3} {accordion} headerText="Border">
      <BorderSelect bind:value={$cardStyles.header.border} />
    </AccordionItem>
    <AccordionItem id={4} {accordion} headerText="Spacing">
      <SpacingSelect bind:value={$cardStyles.header.spacing} />
    </AccordionItem>
    <AccordionItem id={5} {accordion} headerText="Transform">
      <TransformSelect bind:value={$cardStyles.header.transform} />
    </AccordionItem>
    <AccordionItem isLast id={6} {accordion} headerText="Transition">
      <TransitionSelect bind:value={$cardStyles.header.transition} />
    </AccordionItem>
  </Accordion>
</StyleGroup>
