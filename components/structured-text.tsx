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
  renderMarkRule,
  renderNodeRule,
  StructuredText,
  type StructuredTextGraphQlResponse,
} from "react-datocms";

import type { PageDescriptionBlock } from "@/types";

import StructuredTextHeroImageBlock from "./structured-text-hero-image-block";
import StructuredTextImageBlock from "./structured-text-image-block";
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
  data: StructuredTextGraphQlResponse<PageDescriptionBlock>;
};

export default function PostStructuredText({ data }: Props) {
  return (
    <StructuredText<PageDescriptionBlock>
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
      renderBlock={({ record }) => {
        if (record.__typename === "HeroImageRecord") {
          return <StructuredTextHeroImageBlock record={record} />;
        }

        if (record.__typename === "ImageBlockRecord") {
          return <StructuredTextImageBlock record={record} />;
        }

        return null;
      }}
    />
  );
}
