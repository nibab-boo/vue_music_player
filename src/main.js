import { createApp } from "vue";
import App from "./App.vue";
// fontawesome import
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faPause, faPlay);

import "./styles/index.scss";

createApp(App).mount("#app");
