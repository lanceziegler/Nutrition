'use client';

import React, { Suspense } from 'react';
import { useEffect, useState } from 'react';
import {
  Button,
  ColorScheme,
  Loader,
  Title,
  Container,
  Stack,
} from '@mantine/core';
import { useMantineColorScheme } from '@mantine/core';
import Loading from './loading';

function Page() {
  const [message, setMessage] = useState('');
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const handleColorSchemeToggle = () => {
    toggleColorScheme(); // Call the toggleColorScheme function
  };
  console.log('Hello');

  useEffect(() => {
    fetch('http://localhost:8080/api/home')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMessage(data.message);
        setPeople(data.people);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {/* {isLoading ? <div>loading...</div> : null} */}
      {/* {isLoading ? <Loader color='red'></Loader> : null} */}
      <div>{message}</div>
      {people.map((person, index) => (
        <div key={index}>{person}</div>
      ))}
      {/* <People /> */}

      <Title align='center' color='orange.7'>
        Title placeholder
      </Title>
      <Title>{colorScheme}</Title>
      <Button variant='default' onClick={handleColorSchemeToggle}>
        Change color scheme
      </Button>
    </>
  );
}

export default Page;
