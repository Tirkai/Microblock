import { JSX } from "solid-js/jsx-runtime";
import { render } from "solid-js/web";
import { MicroblockEventType } from "./MicroblockEventType";

interface EventDetails {
  type: "MicroblockMount";
  name: string;
  id: string;
}

interface CreateMicroblockOptions {
  mode: string;
  name: string;
  renderFn: () => JSX.Element;
}

export const createMicroblock = (options: CreateMicroblockOptions) => {
  const { renderFn } = options;

  if (options.mode === "development") {
    const root = document.getElementById("root");

    render(renderFn, root!);
    return;
  }

  window.addEventListener("message", (event: MessageEvent<EventDetails>) => {
    if (event.data.type !== MicroblockEventType.MicroblockMount) {
      return;
    }

    if (event.data.name === options.name) {
      render(
        options.renderFn,
        document.querySelector(`[data-mf-id='${event.data.id}']`)!
      );
    }
  });

  window.postMessage({
    type: MicroblockEventType.MicroblockLoaded,
    name: options.name,
  });
};
