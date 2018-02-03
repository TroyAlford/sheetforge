import { configure } from '@storybook/react';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext)
}

function loadStories() {
  requireAll(require.context('../stories', true, /\.js$/))
}

configure(loadStories, module);
