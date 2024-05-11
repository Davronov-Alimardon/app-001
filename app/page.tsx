import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { AccordionDemo } from "@/components/accordion";
import { AlertDemo } from "@/components/alert";
import { AlertDialogDemo } from "@/components/alert-dialog";

export default function Home() {
  return (
    <div>
      <div className="m-5 flex justify-between px-2 border-b pb-2">
        <Button>Click me</Button>

        <h2 className="text-center py-2 scroll-m-20  text-3xl font-semibold tracking-tight first:mt-0">
          The Kingdom of @shadcn-ui
        </h2>
        <ModeToggle />
      </div>

      <div className="m-5 flex justify-between px-2">
        <div className="w-[30%]">
          <h3 className="text-[18px] text-uppercase hover:underline text-violet-900 font-mono font-semibold dark:text-violet-400 text-center">
            Accordion
          </h3>
          <AccordionDemo />
        </div>
        <div className="w-[30%]">
          <h3 className="text-[18px] mb-2 text-uppercase hover:underline text-violet-900 font-mono font-semibold dark:text-violet-400 text-center">
            Alert
          </h3>
          <div className="my-4"></div>
          <AlertDemo />
        </div>
        <div className="w-[30%]">
          <h3 className="text-[18px] mb-2 text-uppercase hover:underline text-violet-900 font-mono font-semibold dark:text-violet-400 text-center">
            Alert Dialog
          </h3>
          <div className="flex justify-center mt-4">
            <AlertDialogDemo />
          </div>
        </div>
      </div>
    </div>
  );
}
