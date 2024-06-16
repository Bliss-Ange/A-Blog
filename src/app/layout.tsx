// this is my router page
// i need to config the routing system

// import router
'use client';

import * as React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CssBaseline, Box } from '@mui/material';

import NavBar from "./components/NavBar";
import Homepage from "../pages/homepage";

const inter = Inter({ subsets: ["latin"] });


interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {

  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <NavBar></NavBar>
        <Homepage/>
      </body>
    </html>
  );
}
