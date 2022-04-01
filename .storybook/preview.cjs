import '../src/stories/style/SampleBox.css'
import '../src/stories/style/SampleSplitter.css'
import '../src/stories/style/IdeClone.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
