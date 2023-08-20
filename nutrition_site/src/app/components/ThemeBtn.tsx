'use client';

import React from 'react';
import { useMantineColorScheme } from '@mantine/core';
import { Button } from '@mantine/core';

function ThemeBtn() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const handleColorSchemeToggle = () => {
    toggleColorScheme(); // Call the toggleColorScheme function
  };

  return (
    <div>
      <Button variant='default' onClick={handleColorSchemeToggle}>
        Change color scheme
      </Button>
    </div>
  );
}

export default ThemeBtn;
