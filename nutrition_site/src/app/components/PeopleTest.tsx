'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import { Loader } from '@mantine/core';

function PeopleTest() {
  const [message, setMessage] = useState('');
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {isLoading ? <div>loading...</div> : null}
      {isLoading ? <Loader color='red'></Loader> : null}
      <div>{message}</div>
      {people.map((person, index) => (
        <div key={index}>{person}</div>
      ))}
    </div>
  );
}

export default PeopleTest;
