// components/PdfViewer.js
'use client';

import { useState } from 'react';


export default function PdfViewer({ file }) {


return (
    <div style={{
        margin: "2vh 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        justifyContent: "center"
    }}>
        <iframe 
            style={{
                width: "75%",
                height: "75vh"
            }}
        src={file} title="PDF Viewer"></iframe>
    </div>
)
}
