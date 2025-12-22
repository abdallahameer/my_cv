import * as Tooltip from "@radix-ui/react-tooltip";

export default function ToolTip({ text, children }) {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="
              z-50 max-w-xs rounded-md bg-black px-3 py-2
              text-sm text-white shadow-lg
              animate-fade-in
            "
            side="top"
            sideOffset={8}
          >
            {text}
            <Tooltip.Arrow className="fill-black" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
