<script lang="ts">
  import FontSelect from '../../TailwindControls/Font/FontSelect.svelte';
  import SpacingSelect from '../../TailwindControls/Spacing/SpacingSelect.svelte';
  import StyleGroup from '../StyleGroup.svelte';
  import Accordion from '../../Components/Accordion/Accordion.svelte';
  import AccordionItem from '../../Components/Accordion/AccordionItem.svelte';
  import TransformSelect from '../../TailwindControls/Transform/TransformSelect.svelte';
  import ColorsSelects from '../../TailwindControls/Color/ColorsSelects.svelte';
  import TransitionSelect from '../../TailwindControls/Transition/TransitionSelect.svelte';
  import { getNewInstance, selectedStyle, selectStyles } from '../../store';

  let accordion: Accordion;
  const reset = () =>
    ($selectStyles.menuItem = $getNewInstance().select.menuItem);

  $: {
    $selectedStyle = $selectStyles;
  }
</script>

<StyleGroup
  on:closed
  header="Popup Items"
  bind:style={$selectStyles.menuItem}
  {reset}
  dontSelectSelectedStyle>
  <Accordion bind:this={accordion}>
    <AccordionItem isFirst id={1} {accordion} headerText="Font">
      <FontSelect bind:value={$selectStyles.menuItem.font} />
    </AccordionItem>
    <AccordionItem id={2} {accordion} headerText="Spacing">
      <SpacingSelect bind:value={$selectStyles.menuItem.spacing} />
    </AccordionItem>
    <AccordionItem id={3} {accordion} headerText="Transform">
      <TransformSelect bind:value={$selectStyles.menuItem.transform} />
    </AccordionItem>
    <AccordionItem id={4} {accordion} headerText="Transition">
      <TransitionSelect bind:value={$selectStyles.menuItem.transition} />
    </AccordionItem>
    <AccordionItem isLast id={5} {accordion} headerText="Color">
      <ColorsSelects prefix="bg" bind:value={$selectStyles.menuItem.color} />
    </AccordionItem>
  </Accordion>
</StyleGroup>
