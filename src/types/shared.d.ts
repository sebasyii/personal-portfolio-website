export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export interface MDXComponentsProps<T> {
  props?: T;
  href?: string;
  children: ReactNode;
}
