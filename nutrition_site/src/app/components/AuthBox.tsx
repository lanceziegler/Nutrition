'use client';

import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { useSession, signIn, signOut } from 'next-auth/react';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from '@mantine/core';
import { GoogleButton, TwitterButton } from './SocialButtons';
import Link from 'next/link';
import Image from 'next/image';

export function AuthenticationForm(props: PaperProps) {
  const { data: session, status } = useSession();

  const [type, toggle] = useToggle(['login', 'register']);
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) =>
        val.length <= 6
          ? 'Password should include at least 6 characters'
          : null,
    },
  });
  if (status === 'authenticated') {
    return (
      <>
        <p>Welcome, {session?.user?.name}!</p>
        <p>...</p>
        <p>Signed in as {session?.user?.email}</p>

        <Image
          src={session?.user?.image || ''}
          alt='user picture'
          width={50}
          height={50}
        />
      </>
    );
  }

  return (
    <Paper radius='md' p='xl' withBorder {...props}>
      <Text size='lg' weight={500}>
        Welcome to NutritionPortal, {type} with
      </Text>

      <Group grow mb='md' mt='md'>
        <GoogleButton radius='xl'>Google</GoogleButton>
        <TwitterButton radius='xl'>Twitter</TwitterButton>
      </Group>

      <Divider label='Or continue with email' labelPosition='center' my='lg' />

      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
          {type === 'register' && (
            <TextInput
              label='Name'
              placeholder='Your name'
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue('name', event.currentTarget.value)
              }
              radius='md'
            />
          )}

          <TextInput
            required
            label='Email'
            placeholder='hello@email.com'
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue('email', event.currentTarget.value)
            }
            error={form.errors.email && 'Invalid email'}
            radius='md'
          />

          <PasswordInput
            required
            label='Password'
            placeholder='Your password'
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue('password', event.currentTarget.value)
            }
            error={
              form.errors.password &&
              'Password should include at least 6 characters'
            }
            radius='md'
          />

          {type === 'register' && (
            <Checkbox
              label='I accept terms and conditions'
              checked={form.values.terms}
              onChange={(event) =>
                form.setFieldValue('terms', event.currentTarget.checked)
              }
            />
          )}
        </Stack>

        <Group position='apart' mt='xl'>
          <Anchor
            component='button'
            type='button'
            color='dimmed'
            onClick={() => toggle()}
            size='xs'
          >
            {type === 'register'
              ? 'Already have an account? Login'
              : "Don't have an account? Register"}
          </Anchor>
          <Button type='submit' radius='xl'>
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
  );
}
