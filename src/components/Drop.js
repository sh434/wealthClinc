import React from 'react'

const drop = ({ onCategoryChange }) => {
    const categories = ["shikha", "yamuna"];
    return (
        <select onChange={(e) => onCategoryChange(e.target.value)}>
            {categories.map((category) => (
                <option key={category} value={category}>
                    {category}
                </option>
            ))}
        </select>
    )
}

export default drop