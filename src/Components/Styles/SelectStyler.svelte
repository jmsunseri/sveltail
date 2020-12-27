<script lang="ts">
  import FontSelect from '../../TailwindControls/Font/FontSelect.svelte';
  import BorderSelect from '../../TailwindControls/Border/BorderSelect.svelte';
  import SizingSelect from '../../TailwindControls/Sizing/SizingSelect.svelte';
  import SpacingSelect from '../../TailwindControls/Spacing/SpacingSelect.svelte';
  import StyleGroup from './StyleGroup.svelte';
  import Accordion from '../Accordion/Accordion.svelte';
  import AccordionItem from '../Accordion/AccordionItem.svelte';
  import RingSelect from '../../TailwindControls/Ring/RingSelect.svelte';
  import { SelectStyles } from '../Select/SelectStyle';
  import EffectsSelect from '../../TailwindControls/Effects/EffectsSelect.svelte';
  import DividerSelect from '../../TailwindControls/Divider/DividerSelect.svelte';
  import TransformSelect from '../../TailwindControls/Transform/TransformSelect.svelte';
  import ColorsSelects from '../../TailwindControls/Color/ColorsSelects.svelte';
  import TransitionSelect from '../../TailwindControls/Transition/TransitionSelect.svelte';

  let accordion: Accordion;
  export let value: SelectStyles = new SelectStyles();
</script>

<StyleGroup on:closed header="Select Styles">
  <Accordion bind:this={accordion}>
    <AccordionItem isFirst id={0} {accordion} headerText="Button Color">
      <ColorsSelects prefix="bg" bind:value={value.button.color} />
    </AccordionItem>
    <AccordionItem id={1} {accordion} headerText="Button Font">
      <FontSelect bind:value={value.button.font} />
    </AccordionItem>
    <AccordionItem id={2} {accordion} headerText="Button Border">
      <BorderSelect bind:value={value.button.border} />
    </AccordionItem>
    <AccordionItem id={3} {accordion} headerText="Button Ring">
      <RingSelect bind:value={value.button.ring} />
    </AccordionItem>
    <AccordionItem id={4} {accordion} headerText="Button Effects">
      <EffectsSelect bind:value={value.button.effects} />
    </AccordionItem>
    <AccordionItem id={5} {accordion} headerText="Button Spacing">
      <SpacingSelect bind:value={value.button.spacing} />
    </AccordionItem>
    <AccordionItem id={6} {accordion} headerText="Button Icon">
      <div class="flex-col flex gap-1">
        <SizingSelect bind:value={value.button.icon.size} />
        <ColorsSelects prefix="text" bind:value={value.button.icon.color} />
      </div>
    </AccordionItem>
    <AccordionItem id={7} {accordion} headerText="Button Transform">
      <TransformSelect bind:value={value.button.transform} />
    </AccordionItem>
    <AccordionItem id={7.1} {accordion} headerText="Button Transition">
      <TransitionSelect bind:value={value.button.transition} />
    </AccordionItem>
    <AccordionItem id={8} {accordion} headerText="Menu Color">
      <ColorsSelects prefix="bg" bind:value={value.menu.color} />
    </AccordionItem>
    <AccordionItem id={9} {accordion} headerText="Menu Font">
      <FontSelect bind:value={value.menu.font} />
    </AccordionItem>
    <AccordionItem id={10} {accordion} headerText="Menu Border">
      <BorderSelect bind:value={value.menu.border} />
    </AccordionItem>
    <AccordionItem id={11} {accordion} headerText="Menu Divider">
      <DividerSelect bind:value={value.menu.divider} />
    </AccordionItem>
    <AccordionItem id={12} {accordion} headerText="Menu Effects">
      <EffectsSelect bind:value={value.menu.effects} />
    </AccordionItem>
    <AccordionItem id={13} {accordion} headerText="Menu Spacing">
      <SpacingSelect bind:value={value.menu.spacing} />
    </AccordionItem>
    <AccordionItem id={14} {accordion} headerText="Menu Transform">
      <TransformSelect bind:value={value.menu.transform} />
    </AccordionItem>
    <AccordionItem id={14.1} {accordion} headerText="Menu Transition">
      <TransitionSelect bind:value={value.menu.transition} />
    </AccordionItem>
    <AccordionItem id={15} {accordion} headerText="Menu Item Font">
      <div class="text-xs">(toggle dropdown for changes to take effect)</div>
      <FontSelect bind:value={value.menuItem.font} />
    </AccordionItem>
    <AccordionItem id={16} {accordion} headerText="Menu Item Spacing">
      <div class="text-xs">(toggle dropdown for changes to take effect)</div>
      <SpacingSelect bind:value={value.menuItem.spacing} />
    </AccordionItem>
    <AccordionItem id={17} {accordion} headerText="Menu Item Transform">
      <div class="text-xs">(toggle dropdown for changes to take effect)</div>
      <TransformSelect bind:value={value.menuItem.transform} />
    </AccordionItem>
    <AccordionItem id={17.1} {accordion} headerText="Menu Item Transition">
      <div class="text-xs">(toggle dropdown for changes to take effect)</div>
      <TransitionSelect bind:value={value.menuItem.transition} />
    </AccordionItem>
    <AccordionItem isLast id={18} {accordion} headerText="Menu Item Color">
      <div class="text-xs">(toggle dropdown for changes to take effect)</div>
      <ColorsSelects prefix="bg" bind:value={value.menuItem.color} />
    </AccordionItem>
  </Accordion>
</StyleGroup>
