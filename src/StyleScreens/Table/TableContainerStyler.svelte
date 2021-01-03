<script lang="ts">
  import FontSelect from '../../TailwindControls/Font/FontSelect.svelte';
  import BorderSelect from '../../TailwindControls/Border/BorderSelect.svelte';
  import SpacingSelect from '../../TailwindControls/Spacing/SpacingSelect.svelte';
  import EffectsSelect from '../../TailwindControls/Effects/EffectsSelect.svelte';
  import DividerSelect from '../../TailwindControls/Divider/DividerSelect.svelte';
  import TransformSelect from '../../TailwindControls/Transform/TransformSelect.svelte';
  import ColorsSelects from '../../TailwindControls/Color/ColorsSelects.svelte';
  import TransitionSelect from '../../TailwindControls/Transition/TransitionSelect.svelte';
  import StyleGroup from '../StyleGroup.svelte';
  import Accordion from '../../Components/Accordion/Accordion.svelte';
  import AccordionItem from '../../Components/Accordion/AccordionItem.svelte';
  import { getNewInstance, selectedStyle, tableStyles } from '../../store';

  let accordion: Accordion;

  const reset = () => {
    const instance = $getNewInstance();
    $tableStyles.color = instance.table.color;
    $tableStyles.font = instance.table.font;
    $tableStyles.border = instance.table.border;
    $tableStyles.effects = instance.table.effects;
    $tableStyles.spacing = instance.table.spacing;
    $tableStyles.divider = instance.table.divider;
    $tableStyles.transform = instance.table.transform;
    $tableStyles.transition = instance.table.transition;
  };

  $: {
    $selectedStyle = $tableStyles;
  }
</script>

<StyleGroup
  on:closed
  header="Table Container"
  bind:style={$tableStyles}
  dontSelectSelectedStyle
  {reset}>
  <Accordion bind:this={accordion}>
    <AccordionItem isFirst id={0} {accordion} headerText="Color">
      <ColorsSelects prefix="bg" bind:value={$tableStyles.color} />
    </AccordionItem>
    <AccordionItem id={1} {accordion} headerText="Font">
      <FontSelect bind:value={$tableStyles.font} />
    </AccordionItem>
    <AccordionItem id={2} {accordion} headerText="Border">
      <BorderSelect bind:value={$tableStyles.border} />
    </AccordionItem>
    <AccordionItem id={3} {accordion} headerText="Effects">
      <EffectsSelect bind:value={$tableStyles.effects} />
    </AccordionItem>
    <AccordionItem id={4} {accordion} headerText="Spacing">
      <SpacingSelect bind:value={$tableStyles.spacing} />
    </AccordionItem>
    <AccordionItem id={5} {accordion} headerText="Divider">
      <DividerSelect bind:value={$tableStyles.divider} />
    </AccordionItem>
    <AccordionItem id={6} {accordion} headerText="Transform">
      <TransformSelect bind:value={$tableStyles.transform} />
    </AccordionItem>
    <AccordionItem isLast id={7} {accordion} headerText="Transition">
      <TransitionSelect bind:value={$tableStyles.transition} />
    </AccordionItem>
  </Accordion>
</StyleGroup>
