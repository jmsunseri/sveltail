<script lang="ts">
  import FontSelect from '../TailwindControls/Font/FontSelect.svelte';
  import BorderSelect from '../TailwindControls/Border/BorderSelect.svelte';
  import SizingSelect from '../TailwindControls/Sizing/SizingSelect.svelte';
  import SpacingSelect from '../TailwindControls/Spacing/SpacingSelect.svelte';
  import StyleGroup from './StyleGroup.svelte';
  import Accordion from '../Components/Accordion/Accordion.svelte';
  import AccordionItem from '../Components/Accordion/AccordionItem.svelte';
  import EffectsSelect from '../TailwindControls/Effects/EffectsSelect.svelte';
  import TransformSelect from '../TailwindControls/Transform/TransformSelect.svelte';
  import TransitionSelect from '../TailwindControls/Transition/TransitionSelect.svelte';
  import ColorsSelects from '../TailwindControls/Color/ColorsSelects.svelte';
  import { checkboxStyles } from '../store';

  let accordion: Accordion;
</script>

<StyleGroup on:closed header="Checkbox Styles">
  <Accordion bind:this={accordion}>
    <AccordionItem isFirst id={0} {accordion} headerText="Color">
      <ColorsSelects prefix="bg" bind:value={$checkboxStyles.color} />
    </AccordionItem>
    <AccordionItem id={2} {accordion} headerText="Checkmark">
      <FontSelect bind:value={$checkboxStyles.font} />
    </AccordionItem>
    <AccordionItem id={3} {accordion} headerText="Border">
      <BorderSelect bind:value={$checkboxStyles.border} />
    </AccordionItem>
    <AccordionItem id={5} {accordion} headerText="Effects">
      <EffectsSelect bind:value={$checkboxStyles.effects} />
    </AccordionItem>
    <AccordionItem id={6} {accordion} headerText="Spacing">
      <SpacingSelect bind:value={$checkboxStyles.spacing} />
    </AccordionItem>
    <AccordionItem id={7} {accordion} headerText="Size">
      <SizingSelect bind:value={$checkboxStyles.size} />
    </AccordionItem>
    <AccordionItem id={8} {accordion} headerText="Transform">
      <TransformSelect bind:value={$checkboxStyles.transform} />
    </AccordionItem>
    <AccordionItem isLast id={9} {accordion} headerText="Transition">
      <TransitionSelect bind:value={$checkboxStyles.transition} />
    </AccordionItem>
  </Accordion>
</StyleGroup>
