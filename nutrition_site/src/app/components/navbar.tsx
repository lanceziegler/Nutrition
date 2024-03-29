'use client';
import React, { useState } from 'react';
import {
  createStyles,
  Navbar,
  Group,
  Code,
  getStylesRef,
  rem,
  Header,
} from '@mantine/core';
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
  IconAB,
  Icon3dRotate,
  IconHomeX,
  IconHome2,
  IconHome,
  IconCalendarCheck,
  IconDashboard,
  IconGraph,
  IconMeat,
} from '@tabler/icons-react';
import { MantineLogo } from '@mantine/ds';
import ThemeBtn from './ThemeBtn';
import { useSession, signIn, signOut } from 'next-auth/react';

const useStyles = createStyles((theme) => ({
  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,

      [`& .${getStylesRef('icon')}`]: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef('icon'),
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color,
      [`& .${getStylesRef('icon')}`]: {
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
          .color,
      },
    },
  },
}));

const data = [
  { link: '', label: 'Dashboard', icon: IconHome },
  { link: '', label: 'Meals', icon: IconMeat },
  { link: '', label: 'MyMetrics', icon: IconGraph },
  { link: '', label: 'Appointments', icon: IconCalendarCheck },
  { link: '', label: 'Other Settings', icon: IconSettings },
];

export default function NavbarComponent() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <Navbar height={700} width={{ sm: 300 }} p='md'>
      <Navbar.Section grow>
        <Group className={classes.header} position='apart'>
          <Header height={23}>NutritionPortal</Header>
          {/* <MantineLogo size={28} /> */}
          <Code sx={{ fontWeight: 700 }}>v1.0.0</Code>
        </Group>
        {links}
        <ThemeBtn />
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a
          href='#'
          className={classes.link}
          onClick={(event) => {
            event.preventDefault();
            signOut();
          }}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>

        {/* <a
          href='#'
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a> */}
      </Navbar.Section>
    </Navbar>
  );
}
