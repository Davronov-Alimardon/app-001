import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarDemo({ imgUrl }: { imgUrl: string }) {
  return (
    <Avatar>
      <AvatarImage src={imgUrl} alt="imgUrl" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
