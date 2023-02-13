import axios from 'axios';
import { INewProduct, IProduct } from '../Interfaces';

export async function getProducts(): Promise<IProduct[]>  {
    const response = await axios.get<IProduct[]>('/api/products/');
    return response.data;
}

export async function addProduct(product: INewProduct): Promise<void> {
    await axios.post('/api/products', product);    
}