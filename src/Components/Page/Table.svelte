<script lang="ts">
  import { checkboxStyles, tableStyles } from '../../store';
  import Checkbox from '../Checkbox/Checkbox.svelte';
</script>

<div class={`flex flex-col ${$tableStyles.toStyles()}`}>
  <div
    class={`flex flex-row gap-3 items-center ${$tableStyles.header.toStyles()}`}>
    <div
      class={`${$checkboxStyles.size.height || ''} ${$checkboxStyles.size.width || ''}`} />
    <div class="flex-1">Name</div>
    <div class="flex-1">Type</div>
    <div class="flex-1">Breed</div>
    <div class="flex-1">Distance</div>
  </div>
  <div
    class={`flex flex-row gap-3 items-center ${$tableStyles.row.toStyles()}`}>
    <Checkbox style={$checkboxStyles} />
    <div class="flex-1">Fido</div>
    <div class="flex-1">Dog</div>
    <div class="flex-1">Hound</div>
    <div class="flex-1">10km</div>
  </div>
  <div
    class={`flex flex-row gap-3 items-center ${$tableStyles.row.toStyles()}`}>
    <Checkbox checked style={$checkboxStyles} />
    <div class="flex-1">Doge</div>
    <div class="flex-1">Dog</div>
    <div class="flex-1">Shiba Inu</div>
    <div class="flex-1">1km</div>
  </div>
  <div
    class={`flex flex-row gap-3 items-center ${$tableStyles.row.toStyles()}`}>
    <Checkbox style={$checkboxStyles} />
    <div class="flex-1">Fifi</div>
    <div class="flex-1">Dog</div>
    <div class="flex-1">Poodle</div>
    <div class="flex-1">7km</div>
  </div>
  <div
    class={`flex flex-row gap-3 items-center ${$tableStyles.row.toStyles()}`}>
    <Checkbox style={$checkboxStyles} />
    <div class="flex-1">Gaston</div>
    <div class="flex-1">Dog</div>
    <div class="flex-1">French Bulldog</div>
    <div class="flex-1">5km</div>
  </div>
  <div
    class={`flex flex-row gap-3 items-center ${$tableStyles.row.toStyles()}`}>
    <Checkbox style={$checkboxStyles} />
    <div class="flex-1">Floyd</div>
    <div class="flex-1">Dog</div>
    <div class="flex-1">Pug</div>
    <div class="flex-1">3km</div>
  </div>
</div>
