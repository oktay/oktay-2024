/* eslint-disable jsx-a11y/alt-text */

"use client";

import {
  isBlockquote,
  isCode,
  isHeading,
  isLink,
  isList,
  isListItem,
  isParagraph,
  isThematicBreak,
} from "datocms-structured-text-utils";
import {
  Image,
  renderMarkRule,
  renderNodeRule,
  StructuredText,
  type StructuredTextGraphQlResponse,
} from "react-datocms";

import type { ImageBlockRecord } from "@/types";

import {
  Anchor,
  Blockquote,
  CodeBlock,
  Heading,
  InlineCode,
  List,
  ListItem,
  Paragraph,
  ThematicBreak,
} from "./typography";

type Props = {
  data: StructuredTextGraphQlResponse<ImageBlockRecord>;
};

export default function PostStructuredText({ data }: Props) {
  return (
    <StructuredText
      data={data}
      customMarkRules={[
        renderMarkRule("code", ({ children, key }) => (
          <InlineCode key={key}>{children}</InlineCode>
        )),
      ]}
      customNodeRules={[
        renderNodeRule(isHeading, ({ node, children, key }) => (
          <Heading key={key} level={node.level}>
            {children}
          </Heading>
        )),
        renderNodeRule(isParagraph, ({ children, key }) => (
          <Paragraph key={key}>{children}</Paragraph>
        )),
        renderNodeRule(isListItem, ({ children, key }) => (
          <ListItem key={key}>{children}</ListItem>
        )),
        renderNodeRule(isList, ({ node, children, key }) => (
          <List key={key} ordered={node.style === "numbered"}>
            {children}
          </List>
        )),
        renderNodeRule(isBlockquote, ({ children, key }) => (
          <Blockquote key={key}>{children}</Blockquote>
        )),
        renderNodeRule(isCode, ({ node, key }) => (
          <CodeBlock key={key}>
            <code>{node.code}</code>
          </CodeBlock>
        )),
        renderNodeRule(isLink, ({ node, children, key }) => (
          <Anchor key={key} href={node.url}>
            {children}
          </Anchor>
        )),
        renderNodeRule(isThematicBreak, ({ key }) => (
          <ThematicBreak key={key} />
        )),
      ]}
      renderBlock={({ record }) => (
        <div className="my-6 flex gap-4">
          {record.images.map((image) => (
            <Image
              key={image.id}
              data={image.responsiveImage}
              className="rounded-lg border border-border object-cover"
              pictureClassName="object-cover"
            />
          ))}
        </div>
      )}
    />
  );
}
