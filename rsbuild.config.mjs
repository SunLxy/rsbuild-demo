import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    rspack: (chain) => {
      chain.resolve.alias["react-native"] = "react-native-web"
    }
  }
});
