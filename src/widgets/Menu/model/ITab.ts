import { ReactNode } from 'react';
import { RoutePathValue } from '@/shared/config/routeConfig/routeConfig.tsx';

export interface ITab {
  label: string,
  path: RoutePathValue,
  startIcon?: ReactNode,
}
