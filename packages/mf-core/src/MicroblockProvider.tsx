import { Component, JSX } from "solid-js";
import {
  MicroblockContext,
  RemoteMicroblockMetadata,
} from "./MicroblockContext";

interface MicroblockProviderProps {
  blockMapping: Map<string, RemoteMicroblockMetadata>;
  children: JSX.Element;
}

export const MicroblockProvider: Component<MicroblockProviderProps> = (
  props
) => {
  const handleInitMicroblock = (name: string) => {
    const block = props.blockMapping.get(name);

    if (!block || block.isLocked) {
      return;
    }

    props.blockMapping.set(name, { ...block, isLocked: true });

    const styleNode = document.createElement("link");
    styleNode.rel = "stylesheet";
    styleNode.setAttribute("data-mf-style-name", name);
    styleNode.href = block.css;
    document.head.appendChild(styleNode);

    const scriptNode = document.createElement("script");
    scriptNode.setAttribute("data-mf-script-id", name);
    scriptNode.src = block.js;
    document.head.appendChild(scriptNode);
  };

  return (
    <MicroblockContext.Provider value={{ blocks: props.blockMapping, handleInitMicroblock }}>
      {props.children}
    </MicroblockContext.Provider>
  );
};
