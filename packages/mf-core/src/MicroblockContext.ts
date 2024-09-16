import { createContext } from "solid-js";

export interface RemoteMicroblockMetadata {
  js: string;
  css: string;
  isLocked?: boolean
}

export interface MicroblockContextOptions {
  blocks: Map<string, RemoteMicroblockMetadata>;
  handleInitMicroblock: (name: string) => void
}

export const MicroblockContext = createContext<MicroblockContextOptions>({
  blocks: new Map(),
  handleInitMicroblock: () => {}
});
