import React from "react";

interface IProductProps {
    title: string;
    description: string;
    price: number;
    images?: string[];
    active?: boolean

}

export const Product: React.FC<IProductProps> = ({ title, description, price }) => {
    return (
        <>
            <p>{title}</p>
            <p>{description}</p>
            <p>{price}</p>
        </>

    );
}

export default Product;