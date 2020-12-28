<script lang="ts">
  import Accordion from '../../Components/Accordion/Accordion.svelte';
  import AccordionItem from '../../Components/Accordion/AccordionItem.svelte';
  import StyleGroup from '../StyleGroup.svelte';
  import FontSelect from '../../TailwindControls/Font/FontSelect.svelte';
  import SpacingSelect from '../../TailwindControls/Spacing/SpacingSelect.svelte';
  import TransitionSelect from '../../TailwindControls/Transition/TransitionSelect.svelte';
  import ColorsSelects from '../../TailwindControls/Color/ColorsSelects.svelte';

  import { viewerStyles } from '../../store';

  let accordion: Accordion;
</script>

<StyleGroup on:closed header="Global Styles">
  <Accordion bind:this={accordion}>
    <AccordionItem isFirst id={0} {accordion} headerText="Background">
      <ColorsSelects prefix="bg" bind:value={$viewerStyles.color} />
    </AccordionItem>
    <AccordionItem id={1} {accordion} headerText="Spacing">
      <SpacingSelect bind:value={$viewerStyles.spacing} />
    </AccordionItem>
    <AccordionItem id={2} {accordion} headerText="Font">
      <FontSelect bind:value={$viewerStyles.font} />
    </AccordionItem>
    <AccordionItem isLast id={3} {accordion} headerText="Transition">
      <TransitionSelect bind:value={$viewerStyles.transition} />
    </AccordionItem>
  </Accordion>
</StyleGroup>
