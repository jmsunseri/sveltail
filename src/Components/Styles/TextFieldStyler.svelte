<script lang="ts">
  import { TextFieldStyles } from '../TextField/TextFieldStyles';
  import FontSelect from '../../TailwindControls/Font/FontSelect.svelte';
  import BorderSelect from '../../TailwindControls/Border/BorderSelect.svelte';
  import SizingSelect from '../../TailwindControls/Sizing/SizingSelect.svelte';
  import SpacingSelect from '../../TailwindControls/Spacing/SpacingSelect.svelte';
  import StyleGroup from './StyleGroup.svelte';
  import Accordion from '../Accordion/Accordion.svelte';
  import AccordionItem from '../Accordion/AccordionItem.svelte';
  import RingSelect from '../../TailwindControls/Ring/RingSelect.svelte';
  import TransformSelect from '../../TailwindControls/Transform/TransformSelect.svelte';
  import ColorsSelects from '../../TailwindControls/Color/ColorsSelects.svelte';
  import TransitionSelect from '../../TailwindControls/Transition/TransitionSelect.svelte';
  import PlaceholderSelect from '../../TailwindControls/Placeholder/PlaceholderSelect.svelte';

  let accordion: Accordion;
  export let value: TextFieldStyles = new TextFieldStyles();
</script>

<StyleGroup on:closed header="Text Field Styles">
  <Accordion bind:this={accordion}>
    <AccordionItem isFirst id={0} {accordion} headerText="Color">
      <ColorsSelects prefix="bg" bind:value={value.color} />
    </AccordionItem>
    <AccordionItem id={2} {accordion} headerText="Font">
      <FontSelect bind:value={value.font} />
    </AccordionItem>
    <AccordionItem id={2.5} {accordion} headerText="Placeholder">
      <PlaceholderSelect bind:value={value.placeholder} />
    </AccordionItem>
    <AccordionItem id={3} {accordion} headerText="Border">
      <BorderSelect bind:value={value.border} />
    </AccordionItem>
    <AccordionItem id={4} {accordion} headerText="Ring">
      <RingSelect bind:value={value.ring} />
    </AccordionItem>
    <AccordionItem id={6} {accordion} headerText="Spacing">
      <SpacingSelect bind:value={value.spacing} />
    </AccordionItem>
    <AccordionItem id={7} {accordion} headerText="Icon">
      <div class="flex-col flex gap-1">
        <SizingSelect bind:value={value.icon.size} />
        <ColorsSelects prefix="text" bind:value={value.icon.color} />
      </div>
    </AccordionItem>
    <AccordionItem id={8} {accordion} headerText="Transform">
      <TransformSelect bind:value={value.transform} />
    </AccordionItem>
    <AccordionItem isLast id={9} {accordion} headerText="Transition">
      <TransitionSelect bind:value={value.transition} />
    </AccordionItem>
  </Accordion>
</StyleGroup>
