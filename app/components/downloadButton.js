'use client';
import { useState } from 'react';
    
export default function DownloadButton(
  {
    type: fileType, link: fileLink, extension: fileExtension, name: userName, selectform = false, className
  }) {
    const [selectedOption, setSelectedOption] = useState(fileLink);
    
    const handleDownload = async () => {
        try {
          const response = await fetch('/api/download', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ type: fileType, link: selectedOption, extension: fileExtension, name: userName }),
          });
    
          if (!response.ok) {
            const { error } = await response.json();
            alert(`Failed to download file: ${error}`);
            return;
          }
    
          const blob = await response.blob();
          const url = window.URL.createObjectURL(new Blob([blob]));
          const a = document.createElement('a');
          a.href = url;
          a.download = `XinstagramX_${userName}.${fileExtension}`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        } catch (error) {
          console.error('Error downloading file:', error);
          alert('Internal server error');
        }
    };
    
    return (
        <>
        {selectform && 
          (
            <select id="sizes" 
              onChange={e => setSelectedOption(e.target.value)} 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {
                selectform.map( d => {
                  return (
                  <option key={d.config_width} value={d.src}>{`${d.config_width}x${d.config_height}`}</option>
                  )
                })
              }
              
            </select>
          )
          
        }
          <button 
              type="button" 
              className={className}
              onClick={handleDownload}
          >
              <svg className="w-5 h-5 me-2 -ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
                  <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"/>
              </svg>
              Download
          </button>
        </>
    )
}