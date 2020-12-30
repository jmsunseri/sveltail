<script lang="ts">
  import FontSelect from '../../TailwindControls/Font/FontSelect.svelte';
  import BorderSelect from '../../TailwindControls/Border/BorderSelect.svelte';
  import SpacingSelect from '../../TailwindControls/Spacing/SpacingSelect.svelte';
  import StyleGroup from '../StyleGroup.svelte';
  import Accordion from '../../Components/Accordion/Accordion.svelte';
  import AccordionItem from '../../Components/Accordion/AccordionItem.svelte';
  import TransformSelect from '../../TailwindControls/Transform/TransformSelect.svelte';
  import ColorsSelects from '../../TailwindControls/Color/ColorsSelects.svelte';
  import TransitionSelect from '../../TailwindControls/Transition/TransitionSelect.svelte';

  let accordion: Accordion;
  import { cardStyles } from '../../store';
</script>

<StyleGroup on:closed header="Footer Styles" bind:style={$cardStyles.footer}>
  <Accordion bind:this={accordion}>
    <AccordionItem isFirst id={1} {accordion} headerText="Color">
      <ColorsSelects prefix="bg" bind:value={$cardStyles.footer.color} />
    </AccordionItem>
    <AccordionItem id={2} {accordion} headerText="Font">
      <FontSelect bind:value={$cardStyles.footer.font} />
    </AccordionItem>
    <AccordionItem id={3} {accordion} headerText="Border">
      <BorderSelect bind:value={$cardStyles.footer.border} />
    </AccordionItem>
    <AccordionItem id={4} {accordion} headerText="Spacing">
      <SpacingSelect bind:value={$cardStyles.footer.spacing} />
    </AccordionItem>
    <AccordionItem id={5} {accordion} headerText="Transform">
      <TransformSelect bind:value={$cardStyles.footer.transform} />
    </AccordionItem>
    <AccordionItem isLast id={6} {accordion} headerText="Transition">
      <TransitionSelect bind:value={$cardStyles.footer.transition} />
    </AccordionItem>
  </Accordion>
</StyleGroup>
