import React, { useState } from 'react'
import { CodeEditorEditable } from 'react-code-editor-editable'
import 'highlight.js/styles/vs2015.css';

const CodeEditor = () => {
  const [value, setValue] = useState('')

  return (
    <div className='CodeEditorBox' >
      <CodeEditorEditable
        value={value}
        setValue={setValue}
        width= '100%'
        language='html'
        inlineNumbers
      />
    </div>
  )
}

export default CodeEditor