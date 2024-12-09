import { JSX, mergeProps, ParentComponent, Show } from "solid-js";
import { ArrowIcon } from "./icons/ArrowIcon";
import clsx from "clsx";

interface ArrowButtonProps {
  prefixIcon?: JSX.Element;
  variant?: "primary" | "default";
}

export const ArrowButton: ParentComponent<ArrowButtonProps> = (
  initialProps
) => {
  const props = mergeProps(
    {
      variant: "default",
    } satisfies Partial<ArrowButtonProps>,
    initialProps
  );

  return (
    <div
      class={clsx(
        "flex items-center sm:gap-5 gap-2 bg-background-60 rounded-2xl p-3 sm:pl-5 sm:pr-10 px-5 hover:cursor-pointer group hover:bg-background-50 opacity-95 transition-colors border",
        props.variant === "primary"
          ? "border-status-success"
          : "border-background-30"
      )}
    >
      <Show when={props.prefixIcon}>
        <div
          class={clsx(
            "w-12 justify-center group-hover:fill-status-success fill-white hidden sm:flex"
          )}
        >
          {props.prefixIcon}
        </div>
      </Show>
      <div class="flex flex-col flex-grow">{props.children}</div>
      <div class="flex w-9 group-hover:translate-x-5 transition-transform duration-200">
        <ArrowIcon
          class="fill-background-10"
          size={30}
          direction="right"
        ></ArrowIcon>
      </div>
    </div>
  );
};
