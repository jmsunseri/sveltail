<script lang="ts">
  import Accordion from '../../Components/Accordion/Accordion.svelte';
  import AccordionItem from '../../Components/Accordion/AccordionItem.svelte';
  import StyleGroup from '../StyleGroup.svelte';
  import BorderSelect from '../../TailwindControls/Border/BorderSelect.svelte';
  import FontSelect from '../../TailwindControls/Font/FontSelect.svelte';
  import EffectsSelect from '../../TailwindControls/Effects/EffectsSelect.svelte';
  import TransformSelect from '../../TailwindControls/Transform/TransformSelect.svelte';
  import TransitionSelect from '../../TailwindControls/Transition/TransitionSelect.svelte';
  import { getNewInstance, headerStyles, selectedStyle } from '../../store';

  let accordion: Accordion;

  const reset = () => ($headerStyles.brand = $getNewInstance().header.brand);

  $: {
    $selectedStyle = $headerStyles;
  }
</script>

<StyleGroup
  on:closed
  header="Header Brand"
  bind:style={$headerStyles.brand}
  {reset}
  dontSelectSelectedStyle>
  <Accordion bind:this={accordion}>
    <AccordionItem isFirst id={1} {accordion} headerText="Border">
      <BorderSelect bind:value={$headerStyles.brand.border} />
    </AccordionItem>
    <AccordionItem id={2} {accordion} headerText="Font">
      <FontSelect bind:value={$headerStyles.brand.font} />
    </AccordionItem>
    <AccordionItem id={3} {accordion} headerText="Effects">
      <EffectsSelect bind:value={$headerStyles.brand.effects} />
    </AccordionItem>
    <AccordionItem id={4} {accordion} headerText="Transform">
      <TransformSelect bind:value={$headerStyles.brand.transform} />
    </AccordionItem>
    <AccordionItem isLast id={5} {accordion} headerText="Transition">
      <TransitionSelect bind:value={$headerStyles.brand.transition} />
    </AccordionItem>
  </Accordion>
</StyleGroup>
