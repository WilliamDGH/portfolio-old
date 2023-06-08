'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode } from "react";

interface Props {
  children?: ReactNode
  // any props that come into the component
}

export function Providers({ children }: Props) {
  return <ThemeProvider>{children}</ThemeProvider>
}
