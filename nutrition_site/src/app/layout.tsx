import './globals.css';
// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import RootStyleRegistry from './emotion';
import React from 'react';
import Provider from './components/Provider';

//! Original
// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang='en'>
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }

//* This function created via:
//* https://stackoverflow.com/questions/74328955/how-to-use-mantine-ui-with-next-13
//@ts-ignore
export default function RootLayout({ children }) {
  return (
    <html lang='en-US'>
      <head>
        {/**Manually added <title> myself */}
        <title>Nutrition</title>
      </head>
      <body>
        {/**@ts-ignore */}
        <Provider>
          <RootStyleRegistry>{children}</RootStyleRegistry>
        </Provider>
      </body>
    </html>
  );
}
