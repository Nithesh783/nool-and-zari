import { useEffect, type RefObject } from "react";

type LayerRef = RefObject<HTMLElement | null>;

export default function useDismissibleLayer(
  active: boolean,
  contentRef: LayerRef,
  onDismiss: () => void,
  triggerRef?: LayerRef,
) {
  useEffect(() => {
    if (!active) {
      return;
    }

    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Node)) {
        return;
      }

      if (
        contentRef.current?.contains(event.target) ||
        triggerRef?.current?.contains(event.target)
      ) {
        return;
      }

      onDismiss();
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onDismiss();
      }
    }

    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [active, contentRef, onDismiss, triggerRef]);
}
