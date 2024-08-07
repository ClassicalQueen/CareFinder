import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownEditorProps {
  initialContent?: string;
  onSave: (content: string) => void;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ initialContent = '', onSave }) => {
  const [content, setContent] = useState(initialContent);

  const handleSave = () => {
    onSave(content);
  };

  return (
    <div className="flex flex-col space-y-4">
      <textarea
        className="w-full h-64 p-2 border border-gray-300 rounded-md"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your markdown content here..."
      />
      <div className="flex justify-between">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md savebtn"
          onClick={handleSave}
        >
          Save
        </button>
        <div className="w-1/2">
          <h3 className="text-lg font-bold mb-2">Preview:</h3>
          <div className="p-4 border border-gray-300 rounded-md prev">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;