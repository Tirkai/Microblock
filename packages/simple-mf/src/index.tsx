/* @refresh reload */
import { createMicroblock } from "@tirkai/mf-core";

import "./index.css";
import App from "./App";

createMicroblock({
  mode: import.meta.env.MODE,
  renderFn: () => <App />,
  name: "Core.SimpleMf",
});
