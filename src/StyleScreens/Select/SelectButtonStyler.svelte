<script lang="ts">
  import FontSelect from '../../TailwindControls/Font/FontSelect.svelte';
  import BorderSelect from '../../TailwindControls/Border/BorderSelect.svelte';
  import SizingSelect from '../../TailwindControls/Sizing/SizingSelect.svelte';
  import SpacingSelect from '../../TailwindControls/Spacing/SpacingSelect.svelte';
  import StyleGroup from '../StyleGroup.svelte';
  import Accordion from '../../Components/Accordion/Accordion.svelte';
  import AccordionItem from '../../Components/Accordion/AccordionItem.svelte';
  import RingSelect from '../../TailwindControls/Ring/RingSelect.svelte';
  import EffectsSelect from '../../TailwindControls/Effects/EffectsSelect.svelte';
  import TransformSelect from '../../TailwindControls/Transform/TransformSelect.svelte';
  import ColorsSelects from '../../TailwindControls/Color/ColorsSelects.svelte';
  import TransitionSelect from '../../TailwindControls/Transition/TransitionSelect.svelte';
  import { selectStyles } from '../../store';

  let accordion: Accordion;
</script>

<StyleGroup on:closed header="Button Styles">
  <Accordion bind:this={accordion}>
    <AccordionItem isFirst id={0} {accordion} headerText="Color">
      <ColorsSelects prefix="bg" bind:value={$selectStyles.button.color} />
    </AccordionItem>
    <AccordionItem id={1} {accordion} headerText="Font">
      <FontSelect bind:value={$selectStyles.button.font} />
    </AccordionItem>
    <AccordionItem id={2} {accordion} headerText="Border">
      <BorderSelect bind:value={$selectStyles.button.border} />
    </AccordionItem>
    <AccordionItem id={3} {accordion} headerText="Ring">
      <RingSelect bind:value={$selectStyles.button.ring} />
    </AccordionItem>
    <AccordionItem id={4} {accordion} headerText="Button Effects">
      <EffectsSelect bind:value={$selectStyles.button.effects} />
    </AccordionItem>
    <AccordionItem id={5} {accordion} headerText="Button Spacing">
      <SpacingSelect bind:value={$selectStyles.button.spacing} />
    </AccordionItem>
    <AccordionItem id={6} {accordion} headerText="Button Icon">
      <div class="flex-col flex gap-1">
        <SizingSelect bind:value={$selectStyles.button.icon.size} />
        <ColorsSelects
          prefix="text"
          bind:value={$selectStyles.button.icon.color} />
      </div>
    </AccordionItem>
    <AccordionItem id={7} {accordion} headerText="Transform">
      <TransformSelect bind:value={$selectStyles.button.transform} />
    </AccordionItem>
    <AccordionItem isLast id={8} {accordion} headerText="Transition">
      <TransitionSelect bind:value={$selectStyles.button.transition} />
    </AccordionItem>
  </Accordion>
</StyleGroup>
