import './App.css'
import { useState } from 'react';
import EditorJs from '@natterstefan/react-editor-js'
import data from './data'
import Header from '@editorjs/header';
import TOC  from '@phigoro/editorjs-toc';
import Blocks from 'editorjs-blocks-react-renderer';
import tocRender from './editorjs-toc-render'

function App() {
  const [editor, setEditor] = useState<any>(null)
  const [outputData, setOutputData] = useState<any>(null)

  const onReady = () => {
    console.log('Editor.js is ready to work!')
  }

  const onChange = () => {
    console.log("Now I know that Editor's content changed!")
  }

  const onSave = async () => {
    // https://editorjs.io/saving-data
    try {
      setOutputData(await editor.save())
      console.log('Article data: ', outputData)
    } catch (e) {
      console.log('Saving failed: ', e)
    }
  }
  return (
    <>
      <div className='section'>
        <p className='sectionTitle'>react + editorjs demo</p>
        <button onClick={onSave}>Save</button>
        <EditorJs
          data={data}
          // will be `editorjs` by default
          holder="custom-editor-container"
          onReady={onReady}
          onChange={onChange}
          tools={{
            header: Header,
            toc: {
              class: TOC,
            },
          }}
          editorInstance={editorInstance => {
            setEditor(editorInstance)
          }}
        >
          <div id="custom-editor-container" />
        </EditorJs>
      </div>
      <div id="output" className='section'>
      {outputData && (
            <div>
              <p className='sectionTitle'>Preview Data:</p>
              <pre>{JSON.stringify(outputData, null, 2)}</pre>
            </div>
          )}
      </div>

      <div id="preview_render" className='section'>
      {outputData && (
            <div>
              <p className='sectionTitle'>Preview Render:</p>
              <Blocks data={outputData} renderers={{toc: tocRender}} />
            </div>
          )}
      </div>
    </>
  )
}

export default App

