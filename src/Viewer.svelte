<script lang="ts">
  import Button from './Components/Button/Button.svelte';
  import Card from './Components/Card/Card.svelte';
  import Select from './Components/Select/Select.svelte';
  import SelectOption from './Components/Select/SelectOption.svelte';
  import IoIosSearch from 'svelte-icons/io/IoIosSearch.svelte';
  import {
    headerStyles,
    primaryButtonStyles,
    secondaryButtonStyles,
    selectStyles,
    viewerStyles,
    textFieldStyles,
    checkboxStyles,
    tableStyles,
    cardStyles,
  } from './store';
  import Header from './Components/Header/Header.svelte';
  import TextField from './Components/TextField/TextField.svelte';
  import Checkbox from './Components/Checkbox/Checkbox.svelte';

  let select: Select;
  let petType: string;
</script>

<div
  class={`flex-grow border-l-2 border-dashed border-gray-300 flex flex-col ${$viewerStyles.toStyles()}`}>
  <Header styles={$headerStyles}>Pet Finder</Header>
  <div class="px-4">
    <div class="flex flex-row gap-3">
      <div class="flex flex-1 flex-col gap-3">
        <div class="flex flex-row gap-3">
          <TextField styles={$textFieldStyles} placeholder="Pet's Name">
            <span slot="trailingIcon">
              <IoIosSearch />
            </span>
          </TextField>
          <div class="w-44">
            <Select
              bind:this={select}
              bind:value={petType}
              isMenuOpen
              placeholder="Pet Type"
              styles={$selectStyles}>
              <SelectOption {select} value="Dog">Dog</SelectOption>
              <SelectOption {select} value="Cat">Cat</SelectOption>
              <SelectOption {select} value="Bird">Bird</SelectOption>
            </Select>
          </div>

          <Button styles={$primaryButtonStyles}>
            Search
            <span slot="icon">
              <IoIosSearch />
            </span>
          </Button>
        </div>
        <div class="text-2xl mt-28">Found Dogs:</div>
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
      </div>
    </div>

    <div class="w-96">
      <Card styles={$cardStyles}>
        <div slot="header">Dog Profile</div>

        <div class="flex flex-row gap-2">
          <img
            alt="Doge"
            class="h-40 w-40"
            src="https://upload.wikimedia.org/wikipedia/commons/5/58/Shiba_inu_taiki.jpg" />
          <div class="flex flex-col gap-1">
            <div class="flex flex-row gap-1"><b>Name:</b> Doge</div>
            <div class="flex flex-row gap-1"><b>Gender:</b> Female</div>
            <div class="flex flex-row gap-1"><b>DOB:</b> Nov, 2 2005</div>
            <div class="flex flex-row gap-1">
              <b>Bio:</b>
              <p>
                An Internet meme that became popular in 2013. The meme typically
                consists of a picture of a Shiba Inu dog accompanied by
                multicolored text in Comic Sans font in the foreground.
              </p>
            </div>
          </div>
        </div>
        <div slot="footer">
          <div class="flex flex-row justify-end">
            <Button styles={$secondaryButtonStyles}>Adopt Me</Button>
          </div>
        </div>
      </Card>
    </div>
  </div>
</div>
