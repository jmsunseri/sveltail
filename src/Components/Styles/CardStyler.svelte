<script lang="ts">
  import FontSelect from '../../TailwindControls/Font/FontSelect.svelte';
  import BorderSelect from '../../TailwindControls/Border/BorderSelect.svelte';
  import SpacingSelect from '../../TailwindControls/Spacing/SpacingSelect.svelte';
  import StyleGroup from './StyleGroup.svelte';
  import Accordion from '../Accordion/Accordion.svelte';
  import AccordionItem from '../Accordion/AccordionItem.svelte';
  import EffectsSelect from '../../TailwindControls/Effects/EffectsSelect.svelte';
  import { CardStyles } from '../Card/CardStyles';
  import TransformSelect from '../../TailwindControls/Transform/TransformSelect.svelte';
  import ColorsSelects from '../../TailwindControls/Color/ColorsSelects.svelte';

  let accordion: Accordion;
  export let value: CardStyles = new CardStyles();
</script>

<StyleGroup on:closed header="Card Styles">
  <Accordion bind:this={accordion}>
    <AccordionItem isFirst id={0} {accordion} headerText="Color">
      <ColorsSelects prefix="bg" bind:value={value.color} />
    </AccordionItem>
    <AccordionItem id={2} {accordion} headerText="Border">
      <BorderSelect bind:value={value.border} />
    </AccordionItem>
    <AccordionItem id={3} {accordion} headerText="Effects">
      <EffectsSelect bind:value={value.effects} />
    </AccordionItem>
    <AccordionItem id={4} {accordion} headerText="Spacing">
      <SpacingSelect bind:value={value.spacing} />
    </AccordionItem>
    <AccordionItem id={5} {accordion} headerText="Header Color">
      <ColorsSelects prefix="bg" bind:value={value.header.color} />
    </AccordionItem>
    <AccordionItem id={6} {accordion} headerText="Header Font">
      <FontSelect bind:value={value.header.font} />
    </AccordionItem>
    <AccordionItem id={7} {accordion} headerText="Header Border">
      <BorderSelect bind:value={value.header.border} />
    </AccordionItem>
    <AccordionItem id={8} {accordion} headerText="Header Spacing">
      <SpacingSelect bind:value={value.header.spacing} />
    </AccordionItem>
    <AccordionItem id={9} {accordion} headerText="Body Font">
      <FontSelect bind:value={value.container.font} />
    </AccordionItem>
    <AccordionItem id={10} {accordion} headerText="Body Spacing">
      <SpacingSelect bind:value={value.container.spacing} />
    </AccordionItem>
    <AccordionItem id={11} {accordion} headerText="Footer Color">
      <ColorsSelects prefix="bg" bind:value={value.footer.color} />
    </AccordionItem>
    <AccordionItem id={12} {accordion} headerText="Footer Font">
      <FontSelect bind:value={value.footer.font} />
    </AccordionItem>
    <AccordionItem id={13} {accordion} headerText="Footer Border">
      <BorderSelect bind:value={value.footer.border} />
    </AccordionItem>
    <AccordionItem id={14} {accordion} headerText="Footer Spacing">
      <SpacingSelect bind:value={value.footer.spacing} />
    </AccordionItem>
    <AccordionItem isLast id={15} {accordion} headerText="Transform">
      <TransformSelect bind:value={value.transform} />
    </AccordionItem>
  </Accordion>
</StyleGroup>
