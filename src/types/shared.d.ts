export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type GeneratedType = {
  title: string;
  publishedAt: string;
  description: string;
  seoDescription: string;
  category: string;
  author?: Author | undefined;
  image: string;
  tags?: Tag[];
  body: Body;
  _id: string;
  _raw: GeneratedTypeRaw;
  type: string;
  readingTime: ReadingTime;
  wordCount: number;
  slug: string;
};

export interface GeneratedTypeRaw {
  sourceFilePath: string;
  sourceFileName: string;
  sourceFileDir: string;
  contentType: string;
  flattenedPath: string;
}

export interface Author {
  name: string;
  image: string;
  type: string;
  _raw: {};
}

export interface Body {
  raw: string;
  code: string;
}

export interface ReadingTime {
  text: string;
  minutes: number;
  time: number;
  words: number;
}

export interface Tag {
  title: string;
  type: string;
  _raw: AuthorRaw;
}
