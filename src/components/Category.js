import React from 'react'

const Category = ({category, changeCategory, selectItems}) => {
    return (
        <select class='my-2 md:my-4 rounded bg-gray-800 text-gray-300' onChange={changeCategory} value={category} >
            {
                selectItems.map(option => {
                    return <option key={option.value} value={option.value}>{option.name}</option>
                })
            }
        </select>
    )
}

export default Category
