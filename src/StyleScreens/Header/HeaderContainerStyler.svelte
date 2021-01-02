<script lang="ts">
  import Accordion from '../../Components/Accordion/Accordion.svelte';
  import AccordionItem from '../../Components/Accordion/AccordionItem.svelte';
  import StyleGroup from '../StyleGroup.svelte';
  import BorderSelect from '../../TailwindControls/Border/BorderSelect.svelte';
  import FontSelect from '../../TailwindControls/Font/FontSelect.svelte';
  import EffectsSelect from '../../TailwindControls/Effects/EffectsSelect.svelte';
  import TransformSelect from '../../TailwindControls/Transform/TransformSelect.svelte';
  import ColorsSelects from '../../TailwindControls/Color/ColorsSelects.svelte';
  import TransitionSelect from '../../TailwindControls/Transition/TransitionSelect.svelte';
  import { headerStyles, selectedStyle } from '../../store';

  let accordion: Accordion;

  $: {
    $selectedStyle = $headerStyles;
  }
</script>

<StyleGroup
  on:closed
  header="Header Container"
  bind:style={$headerStyles}
  dontSelectSelectedStyle>
  <Accordion bind:this={accordion}>
    <AccordionItem isFirst id={0} {accordion} headerText="Background">
      <ColorsSelects prefix="bg" bind:value={$headerStyles.color} />
    </AccordionItem>
    <AccordionItem id={1} {accordion} headerText="Border">
      <BorderSelect bind:value={$headerStyles.border} />
    </AccordionItem>
    <AccordionItem id={2} {accordion} headerText="Font">
      <FontSelect bind:value={$headerStyles.font} />
    </AccordionItem>
    <AccordionItem id={3} {accordion} headerText="Effects">
      <EffectsSelect bind:value={$headerStyles.effects} />
    </AccordionItem>
    <AccordionItem id={4} {accordion} headerText="Transform">
      <TransformSelect bind:value={$headerStyles.transform} />
    </AccordionItem>
    <AccordionItem isLast id={5} {accordion} headerText="Transition">
      <TransitionSelect bind:value={$headerStyles.transition} />
    </AccordionItem>
  </Accordion>
</StyleGroup>
