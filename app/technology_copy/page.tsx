  "use client";
  import {Popover, PopoverTrigger, PopoverContent, Button} from "@heroui/react";

  export default function App() {
    return (
      <Popover
        showArrow
        backdrop="opaque"
        classNames={{
          base: [
            // arrow color
            "before:bg-gradient-to-tr from-[#0c0e14] via-[#0f1218] to-[#13171e]",
          ],
          content: [
            "",
            "",
          ],
        }}
        placement="bottom"
      >
        <PopoverTrigger>
          <Button>Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          {(titleProps) => (
            <div className="px-1 py-2">
              <h3 className="text-small font-bold text-white" {...titleProps}>
                Popover Content
              </h3>
              <div className="text-tiny text-white">This is the popover content</div>
            </div>
          )}
        </PopoverContent>
      </Popover>
    );
  }
