'use client'

import { useState } from 'react'
import { bucketListData } from '@/data/bucketListData'

export default function BucketListContainer() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilter, setActiveFilter] = useState<string>('all')

  // Predefined completed items - update this array and redeploy to change progress
  // To mark items as complete, add their IDs to this array and redeploy the site
  const completedItems = [1, 15, 31, 47, 66, 77, 78, 79, 81] // Example completed items

  // Filter and search logic
  const filteredItems = bucketListData.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    if (activeFilter === 'all') return matchesSearch
    if (activeFilter === 'completed') return matchesSearch && completedItems.includes(item.id)
    return matchesSearch && item.category === activeFilter
  })

  const progressPercentage = Math.round((completedItems.length / bucketListData.length) * 100)

  const categoryColors = {
    travel: 'bg-blue-100 text-blue-800',
    career: 'bg-green-100 text-green-800',
    personal: 'bg-purple-100 text-purple-800',
    adventure: 'bg-red-100 text-red-800',
    learning: 'bg-yellow-100 text-yellow-800',
  }

  const difficultyIcons = {
    1: '⭐',
    2: '⭐⭐',
    3: '⭐⭐⭐',
    4: '⭐⭐⭐⭐',
    5: '⭐⭐⭐⭐⭐',
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-16">
      {/* Header */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            My 100 Bucket List
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Dreams, Goals & Adventures to Accomplish
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
            <p className="text-blue-800 text-sm">
              <i className="fas fa-info-circle mr-2"></i>
              This is Atul&apos;s personal bucket list. Progress reflects real achievements and is updated by Atul.
            </p>
          </div>
          
          {/* Progress Bar */}
          <div className="max-w-md mx-auto">
            <div className="bg-gray-200 rounded-full h-4 mb-4">
              <div 
                className="bg-blue-600 h-4 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="text-lg font-medium text-gray-700">
              <span className="text-blue-600">{completedItems.length}</span> / <span>{bucketListData.length}</span> completed
              <span className="text-green-600 ml-2">({progressPercentage}%)</span>
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <input
                type="text"
                placeholder="Search bucket list items..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {['all', 'travel', 'career', 'personal', 'adventure', 'learning', 'completed'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors capitalize ${
                    activeFilter === filter
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bucket List Items */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`bg-white rounded-lg shadow-sm border p-6 transition-all hover:shadow-md ${
                  completedItems.includes(item.id) ? 'bg-green-50 border-green-200' : 'border-gray-200'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Number and Checkbox */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-sm font-medium text-gray-500 w-8 text-center">
                      #{item.id}
                    </span>
                    <div
                      className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                        completedItems.includes(item.id)
                          ? 'bg-green-500 border-green-500 text-white'
                          : 'border-gray-300'
                      }`}
                    >
                      {completedItems.includes(item.id) && (
                        <i className="fas fa-check text-xs"></i>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start gap-2 mb-2">
                      <h3 className={`text-lg font-semibold ${
                        completedItems.includes(item.id) ? 'text-green-800 line-through' : 'text-gray-900'
                      }`}>
                        {item.title}
                      </h3>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${categoryColors[item.category]}`}>
                        {item.category}
                      </span>
                    </div>
                    
                    <p className={`text-gray-600 mb-3 ${
                      completedItems.includes(item.id) ? 'text-green-700' : ''
                    }`}>
                      {item.description}
                    </p>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">Difficulty:</span>
                      <span className="text-sm">{difficultyIcons[item.difficulty]}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <i className="fas fa-search text-4xl text-gray-400 mb-4"></i>
              <h3 className="text-xl font-medium text-gray-900 mb-2">No items found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
