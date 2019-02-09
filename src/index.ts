import Vue from "vue"
import HolaComponent from "./components/hola"

let v = new Vue({
  el: "#app",
  template: `
    <div>
        Name: <input v-model="name" type="text">
        <hello-component :name="name" :initialEnthusiasm="5" />
    </div>
    `,
  data: { name: "World" },
  components: {
    HolaComponent
  }
})
