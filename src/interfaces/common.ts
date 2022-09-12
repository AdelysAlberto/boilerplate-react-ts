import { LazyExoticComponent, ReactNode } from 'react';

export interface IReactChildren {
  children: ReactNode
}

export type TFCLazy = LazyExoticComponent<React.FC<any>>
export type TLazy = LazyExoticComponent<() => JSX.Element>
export type TLazyUnion = TLazy | TFCLazy;