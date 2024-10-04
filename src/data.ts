import { OutputData } from '@editorjs/editorjs'

interface IDataObj extends OutputData {
  blocks: Array<{
    type: string
    data: {
      [key: string]: any
    }
  }>
}

const data: IDataObj = {
  time: new Date().getTime(),
  blocks: [
    {
      type: 'header',
      data: {
        text: 'Editor.js',
        level: 2,
      },
    },
    {
      type: 'header',
      data: {
        text: 'Key features',
        level: 3,
      },
    },
    {
      type: 'header',
      data: {
        text: 'What does it mean clean data output',
        level: 3,
      },
    },
    {
      type: 'paragraph',
      data: {
        text:
          'Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below',
      },
    },
    {
      type: 'paragraph',
      data: {
        text:
          "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏",
      },
    },
  ],
  version: '2.15.0',
}

export default data