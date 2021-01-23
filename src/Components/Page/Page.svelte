<script lang="ts">
  import Button from '../Button/Button.svelte';
  import Card from '../Card/Card.svelte';
  import Select from '../Select/Select.svelte';
  import SelectOption from '../Select/SelectOption.svelte';
  import { Search, SmartHome } from 'tabler-icons-svelte';
  import {
    headerStyles,
    primaryButtonStyles,
    secondaryButtonStyles,
    selectStyles,
    pageStyles,
    textFieldStyles,
    cardStyles,
    tooltipStyles,
  } from '../../store';
  import Header from '../Header/Header.svelte';
  import TextField from '../TextField/TextField.svelte';
  import Tooltip from '../Tooltip/Tooltip.svelte';
  import Table from './Table.svelte';
  import Grid from '../Grid/Grid.svelte';
  import { FlexSize, FlexDirection, FlexGrow } from '../../Models/Flex';
  import { JustifyContent } from '../../Models/Justify';
  import Flex from '../Flex/Flex.svelte';

  let select: Select;
  let petType: string;
</script>

<Flex
  grow={FlexGrow.Grow}
  direction={FlexDirection.Col}
  css={$pageStyles.toStyles()}
>
  <Header styles={$headerStyles}>
    <div slot="icon">
      <SmartHome
        size={$headerStyles.icon.size}
        strokeWidth={$headerStyles.icon.stroke}
      />
    </div>
    <div slot="brand">Pet Finder</div>
    <div slot="menu" class="hover:underline cursor-pointer">Account</div>
  </Header>
  <div class="px-4 pb-4">
    <Flex flex={FlexSize.One} direction={FlexDirection.Col} gap={3}>
      <Grid
        gap={3}
        template={[
          ['rows', 2],
          ['cols', 1],
        ]}
        templateMd={[
          ['cols', 2],
          ['rows', 1],
        ]}
      >
        <TextField styles={$textFieldStyles} placeholder="Pet's Name">
          <span slot="trailingIcon">
            <Search
              size={$textFieldStyles.icon.size}
              strokeWidth={$textFieldStyles.icon.stroke}
            />
          </span>
        </TextField>
        <div class="flex gap-3">
          <Select
            bind:this={select}
            bind:value={petType}
            isMenuOpen
            placeholder="Pet Type"
            mustHaveValue
            styles={$selectStyles}
          >
            <SelectOption {select} value="Dog">Dog</SelectOption>
            <SelectOption {select} value="Cat">Cat</SelectOption>
            <SelectOption {select} value="Bird">Bird</SelectOption>
          </Select>
          <Tooltip styles={$tooltipStyles} visible>
            <Button styles={$primaryButtonStyles}>
              Search
              <span slot="icon">
                <Search
                  size={$primaryButtonStyles.icon.size}
                  strokeWidth={$primaryButtonStyles.icon.stroke}
                />
              </span>
            </Button>
            <div slot="tooltip">I'm a tooltip!!!</div>
          </Tooltip>
        </div>
      </Grid>
      <div class="text-2xl mt-28">Found Dogs:</div>
      <Table />
    </Flex>
    <div>
      <Card styles={$cardStyles}>
        <div slot="header">Dog Profile</div>
        <Flex
          directionMd={FlexDirection.Row}
          gapMd={2}
          direction={FlexDirection.Col}
        >
          <img alt="Doge" class="h-40 w-40" src="/shiba.jpg" />
          <Flex direction={FlexDirection.Col} gap={1}>
            <Flex direction={FlexDirection.Row} gap={1}><b>Name:</b> Doge</Flex>
            <Flex direction={FlexDirection.Row} gap={1}
              ><b>Gender:</b> Female</Flex
            >
            <Flex direction={FlexDirection.Row} gap={1}
              ><b>DOB:</b> Nov, 2 2005</Flex
            >
            <Flex direction={FlexDirection.Row} gap={1}>
              <b>Bio:</b>
              <p>
                An Internet meme that became popular in 2013. The meme typically
                consists of a picture of a Shiba Inu dog accompanied by
                multicolored text in Comic Sans font in the foreground.
              </p>
            </Flex>
          </Flex>
        </Flex>
        <div slot="footer">
          <Flex
            direction={FlexDirection.Row}
            justifyContent={JustifyContent.End}
          >
            <Button styles={$secondaryButtonStyles}>Adopt Me</Button>
          </Flex>
        </div>
      </Card>
    </div>
  </div>
</Flex>
