import { Component, useContext } from "solid-js";
import { MicroblockContext } from "./MicroblockContext";
import { MicroblockEventType } from "./MicroblockEventType";

interface MicroblockProps {
  name: string;
}

interface MessageData {
  type: string;
  name: string;
}

export const Microblock: Component<MicroblockProps> = (props) => {
  const id = crypto.randomUUID();

  const { handleInitMicroblock } = useContext(MicroblockContext);

  handleInitMicroblock(props.name);

  window.addEventListener("message", (event: MessageEvent<MessageData>) => {
    if (event.data.type !== MicroblockEventType.MicroblockLoaded) {
      return;
    }

    if (event.data.name !== props.name) {
      return;
    }

    window.postMessage({
      type: MicroblockEventType.MicroblockMount,
      name: props.name,
      id,
    });
  });

  return <div data-mf-id={id}></div>;
};
