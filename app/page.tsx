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
import { CardWithForm } from "@/components/card";
import { CarouselDemo } from "@/components/carousel";
import { CheckboxDemo } from "@/components/checkbox";
import { CollapsibleDemo } from "@/components/collapsible";
import { CommandDemo } from "@/components/command";
import { ContextMenuDemo } from "@/components/context-menu";
import { DataTableDemo } from "@/components/datatable";
import { DialogDemo } from "@/components/dialog";
import { DropdownMenuDemo } from "@/components/dropdown";
import { HoverCardDemo } from "@/components/hover-card";
import { InputOTPControlled as InputOTPPattern } from "@/components/input-otp";
import { MenubarDemo } from "@/components/menu-bar";
import { NavigationMenuDemo } from "@/components/navigation";
import { PaginationDemo } from "@/components/pagination";
import { PopoverDemo } from "@/components/popover";
import { ProgressDemo } from "@/components/progress";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
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

      {/* block 1 */}
      <div className="m-5 flex font-mono px-2 ">
        <div className=" py-2 w-[30%]">
          <BreadcrumbDemo />
        </div>
      </div>
      <div className="p-2 m-5 border-y text-center">this is a border</div>

      {/* block 2 */}
      <div className="m-5 flex justify-around px-2">
        <div className="max-w-[30%]">
          <h3 className="text-[18px] mb-2 text-uppercase hover:underline text-violet-900 font-mono font-semibold dark:text-violet-400 text-center">
            Alert
          </h3>
          <div className="my-4"></div>
          <AlertDemo />
        </div>
        <div className="w-[30%]">
          <h3 className="text-[18px] text-uppercase hover:underline text-violet-900 font-mono font-semibold dark:text-violet-400 text-center">
            Accordion
          </h3>
          <AccordionDemo />
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
      </div>
      <div className="p-2 m-5 border-y text-center">this is a border</div>

      {/* block 3 */}
      <div className="m-5 flex justify-around px-2">
        <div className="max-w-[30%]">
          <h3 className="text-[18px] text-uppercase hover:underline text-violet-900 font-mono font-semibold dark:text-violet-400 text-center">
            Card Form
          </h3>
          <div className="m-4"></div>
          <CardWithForm />
        </div>

        <div className="max-w-[30%]">
          <h3 className="text-[18px] text-uppercase hover:underline text-violet-900 font-mono font-semibold dark:text-violet-400 text-center">
            Carousel
          </h3>
          <div className="m-4"></div>
          <CarouselDemo />
        </div>

        <div className="max-w-[30%]">
          <h3 className="text-[18px] text-uppercase hover:underline text-violet-900 font-mono font-semibold dark:text-violet-400 text-center">
            Calendar
          </h3>
          <div className="m-4"></div>
          <CalendarDemo />
        </div>
      </div>
      <div className="p-2 m-5 border-y text-center">this is a border</div>

      {/* block 4 */}
      <div className="m-5 flex justify-around px-2">
        {/* box 1 */}
        <div className="max-w-[30%]">
          <h3 className="text-[18px] text-uppercase hover:underline text-violet-900 font-mono font-semibold dark:text-violet-400 text-center">
            CheckBox
          </h3>
          <div className="m-4"></div>
          <CheckboxDemo />
        </div>

        {/* box 2 */}
        <div className="max-w-[30%]">
          <h3 className="text-[18px] text-uppercase hover:underline text-violet-900 font-mono font-semibold dark:text-violet-400 text-center">
            Command
          </h3>
          <div className="m-4"></div>
          <CommandDemo />
        </div>

        {/* box 3 */}
        <div className="max-w-[30%]">
          <h3 className="text-[18px] text-uppercase hover:underline text-violet-900 font-mono font-semibold dark:text-violet-400 text-center">
            Collapsible
          </h3>
          <div className="m-4"></div>
          <CollapsibleDemo />
        </div>
      </div>
      <div className="p-2 m-5 border-y text-center">this is a border</div>

      {/* block 5 */}
      <div className="m-5 flex justify-around px-2">
        {/* box 1 */}
        <div className="max-w-[30%]">
          <h3 className="text-[18px] text-uppercase hover:underline text-violet-900 font-mono font-semibold dark:text-violet-400 text-center">
            ContextMenu
          </h3>
          <div className="m-4"></div>
          <ContextMenuDemo />
        </div>

        {/* box 3 */}
        <div className="w-[70%]">
          <h3 className="text-[18px] text-uppercase hover:underline text-violet-900 font-mono font-semibold dark:text-violet-400 text-center">
            Data Table
          </h3>
          <div className="m-4"></div>
          <DataTableDemo />
        </div>
      </div>
      <div className="p-2 m-5 border-y text-center">this is a border</div>

      {/* block 6 */}
      <div className="m-5 flex justify-around px-2">
        {/* box 1 */}
        <div className="max-w-[30%]">
          <h3 className="text-[18px] text-uppercase hover:underline text-violet-900 font-mono font-semibold dark:text-violet-400 text-center">
            Dialog
          </h3>
          <div className="m-4"></div>
          <DialogDemo />
        </div>

        {/* box 2 */}
        <div className="max-w-[30%]">
          <h3 className="text-[18px] text-uppercase hover:underline text-violet-900 font-mono font-semibold dark:text-violet-400 text-center">
            Dropdown
          </h3>
          <div className="m-4"></div>
          <DropdownMenuDemo />
        </div>

        {/* box 3 */}
        <div className="max-w-[30%]">
          <h3 className="text-[18px] text-uppercase hover:underline text-violet-900 font-mono font-semibold dark:text-violet-400 text-center">
            HoverCard
          </h3>
          <div className="m-4"></div>
          <HoverCardDemo />
        </div>
      </div>
      <div className="p-2 m-5 border-y text-center">this is a border</div>

      {/* block 6 */}
      <div className="m-5 flex justify-around px-2">
        {/* box 1 */}
        <div className="max-w-[30%]">
          <h3 className="text-[18px] text-uppercase hover:underline text-violet-900 font-mono font-semibold dark:text-violet-400 text-center">
            Menubar
          </h3>
          <div className="m-4"></div>
          <MenubarDemo />
        </div>

        {/* box 2 */}
        <div className="max-w-[30%]">
          <h3 className="text-[18px] text-uppercase hover:underline text-violet-900 font-mono font-semibold dark:text-violet-400 text-center">
            NavigationMenuDemo
          </h3>
          <div className="m-4"></div>
          <NavigationMenuDemo />
        </div>

        {/* box 3 */}
        <div className="max-w-[30%]">
          <h3 className="text-[18px] text-uppercase hover:underline text-violet-900 font-mono font-semibold dark:text-violet-400 text-center">
            InputOTPControlled
          </h3>
          <div className="m-4"></div>
          <InputOTPPattern />
        </div>
      </div>
      <div className="p-2 m-5 border-y text-center">this is a border</div>

      {/* block 7 */}
      <div className="m-5 flex justify-between px-2">
        {/* box 1 */}
        <div className="w-[30%] text-center">
          <h3 className="text-[18px] text-uppercase hover:underline text-violet-900 font-mono font-semibold dark:text-violet-400 text-center">
            Pagination
          </h3>
          <div className="m-4 "></div>
          <PaginationDemo />
        </div>

        {/* box 2 */}
        <div className="w-[30%] text-center">
          <h3 className="text-[18px] text-uppercase hover:underline text-violet-900 font-mono font-semibold dark:text-violet-400 text-center">
            Popover
          </h3>
          <div className="m-4"></div>
          <PopoverDemo />
        </div>

        {/* box 3 */}
        <div className="w-[30%] text-center">
          <h3 className="text-[18px] text-uppercase hover:underline text-violet-900 font-mono font-semibold dark:text-violet-400 text-center">
            Progress
          </h3>
          <div className="m-4 flex flex-row justify-center">
            <ProgressDemo />
          </div>
        </div>
      </div>
      <div className="p-2 m-5 border-y text-center">this is a border</div>

      {/* footer aspect ratio */}
      <footer className="m-14">
        <h3 className="text-[18px] text-uppercase hover:underline text-violet-900 font-mono font-semibold dark:text-violet-400 text-center">
          Aspect Ratio
        </h3>
        <AspectRatioDemo />
      </footer>
    </div>
  );
}
