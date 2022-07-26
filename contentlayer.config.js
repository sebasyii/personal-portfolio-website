import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";

import readingTime from "reading-time";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSanitize from "rehype-sanitize";

import { h, s } from "hastscript";

const options = {
  // Use one of Shiki's packaged themes
  theme: "one-dark-pro",

  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
};

const computedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: "number",
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
  },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
  },
};

const Author = defineNestedType(() => ({
  name: "Author",
  fields: {
    name: { type: "string", required: true },
    image: { type: "string", required: true },
  },
}));

const Tag = defineNestedType(() => ({
  name: "Tag",
  fields: {
    title: {
      type: "string",
      required: true,
    },
  },
}));

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "posts/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    description: { type: "string", required: true },
    seoDescription: { type: "string", required: true },
    category: { type: "string", required: true },
    author: {
      type: "nested",
      of: Author,
    },
    image: { type: "string", required: true },
    tags: {
      type: "list",
      of: Tag,
    },
  },
  computedFields,
}));

const contentLayerConfig = makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,

      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
          properties: {
            className: ["anchor"],
          },
          // content: (node) =>
          //   s(
          //     "svg",
          //     {
          //       className: "icon",
          //       viewBox: "0 0 24 24",
          //       xmlns: "http://www.w3.org/2000/svg",
          //       fill: "none",
          //       stroke: "currentColor",
          //       strokeWidth: "2",
          //       strokeLinecap: "round",
          //       strokeLineJoin: "round",
          //       height: "1em",
          //       width: "1em",
          //       position: "absolute",
          //     },
          //     [
          //       s("path", {
          //         d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
          //       }),
          //       s("path", {
          //         d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
          //       }),
          //     ]
          //   ),
        },
      ],
      [rehypePrettyCode, options],
    ],
  },
});

export default contentLayerConfig;
