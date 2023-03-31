import { createWebGLContext } from "./createWebGLContext.js";

class CodeIsArbitrary {
  constructor() {
    createWebGLContext(document.getElementsByTagName("canvas")[0]!);
  }
}
