<script lang="ts">
  import FontSelect from '../TailwindControls/Font/FontSelect.svelte';
  import BorderSelect from '../TailwindControls/Border/BorderSelect.svelte';
  import SpacingSelect from '../TailwindControls/Spacing/SpacingSelect.svelte';
  import StyleGroup from './StyleGroup.svelte';
  import Accordion from '../Components/Accordion/Accordion.svelte';
  import AccordionItem from '../Components/Accordion/AccordionItem.svelte';
  import TransformSelect from '../TailwindControls/Transform/TransformSelect.svelte';
  import ColorsSelects from '../TailwindControls/Color/ColorsSelects.svelte';
  import { getNewInstance, tooltipStyles } from '../store';
  import EffectsSelect from '../TailwindControls/Effects/EffectsSelect.svelte';

  let accordion: Accordion;
  const reset = () => ($tooltipStyles = $getNewInstance().tooltip);
</script>

<StyleGroup on:closed header="Tooltip" bind:style={$tooltipStyles} {reset}>
  <Accordion bind:this={accordion}>
    <AccordionItem isFirst id={0} {accordion} headerText="Color">
      <ColorsSelects prefix="bg" bind:value={$tooltipStyles.color} />
    </AccordionItem>
    <AccordionItem id={2} {accordion} headerText="Font">
      <FontSelect bind:value={$tooltipStyles.font} />
    </AccordionItem>
    <AccordionItem id={3} {accordion} headerText="Border">
      <BorderSelect bind:value={$tooltipStyles.border} />
    </AccordionItem>
    <AccordionItem id={6} {accordion} headerText="Spacing">
      <SpacingSelect bind:value={$tooltipStyles.spacing} />
    </AccordionItem>
    <AccordionItem id={6.1} {accordion} headerText="Effects">
      <EffectsSelect bind:value={$tooltipStyles.effects} />
    </AccordionItem>
    <AccordionItem isLast id={8} {accordion} headerText="Transform">
      <TransformSelect bind:value={$tooltipStyles.transform} />
    </AccordionItem>
  </Accordion>
</StyleGroup>
