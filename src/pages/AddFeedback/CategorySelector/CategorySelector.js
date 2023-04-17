import { useState } from "react";

export function CategorySelector(props) {
    const { showWarning, onCategoryChanged } = props;

    return <select
        name="add_category"
        className={showWarning ? "category_feedback__input warning" : "category_feedback__input"}
        onChange={(event) => onCategoryChanged(event.target.value)}
    >
        <option selected disabled>
            Choose category
        </option>
        <option defaultValue="UI">UI</option>
        <option defaultValue="UX">UX</option>
        <option defaultValue="Enhancement">Enhancement</option>
        <option defaultValue="Bug">Bug</option>
        <option defaultValue="Feature">Feature</option>
    </select>
}