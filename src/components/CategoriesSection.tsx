import React from 'react'
import Category from './Category'

interface CategorySectionProps {
  header: string
  subHeader: string
  categories: any
}

const CategorySection: React.FC<CategorySectionProps> = ({ header, subHeader, categories }) => {
  return (
    <div className="categories-section-wrapper">
      <div className="categories-section-header-container">
        <h2 className="main-header mb-2">{header}</h2>
        <div className="sub-header mb-3">{subHeader}</div>
      </div>
      <div className="categories-container mt-4">
        {categories.map((category: any) => (
          <Category categoryName={category.name} imageName={category.imageName} />
        ))}
      </div>
    </div>
  )
}

export default CategorySection
