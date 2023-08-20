' use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import React from 'react';

function SignInOut() {
  const { data: session } = useSession();

  return (
    <div>
      <h2>Sign in with Google</h2>
      <button onClick={() => signIn('google')}>Sign In</button>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}

export default SignInOut;
