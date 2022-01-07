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
      title: "Version Tests",
      url: "http://localhost:6002/3",
    }
   }
}