import { CategoryAdd } from 'components/CategoryAdd';
import { GifGrid } from 'components/GifGrid';
import React, { useState } from 'react'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Piece']);
    // const handleAdd = () => {
    //     setCategories( [...categories,'Lizards'] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <CategoryAdd setCategories={setCategories} />
            <hr />            

            <ol>
                {
                    categories.map( category => {
                        return <GifGrid
                             key={category}
                             category={category}
                             />;
                    })
                }
            </ol>
        </>
    )
}
