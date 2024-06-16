'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { AppContext, appInstance } from '@/app-providers/index';

import { Chakra as ChakraProvider } from '~/app-providers/Chakra';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraProvider>
        <AppContext.Provider value={appInstance}>
          {children}
        </AppContext.Provider>
      </ChakraProvider>
    </CacheProvider>
  );
};

export default Providers;
