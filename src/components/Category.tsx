import React from 'react'
import { useHistory } from 'react-router-dom'

interface CategoryProps {
  categoryName: string
  imageName: string
}

const Category: React.FC<CategoryProps> = ({ categoryName, imageName }) => {
  const history = useHistory()
  return (
    <div className="category-wrapper">
      <div className="category__icon">
        <img src={imageName} alt="" />
      </div>
      <div className="category__title">{categoryName}</div>
    </div>
  )
}

export default Category
