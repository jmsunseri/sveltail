<script lang="ts">
  import FontSelect from '../../TailwindControls/Font/FontSelect.svelte';
  import BorderSelect from '../../TailwindControls/Border/BorderSelect.svelte';
  import SpacingSelect from '../../TailwindControls/Spacing/SpacingSelect.svelte';
  import StyleGroup from '../StyleGroup.svelte';
  import Accordion from '../../Components/Accordion/Accordion.svelte';
  import AccordionItem from '../../Components/Accordion/AccordionItem.svelte';
  import EffectsSelect from '../../TailwindControls/Effects/EffectsSelect.svelte';
  import DividerSelect from '../../TailwindControls/Divider/DividerSelect.svelte';
  import TransformSelect from '../../TailwindControls/Transform/TransformSelect.svelte';
  import ColorsSelects from '../../TailwindControls/Color/ColorsSelects.svelte';
  import TransitionSelect from '../../TailwindControls/Transition/TransitionSelect.svelte';
  import { getNewInstance, selectedStyle, selectStyles } from '../../store';
  import SizingSelect from '../../TailwindControls/Sizing/SizingSelect.svelte';

  let accordion: Accordion;
  const reset = () => ($selectStyles.menu = $getNewInstance().select.menu);

  $: {
    $selectedStyle = $selectStyles;
  }
</script>

<StyleGroup
  on:closed
  header="Popup"
  bind:style={$selectStyles.menu}
  dontSelectSelectedStyle
  {reset}>
  <Accordion bind:this={accordion}>
    <AccordionItem isFirst id={1} {accordion} headerText="Color">
      <ColorsSelects prefix="bg" bind:value={$selectStyles.menu.color} />
    </AccordionItem>
    <AccordionItem id={2} {accordion} headerText="Font">
      <FontSelect bind:value={$selectStyles.menu.font} />
    </AccordionItem>
    <AccordionItem id={3} {accordion} headerText="Border">
      <BorderSelect bind:value={$selectStyles.menu.border} />
    </AccordionItem>
    <AccordionItem id={4} {accordion} headerText="Divider">
      <DividerSelect bind:value={$selectStyles.menu.divider} />
    </AccordionItem>
    <AccordionItem id={5} {accordion} headerText="Effects">
      <EffectsSelect bind:value={$selectStyles.menu.effects} />
    </AccordionItem>
    <AccordionItem id={6} {accordion} headerText="Spacing">
      <SpacingSelect bind:value={$selectStyles.menu.spacing} />
    </AccordionItem>
    <AccordionItem id={6.1} {accordion} headerText="Sizing">
      <SizingSelect bind:value={$selectStyles.menu.size} />
    </AccordionItem>
    <AccordionItem id={7} {accordion} headerText="Transform">
      <TransformSelect bind:value={$selectStyles.menu.transform} />
    </AccordionItem>
    <AccordionItem isLast id={8} {accordion} headerText="Transition">
      <TransitionSelect bind:value={$selectStyles.menu.transition} />
    </AccordionItem>
  </Accordion>
</StyleGroup>
