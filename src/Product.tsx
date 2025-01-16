import React from "react";

interface IProductProps {
    title: string;
    description: string;
    price: number;
    images: string[];
    active: boolean

}

export const Product: React.FC<IProductProps> = ({ title, description, price, images, active }) => {
    return (

    );
}

export default Product;