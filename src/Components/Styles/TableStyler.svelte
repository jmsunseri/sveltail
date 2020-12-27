<script lang="ts">
  import FontSelect from '../../TailwindControls/Font/FontSelect.svelte';
  import BorderSelect from '../../TailwindControls/Border/BorderSelect.svelte';
  import SpacingSelect from '../../TailwindControls/Spacing/SpacingSelect.svelte';
  import StyleGroup from './StyleGroup.svelte';
  import Accordion from '../Accordion/Accordion.svelte';
  import AccordionItem from '../Accordion/AccordionItem.svelte';
  import EffectsSelect from '../../TailwindControls/Effects/EffectsSelect.svelte';
  import DividerSelect from '../../TailwindControls/Divider/DividerSelect.svelte';
  import { TableStyles } from '../Table/TableStyles';
  import TransformSelect from '../../TailwindControls/Transform/TransformSelect.svelte';
  import ColorsSelects from '../../TailwindControls/Color/ColorsSelects.svelte';
  import TransitionSelect from '../../TailwindControls/Transition/TransitionSelect.svelte';

  let accordion: Accordion;
  export let value: TableStyles = new TableStyles();
</script>

<StyleGroup on:closed header="Table Styles">
  <Accordion bind:this={accordion}>
    <AccordionItem isFirst id={0} {accordion} headerText="Color">
      <ColorsSelects prefix="bg" bind:value={value.color} />
    </AccordionItem>
    <AccordionItem id={1} {accordion} headerText="Font">
      <FontSelect bind:value={value.font} />
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
    <AccordionItem id={5} {accordion} headerText="Divider">
      <DividerSelect bind:value={value.divider} />
    </AccordionItem>
    <AccordionItem id={6} {accordion} headerText="Transform">
      <TransformSelect bind:value={value.transform} />
    </AccordionItem>
    <AccordionItem id={6.1} {accordion} headerText="Transition">
      <TransitionSelect bind:value={value.transition} />
    </AccordionItem>
    <AccordionItem id={7} {accordion} headerText="Header Color">
      <ColorsSelects prefix="bg" bind:value={value.header.color} />
    </AccordionItem>
    <AccordionItem id={8} {accordion} headerText="Header Font">
      <FontSelect bind:value={value.header.font} />
    </AccordionItem>
    <AccordionItem id={9} {accordion} headerText="Header Border">
      <BorderSelect bind:value={value.header.border} />
    </AccordionItem>
    <AccordionItem id={10} {accordion} headerText="Header Divider">
      <DividerSelect bind:value={value.header.divider} />
    </AccordionItem>
    <AccordionItem id={11} {accordion} headerText="Header Effects">
      <EffectsSelect bind:value={value.header.effects} />
    </AccordionItem>
    <AccordionItem id={12} {accordion} headerText="Header Spacing">
      <SpacingSelect bind:value={value.header.spacing} />
    </AccordionItem>
    <AccordionItem id={13} {accordion} headerText="Header Transform">
      <TransformSelect bind:value={value.header.transform} />
    </AccordionItem>
    <AccordionItem id={13.1} {accordion} headerText="Header Transition">
      <TransitionSelect bind:value={value.header.transition} />
    </AccordionItem>
    <AccordionItem id={14} {accordion} headerText="Row Color">
      <ColorsSelects prefix="bg" bind:value={value.row.color} />
    </AccordionItem>
    <AccordionItem id={15} {accordion} headerText="Row Font">
      <FontSelect bind:value={value.row.font} />
    </AccordionItem>
    <AccordionItem id={16} {accordion} headerText="Row Border">
      <BorderSelect bind:value={value.row.border} />
    </AccordionItem>
    <AccordionItem id={17} {accordion} headerText="Row Divider">
      <DividerSelect bind:value={value.row.divider} />
    </AccordionItem>
    <AccordionItem id={18} {accordion} headerText="Row Effects">
      <EffectsSelect bind:value={value.row.effects} />
    </AccordionItem>
    <AccordionItem id={19} {accordion} headerText="Row Spacing">
      <SpacingSelect bind:value={value.row.spacing} />
    </AccordionItem>
    <AccordionItem id={20} {accordion} headerText="Row Transform">
      <TransformSelect bind:value={value.row.transform} />
    </AccordionItem>
    <AccordionItem isLast id={20.1} {accordion} headerText="Row Transition">
      <TransitionSelect bind:value={value.row.transition} />
    </AccordionItem>
  </Accordion>
</StyleGroup>
