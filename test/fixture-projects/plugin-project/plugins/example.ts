import { extendEnvironment } from "../../../../src/core/config/config-env";

extendEnvironment((env: any) => {
  env.__test_key = "a value";
  env.__test_bleep = (x: number) => x * 2;
});
