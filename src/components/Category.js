import React from 'react'

const Category = ({ category, changeCategory, selectItems }) => {
    return (
        <select class='md:p-2 p-1 mb-2 md:mb-0 rounded bg-gray-800 bg-opacity-80 text-gray-300' onChange={changeCategory} value={category} >
            {
                selectItems.map(option => {
                    return <option key={option.value} value={option.value}>{option.name}</option>
                })
            }
        </select>
    )
}

export default Category
