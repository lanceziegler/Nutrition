import React, { Suspense } from 'react';
import {
  Button,
  ColorScheme,
  Loader,
  Title,
  Container,
  Stack,
} from '@mantine/core';
import connectDB from '../../utils/database';
// Project Components
import NavbarComponent from './components/Navbar';
import SignInOut from './components/SignInOut';
import { AuthenticationForm } from './components/AuthBox';
import User from '../../models/user';


function Page() {
  return (
    <>
      <div className='portal'>
        <NavbarComponent></NavbarComponent>
        <AuthenticationForm className='authBox' maw={430} />
      </div>
    </>
  );
}

export default Page;
