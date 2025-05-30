import {
  ResponsiveImageType,
  SeoMetaTag as SeoMetaTagType,
} from "react-datocms";

import { ButtonProps } from "./components/ui/button";

export type LinkType = {
  link: string;
  title: string;
  variant: ButtonProps["variant"];
};

export type TagType = {
  name: string;
};

export type ExperienceType = {
  id: string;
  company: string;
  description: string;
  workTitle: string;
  startDate: string;
  endDate?: string;
  tags: TagType[];
  logo: {
    image: ResponsiveImageType;
  };
};

export type ProjectType = {
  id: string;
  title: string;
  description: string;
  url: string;
  tags: TagType[];
  thumbnail: {
    image: ResponsiveImageType;
  };
};

export type PostType = {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
  slug: string;
  tags: TagType[];
  seo: SeoMetaTagType[];
};

export type ContentType = {
  experiences?: ExperienceType[];
  projects?: ProjectType[];
  posts?: PostType[];
};

export type PageType = {
  title: string;
  description: string;
  content: ContentType;
  links: LinkType[];
  seo: SeoMetaTagType[];
};

export type AuthorType = {
  name: string;
  title: string;
  avatar: {
    image: ResponsiveImageType;
  };
};

export type PageResponseType = {
  page: PageType;
};

export type PostResponseType = {
  post: PostType;
};

export type AuthorResponseType = {
  author: AuthorType;
};

export type BookmarkType = {
  _id: string;
  link: string;
  title: string;
  cover: string;
  domain: string;
  excerpt: string;
  created: string;
  tags: string[];
};

export type CollectionType = {
  items: BookmarkType[];
  count: number;
  collectionId: string;
};

export type CollectionTagsType = {
  items: CollectionTagType[];
};

export type CollectionTagType = {
  _id: string;
  count: number;
};

export type BookmarkGroupType = Record<string, BookmarkType[]>;
