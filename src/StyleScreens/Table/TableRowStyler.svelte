<script lang="ts">
  import FontSelect from '../../TailwindControls/Font/FontSelect.svelte';
  import BorderSelect from '../../TailwindControls/Border/BorderSelect.svelte';
  import SpacingSelect from '../../TailwindControls/Spacing/SpacingSelect.svelte';
  import EffectsSelect from '../../TailwindControls/Effects/EffectsSelect.svelte';
  import DividerSelect from '../../TailwindControls/Divider/DividerSelect.svelte';
  import TransformSelect from '../../TailwindControls/Transform/TransformSelect.svelte';
  import ColorsSelects from '../../TailwindControls/Color/ColorsSelects.svelte';
  import TransitionSelect from '../../TailwindControls/Transition/TransitionSelect.svelte';
  import Accordion from '../../Components/Accordion/Accordion.svelte';
  import AccordionItem from '../../Components/Accordion/AccordionItem.svelte';
  import StyleGroup from '../StyleGroup.svelte';
  import { getNewInstance, selectedStyle, tableStyles } from '../../store';

  let accordion: Accordion;

  const reset = () => ($tableStyles.row = $getNewInstance().table.row);

  $: {
    $selectedStyle = $tableStyles;
  }
</script>

<StyleGroup
  on:closed
  header="Table Row"
  bind:style={$tableStyles.row}
  dontSelectSelectedStyle
  {reset}>
  <Accordion bind:this={accordion}>
    <AccordionItem isFirst id={1} {accordion} headerText="Color">
      <ColorsSelects prefix="bg" bind:value={$tableStyles.row.color} />
    </AccordionItem>
    <AccordionItem id={2} {accordion} headerText="Font">
      <FontSelect bind:value={$tableStyles.row.font} />
    </AccordionItem>
    <AccordionItem id={3} {accordion} headerText="Border">
      <BorderSelect bind:value={$tableStyles.row.border} />
    </AccordionItem>
    <AccordionItem id={4} {accordion} headerText="Divider">
      <DividerSelect bind:value={$tableStyles.row.divider} />
    </AccordionItem>
    <AccordionItem id={5} {accordion} headerText="Effects">
      <EffectsSelect bind:value={$tableStyles.row.effects} />
    </AccordionItem>
    <AccordionItem id={6} {accordion} headerText="Spacing">
      <SpacingSelect bind:value={$tableStyles.row.spacing} />
    </AccordionItem>
    <AccordionItem id={7} {accordion} headerText="Transform">
      <TransformSelect bind:value={$tableStyles.row.transform} />
    </AccordionItem>
    <AccordionItem isLast id={8} {accordion} headerText="Transition">
      <TransitionSelect bind:value={$tableStyles.row.transition} />
    </AccordionItem>
  </Accordion>
</StyleGroup>
