import React, { useState } from 'react';
import { Save, Eye, Upload, X, Image, Video } from 'lucide-react';
import Layout from '../components/Layout';
import SEOHead from '../components/SEOHead';
import { useToast } from '@/hooks/use-toast';

const Write = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');
  const [featuredImage, setFeaturedImage] = useState<File | null>(null);
  const [mediaFiles, setMediaFiles] = useState<File[]>([]);
  const [isPreview, setIsPreview] = useState(false);
  const { toast } = useToast();

  const categories = [
    'News', 'Politics', 'Business', 'Sports', 'Entertainment', 'Technology', 'Opinion'
  ];

  const handleTagAdd = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const handleTagRemove = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFeaturedImage(e.target.files[0]);
    }
  };

  const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setMediaFiles([...mediaFiles, ...newFiles]);
    }
  };

  const removeMediaFile = (index: number) => {
    setMediaFiles(mediaFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Article submitted:', { 
      title, content, excerpt, category, tags, featuredImage, mediaFiles 
    });
    
    // Show success toast
    toast({
      title: "Article Published!",
      description: "Your article has been successfully published to BlazeMtaa.",
    });

    // Reset form
    setTitle('');
    setContent('');
    setExcerpt('');
    setCategory('');
    setTags([]);
    setFeaturedImage(null);
    setMediaFiles([]);
    setIsPreview(false);
  };

  return (
    <Layout>
      <SEOHead 
        title="Write Article - BlazeMtaa"
        description="Share your story with BlazeMtaa. Write and publish articles on news, politics, business, and more."
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-600 to-black p-6 text-white">
              <h1 className="text-2xl font-bold">Write New Article</h1>
              <p className="text-red-100">Share your story with the world</p>
            </div>

            {/* Toggle Preview */}
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">
                  {isPreview ? 'Preview Mode' : 'Edit Mode'}
                </h2>
                <button
                  onClick={() => setIsPreview(!isPreview)}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Eye size={16} />
                  <span>{isPreview ? 'Edit' : 'Preview'}</span>
                </button>
              </div>
            </div>

            {isPreview ? (
              /* Preview Mode */
              <div className="p-6">
                <div className="mb-4">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    {category || 'Uncategorized'}
                  </span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {title || 'Article Title'}
                </h1>
                {featuredImage && (
                  <div className="mb-6 relative">
                    <img
                      src={URL.createObjectURL(featuredImage)}
                      alt="Featured"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute top-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-xs font-medium">
                      <span className="text-red-400">Blaze</span>
                      <span className="text-white">Mtaa</span>
                    </div>
                  </div>
                )}
                <div className="text-lg text-gray-600 mb-6">
                  {excerpt || 'Article excerpt...'}
                </div>
                <div className="prose max-w-none">
                  {content.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                {/* Media Files Preview */}
                {mediaFiles.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-4">Media Files</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {mediaFiles.map((file, index) => (
                        <div key={index} className="relative">
                          {file.type.startsWith('image/') ? (
                            <img
                              src={URL.createObjectURL(file)}
                              alt={`Media ${index + 1}`}
                              className="w-full h-32 object-cover rounded-lg"
                            />
                          ) : (
                            <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                              <Video className="text-gray-500" size={24} />
                            </div>
                          )}
                          <div className="absolute top-1 right-1 bg-black bg-opacity-60 text-white px-1 py-0.5 rounded text-xs">
                            <span className="text-red-400">Blaze</span>
                            <span className="text-white">Mtaa</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {tags.length > 0 && (
                  <div className="mt-6 pt-6 border-t">
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Edit Mode */
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Article Title
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your article title..."
                    required
                  />
                </div>

                {/* Category and Featured Image */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select category</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Featured Image
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="featured-image"
                      />
                      <label
                        htmlFor="featured-image"
                        className="flex items-center justify-center w-full px-4 py-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                      >
                        <Image size={16} className="mr-2" />
                        {featuredImage ? featuredImage.name : 'Upload Featured Image'}
                      </label>
                    </div>
                  </div>
                </div>

                {/* Media Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Media (Images & Videos)
                  </label>
                  <div className="relative mb-4">
                    <input
                      type="file"
                      accept="image/*,video/*"
                      multiple
                      onChange={handleMediaUpload}
                      className="hidden"
                      id="media-upload"
                    />
                    <label
                      htmlFor="media-upload"
                      className="flex items-center justify-center w-full px-4 py-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                      <Upload size={16} className="mr-2" />
                      Upload Images & Videos
                    </label>
                  </div>
                  
                  {/* Media Files List */}
                  {mediaFiles.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {mediaFiles.map((file, index) => (
                        <div key={index} className="relative group">
                          <div className="bg-gray-100 rounded-lg p-2 text-sm">
                            <div className="flex items-center space-x-2">
                              {file.type.startsWith('image/') ? <Image size={16} /> : <Video size={16} />}
                              <span className="truncate">{file.name}</span>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeMediaFile(index)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X size={12} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Excerpt */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Article Excerpt
                  </label>
                  <textarea
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Write a brief excerpt of your article..."
                    required
                  />
                </div>

                {/* Content */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Article Content
                  </label>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={15}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Write your article content here..."
                    required
                  />
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tags
                  </label>
                  <div className="flex space-x-2 mb-3">
                    <input
                      type="text"
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleTagAdd())}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Add a tag..."
                    />
                    <button
                      type="button"
                      onClick={handleTagAdd}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Add
                    </button>
                  </div>
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center space-x-1 bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm"
                        >
                          <span>#{tag}</span>
                          <button
                            type="button"
                            onClick={() => handleTagRemove(tag)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <X size={14} />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-600 to-black text-white rounded-lg hover:from-red-700 hover:to-gray-900 transition-colors"
                  >
                    <Save size={16} />
                    <span>Publish Article</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Write;
