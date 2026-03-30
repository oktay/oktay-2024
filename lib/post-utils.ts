type StructuredTextNode = any;

export type TocHeading = {
  id: string;
  text: string;
  level: number;
};

export function collectStructuredText(
  node: StructuredTextNode,
  parts: string[] = [],
): string[] {
  if (!node) {
    return parts;
  }

  if (Array.isArray(node)) {
    node.forEach((item) => collectStructuredText(item, parts));
    return parts;
  }

  if (typeof node === "object") {
    if (node.type === "span" && typeof node.value === "string") {
      parts.push(node.value);
    }

    if (node.document) {
      collectStructuredText(node.document, parts);
    }

    if (node.children) {
      collectStructuredText(node.children, parts);
    }
  }

  return parts;
}

export function toPlainText(node: StructuredTextNode): string {
  return collectStructuredText(node).join(" ").replace(/\s+/g, " ").trim();
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function getNodeText(node: StructuredTextNode): string {
  if (!node) {
    return "";
  }

  if (Array.isArray(node)) {
    return node
      .map((item) => getNodeText(item))
      .join(" ")
      .trim();
  }

  if (typeof node === "object") {
    if (node.type === "span" && typeof node.value === "string") {
      return node.value;
    }

    if (node.children) {
      return getNodeText(node.children);
    }
  }

  return "";
}

export function extractHeadings(
  node: StructuredTextNode,
  result: TocHeading[] = [],
): TocHeading[] {
  if (!node) {
    return result;
  }

  if (Array.isArray(node)) {
    node.forEach((item) => extractHeadings(item, result));
    return result;
  }

  if (typeof node === "object") {
    if (node.type === "heading" && (node.level === 2 || node.level === 3)) {
      const text = getNodeText(node.children).replace(/\s+/g, " ").trim();
      if (text) {
        result.push({
          id: slugifyHeading(text),
          text,
          level: node.level,
        });
      }
    }

    if (node.document) {
      extractHeadings(node.document, result);
    }

    if (node.children) {
      extractHeadings(node.children, result);
    }
  }

  return result;
}

export function calculateReadingMinutes(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

export function formatReadingTime(text: string): string {
  return `${calculateReadingMinutes(text)} min read`;
}
