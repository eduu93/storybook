// Here we map the name of a module to their REFERENCE in the global scope.
export const globalsNameReferenceMap = {
  react: '__REACT__',
  'react-dom': '__REACT_DOM__',
  '@storybook/components': '__STORYBOOK_COMPONENTS__',
  '@storybook/channels': '__STORYBOOK_CHANNELS__',
  '@storybook/core-events': '__STORYBOOK_CORE_EVENTS__',
  '@storybook/router': '__STORYBOOK_ROUTER__',
  '@storybook/theming': '__STORYBOOK_THEMING__',
  '@storybook/api': '__STORYBOOK_API__', // deprecated, remove in 8.0
  '@storybook/manager-api': '__STORYBOOK_API__',
  '@storybook/addons': '__STORYBOOK_ADDONS__',
  '@storybook/client-logger': '__STORYBOOK_CLIENT_LOGGER__',
  '@storybook/types': '__STORYBOOK_TYPES__',
} as const;

export const globalPackages = Object.keys(globalsNameReferenceMap) as Array<
  keyof typeof globalsNameReferenceMap
>;
