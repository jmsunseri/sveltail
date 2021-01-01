<script lang="ts">
  import BorderSelect from '../../TailwindControls/Border/BorderSelect.svelte';
  import SpacingSelect from '../../TailwindControls/Spacing/SpacingSelect.svelte';
  import StyleGroup from '../StyleGroup.svelte';
  import Accordion from '../../Components/Accordion/Accordion.svelte';
  import AccordionItem from '../../Components/Accordion/AccordionItem.svelte';
  import EffectsSelect from '../../TailwindControls/Effects/EffectsSelect.svelte';
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
  header="Card Styles"
  bind:style={$cardStyles}
  dontSelectSelectedStyle>
  <Accordion bind:this={accordion}>
    <AccordionItem isFirst id={0} {accordion} headerText="Color">
      <ColorsSelects prefix="bg" bind:value={$cardStyles.color} />
    </AccordionItem>
    <AccordionItem id={2} {accordion} headerText="Border">
      <BorderSelect bind:value={$cardStyles.border} />
    </AccordionItem>
    <AccordionItem id={3} {accordion} headerText="Effects">
      <EffectsSelect bind:value={$cardStyles.effects} />
    </AccordionItem>
    <AccordionItem id={4} {accordion} headerText="Spacing">
      <SpacingSelect bind:value={$cardStyles.spacing} />
    </AccordionItem>
    <AccordionItem id={4.1} {accordion} headerText="Transform">
      <TransformSelect bind:value={$cardStyles.transform} />
    </AccordionItem>
    <AccordionItem isLast id={4.2} {accordion} headerText="Transition">
      <TransitionSelect bind:value={$cardStyles.transition} />
    </AccordionItem>
  </Accordion>
</StyleGroup>
