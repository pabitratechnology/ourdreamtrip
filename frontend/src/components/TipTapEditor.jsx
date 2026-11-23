import React, { useRef, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import {
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaHeading,
  FaListUl,
  FaListOl,
  FaQuoteLeft,
  FaLink,
  FaImage,
  FaUpload,
  FaUndo,
  FaRedo
} from 'react-icons/fa';

export default function TipTapEditor({ content = '', onChange, placeholder = 'Write your content here...' }) {
  const fileInputRef = useRef(null);
  const [uploading, setUploading] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3]
        }
      }),
      Image.configure({
        inline: false,
        allowBase64: true
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          target: '_blank',
          rel: 'noopener noreferrer'
        }
      })
    ],
    content: content,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      if (onChange) onChange(html);
    }
  });

  if (!editor) {
    return null;
  }

  // Handle image upload from Mobile or Desktop device
  const handleFileUpload = async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (data.success && data.url) {
        editor.chain().focus().setImage({ src: data.url, alt: file.name }).run();
      } else {
        alert(data.error || 'Failed to upload image');
      }
    } catch (err) {
      alert('Error uploading image to server');
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  // Insert image via URL
  const handleInsertImageUrl = () => {
    const url = window.prompt('Enter Image URL:');
    if (url && url.trim()) {
      editor.chain().focus().setImage({ src: url.trim() }).run();
    }
  };

  // Add Link
  const handleSetLink = () => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('Enter URL:', previousUrl);

    if (url === null) return;
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  return (
    <div className="tiptap-editor-wrapper">
      {/* Hidden File Input for Device Image Upload */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept="image/*"
        style={{ display: 'none' }}
      />

      {/* Editor Toolbar */}
      <div className="tiptap-toolbar">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`tiptap-btn ${editor.isActive('bold') ? 'is-active' : ''}`}
          title="Bold"
        >
          <FaBold />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`tiptap-btn ${editor.isActive('italic') ? 'is-active' : ''}`}
          title="Italic"
        >
          <FaItalic />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`tiptap-btn ${editor.isActive('strike') ? 'is-active' : ''}`}
          title="Strike"
        >
          <FaStrikethrough />
        </button>

        <span className="tiptap-divider" />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`tiptap-btn ${editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}`}
          title="Heading 1"
        >
          H1
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`tiptap-btn ${editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}`}
          title="Heading 2"
        >
          H2
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`tiptap-btn ${editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}`}
          title="Heading 3"
        >
          H3
        </button>

        <span className="tiptap-divider" />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`tiptap-btn ${editor.isActive('bulletList') ? 'is-active' : ''}`}
          title="Bullet List"
        >
          <FaListUl />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`tiptap-btn ${editor.isActive('orderedList') ? 'is-active' : ''}`}
          title="Numbered List"
        >
          <FaListOl />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`tiptap-btn ${editor.isActive('blockquote') ? 'is-active' : ''}`}
          title="Quote"
        >
          <FaQuoteLeft />
        </button>

        <span className="tiptap-divider" />

        <button
          type="button"
          onClick={handleSetLink}
          className={`tiptap-btn ${editor.isActive('link') ? 'is-active' : ''}`}
          title="Insert Link"
        >
          <FaLink />
        </button>

        {/* Upload Image from Device (Mobile / PC) */}
        <button
          type="button"
          onClick={() => fileInputRef.current && fileInputRef.current.click()}
          className="tiptap-btn upload-image-btn"
          title="Upload Image from Mobile / Desktop Device"
          disabled={uploading}
        >
          <FaUpload /> {uploading ? 'Uploading...' : 'Upload Image'}
        </button>

        <button
          type="button"
          onClick={handleInsertImageUrl}
          className="tiptap-btn"
          title="Insert Image by URL"
        >
          <FaImage /> Image URL
        </button>

        <span className="tiptap-divider" />

        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className="tiptap-btn"
          title="Undo"
        >
          <FaUndo />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className="tiptap-btn"
          title="Redo"
        >
          <FaRedo />
        </button>
      </div>

      {/* Editor Main Content Area */}
      <div className="tiptap-content-box">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
