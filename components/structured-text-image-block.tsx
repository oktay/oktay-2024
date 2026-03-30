/* eslint-disable jsx-a11y/alt-text */

import { Image } from "react-datocms";

import { ImageBlockRecord } from "@/types";

export default function StructuredTextImageBlock({
  record,
}: {
  record: ImageBlockRecord;
}) {
  return (
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
  );
}
