import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { AccordionDemo } from "@/components/accordion";
import { AlertDemo } from "@/components/alert";
import { AlertDialogDemo } from "@/components/alert-dialog";
import { AspectRatioDemo } from "@/components/aspect-ratio";
import { AvatarDemo } from "@/components/avatar";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbDemo } from "@/components/breadcrumb";
import { CalendarDemo } from "@/components/calendar";

export default function Home() {
  return (
    <div>
      <div className="m-5 flex justify-between items-center px-2 border-b pb-2">
        <div className="flex justify-normal items-center">
          <Button className="mx-2">Click me</Button>
        </div>
        <h2 className="text-center py-2 scroll-m-20  text-3xl font-semibold tracking-tight first:mt-0">
          The Kingdom of @shadcn-ui
        </h2>
        <div className="flex justify-normal items-center">
          <ModeToggle />
          <div className="mx-2"></div>
          <AvatarDemo imgUrl="https://github.com/shadcn.png" />
        </div>
      </div>
      <div className="m-5 flex font-mono px-2 ">
        <div className="border-b py-2 w-[30%]">
          <BreadcrumbDemo />
        </div>
      </div>

      <div className="m-5 flex justify-between px-2">
        <div className="max-w-[30%]">
          <h3 className="text-[18px] mb-2 text-uppercase hover:underline text-violet-900 font-mono font-semibold dark:text-violet-400 text-center">
            Alert
          </h3>
          <div className="my-4"></div>
          <AlertDemo />
        </div>
        <div className="max-w-[30%]">
          <h3 className="text-[18px] mb-2 text-uppercase hover:underline text-violet-900 font-mono font-semibold dark:text-violet-400 text-center">
            Alert Dialog & Badge
          </h3>
          <div className="flex justify-center mt-4">
            <AlertDialogDemo />
          </div>
          <div className="flex justify-center mt-4">
            <Badge className="h-6 mx-2" variant="destructive">
              connection
            </Badge>
          </div>
        </div>
        <div className="w-[30%]">
          <h3 className="text-[18px] text-uppercase hover:underline text-violet-900 font-mono font-semibold dark:text-violet-400 text-center">
            Accordion
          </h3>
          <AccordionDemo />
        </div>
      </div>
      <div className="m-5 flex justify-between px-2">
        <div className="max-w-[30%]">
          <h3 className="text-[18px] text-uppercase hover:underline text-violet-900 font-mono font-semibold dark:text-violet-400 text-center">
            Calendar
          </h3>
          <div className="m-4"></div>
          <CalendarDemo />
        </div>
      </div>
      <footer className="m-14">
        <h3 className="text-[18px] text-uppercase hover:underline text-violet-900 font-mono font-semibold dark:text-violet-400 text-center">
          Aspect Ratio
        </h3>
        <AspectRatioDemo />
      </footer>
    </div>
  );
}
