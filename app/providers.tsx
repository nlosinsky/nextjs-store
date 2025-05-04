'use client';

import { ThemeProvider } from '@/app/theme-provider';
import { ToastProvider } from '@/components/ui/toast';

function Providers({children}: { children: React.ReactNode }) {
  return (
    <>
      <ToastProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </ToastProvider>
    </>
  )
}

export default Providers;
