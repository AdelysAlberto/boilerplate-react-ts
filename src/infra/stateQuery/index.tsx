import { FC } from 'react'

import { QueryClient, QueryClientProvider } from "react-query";
import { IReactChildren } from '../../interfaces/common';


const StateQuery: FC<IReactChildren> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

export default StateQuery;