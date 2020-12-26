<script lang="ts">
  import { HeaderStyle } from '../Header/HeaderStyle';
  import Accordion from '../Accordion/Accordion.svelte';
  import AccordionItem from '../Accordion/AccordionItem.svelte';
  import StyleGroup from './StyleGroup.svelte';
  import BorderSelect from '../../TailwindControls/Border/BorderSelect.svelte';
  import FontSelect from '../../TailwindControls/Font/FontSelect.svelte';
  import EffectsSelect from '../../TailwindControls/Effects/EffectsSelect.svelte';
  import TransformSelect from '../../TailwindControls/Transform/TransformSelect.svelte';
  import ColorsSelects from '../../TailwindControls/Color/ColorsSelects.svelte';
  import TransitionSelect from '../../TailwindControls/Transition/TransitionSelect.svelte';

  let accordion: Accordion;
  export let init: HeaderStyle;
  export let value: HeaderStyle = init || new HeaderStyle();
</script>

<StyleGroup on:closed header="Header Styles">
  <Accordion bind:this={accordion}>
    <AccordionItem isFirst id={0} {accordion} headerText="Background">
      <ColorsSelects prefix="bg" bind:value={value.color} />
    </AccordionItem>
    <AccordionItem id={1} {accordion} headerText="Border">
      <BorderSelect bind:value={value.border} />
    </AccordionItem>
    <AccordionItem id={2} {accordion} headerText="Font">
      <FontSelect bind:value={value.font} />
    </AccordionItem>
    <AccordionItem id={3} {accordion} headerText="Effects">
      <EffectsSelect bind:value={value.effects} />
    </AccordionItem>
    <AccordionItem id={4} {accordion} headerText="Transform">
      <TransformSelect bind:value={value.transform} />
    </AccordionItem>
    <AccordionItem isLast id={5} {accordion} headerText="Transition">
      <TransitionSelect bind:value={value.transition} />
    </AccordionItem>
  </Accordion>
</StyleGroup>
