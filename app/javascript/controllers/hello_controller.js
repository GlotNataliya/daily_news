// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "first_name", "last_name"]

  greet() {
    const first_name = this.first_nameTarget.value
    const last_name = this.last_nameTarget.value
    console.log(`Hello, ${first_name} ${last_name}!`)
  }
}
