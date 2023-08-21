'use client';

import React from 'react';
import { useMantineColorScheme } from '@mantine/core';
import { Button } from '@mantine/core';
import {
  createStyles,
  UnstyledButton,
  Text,
  Center,
  Group,
  rem,
} from '@mantine/core';
import { upperFirst } from '@mantine/hooks';
import { IconMoon, IconSun } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  control: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[8]
        : theme.colors.gray[0],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 1000,
    paddingLeft: theme.spacing.sm,
    paddingRight: rem(4),
    width: rem(136),
    height: rem(36),
  },

  iconWrapper: {
    height: rem(28),
    width: rem(28),
    borderRadius: rem(28),
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[4]
        : theme.colors.yellow[2],
    color:
      theme.colorScheme === 'dark' ? theme.colors.blue[2] : theme.colors.dark,
  },

  value: {
    lineHeight: 1,
  },
}));

function ThemeBtn() {
  const { classes } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const Icon = colorScheme === 'dark' ? IconMoon : IconSun;
  const handleColorSchemeToggle = () => {
    toggleColorScheme(); // Call the toggleColorScheme function
  };

  return (
    <div>
      {/* <Button variant='default' onClick={handleColorSchemeToggle}>
        Change color scheme
      </Button> */}
      <Group position='left' my='xl'>
        <UnstyledButton
          aria-label='Toggle theme'
          className={classes.control}
          onClick={() => toggleColorScheme()}
          title='Ctrl + J'
        >
          <Text size='sm' className={classes.value}>
            {upperFirst(colorScheme === 'light' ? 'light' : 'dark')} theme
          </Text>

          <Center className={classes.iconWrapper}>
            <Icon size='1.05rem' stroke={1.5} />
          </Center>
        </UnstyledButton>
      </Group>
    </div>
  );
}

export default ThemeBtn;
