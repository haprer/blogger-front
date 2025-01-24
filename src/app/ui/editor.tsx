'use client';

import React, { useRef, useState, useMemo } from 'react';
import JoditEditor, { Jodit } from 'jodit-react';

/**
 * Simple Text Editor for creating blogs 
 */





const EditorComponent: React.FC = () => {
    const editor = useRef<Jodit | null>(null);
    const [content, setContent] = useState<string>('');

    
    const config = useMemo(() => ({
        readonly: false,
        height: 400,
        uploader: {
            insertImageAsBase64URI: true,
        },
        removeButtons: ['file'],   //do not allow adding a file
    }), []);

    return (
        <div>
            <JoditEditor
                ref={editor}
                value={content}
                config={config}
                onBlur={(newContent) => setContent(newContent)}
                // onChange={(newContent) => setContent(newContent)}
            />
        </div>
    );
};

export default EditorComponent;
