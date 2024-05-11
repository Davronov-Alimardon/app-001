import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import ExampleImg from "@/app/img/example-2.jpg";

export function AspectRatioDemo() {
  return (
    <AspectRatio ratio={16 / 9} className="bg-muted">
      <Image
        src={ExampleImg}
        alt="Photo by Drew Beamer"
        fill
        loading="lazy"
        className="rounded-md object-cover"
      />
    </AspectRatio>
  );
}
