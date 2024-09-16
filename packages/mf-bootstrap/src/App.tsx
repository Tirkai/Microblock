import "./App.css";

import { Microblock, MicroblockProvider } from "@tirkai/mf-core";

const blocks = new Map();

blocks.set("Core.SimpleMf", {
  js: "https://otoslapfjlltbpxxlscw.supabase.co/storage/v1/object/public/static/microblocks/Core_SimpleMf/index.js",
  css: "https://otoslapfjlltbpxxlscw.supabase.co/storage/v1/object/public/static/microblocks/Core_SimpleMf/index.css",
});

function App() {
  window.addEventListener("message", (event: MessageEvent) => {
    if (event.data.source === "react-devtools-content-script") {
      return;
    }

    console.log(event.data);
  });

  return (
    <MicroblockProvider blockMapping={blocks}>
      <div class="cardLayout">
        <Microblock name="Core.SimpleMf" />
        <Microblock name="Core.SimpleMf" />
        <Microblock name="Core.SimpleMf" />
        <Microblock name="Core.SimpleMf" />
        <Microblock name="Core.SimpleMf" />
      </div>
    </MicroblockProvider>
  );
}

export default App;
