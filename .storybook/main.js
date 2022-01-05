module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/html",
  refs: {
    'design-system': {
      title: "Storybook Design System",
      url: "https://5ccbc373887ca40020446347-yldsqjoxzb.chromatic.com",
      expanded: false // optional, true by default
    }
   }
}