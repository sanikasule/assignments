export interface User {
    id: number;
    name: string;
    email: string;
}

export interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

//inheritance
export interface CartItem extends Product {
    quantity: number
}