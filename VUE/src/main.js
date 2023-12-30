import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//import bootstrap files
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";

// import css files
import "./scss/global/_reset.scss";
import "./scss/main.scss";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
library.add(faUserSecret, fas);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
