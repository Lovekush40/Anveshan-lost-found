import React from 'react'
import {Editor} from  '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

function RTE({name, control, label, defaultValue= ""}) {
  return (
    <div className='w-full'>
        {label && <label className='inline-block pl-1 mb-1'>{label}</label>}
        
        <Controller
        name = {name || "content"}
        control={control}
        render={({field : {onChange}}) => (
            <Editor
                initialValue={defaultValue}
                init={{
                    initialValue: defaultValue,
                    height: 500,
                    menubar: true,
                    plugins: [
                    'autolink',        // Auto-convert URLs
                    'media',           // Embed videos/audio
                    'image',           // Insert images
                    'link',            // Add hyperlinks
                    'lists',           // Bullet and numbered lists
                    'table',           // Structured content
                    'wordcount',       // Word/char count
                    'code',            // Code blocks
                    'anchor',          // Internal links
                    'preview',         // Preview mode
                    'fullscreen'       // Fullscreen writing
                    ],
                    toolbar:
                    'undo redo | styleselect | bold italic underline | ' +
                    'link image media | bullist numlist | table | ' +
                    'code preview fullscreen | wordcount',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
                }}
                onEditorChange={onChange}
                />
        )}
        />
    </div>
  )
}

export default RTE