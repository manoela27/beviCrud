
import { updateProduct, deleteProduct, getAllProducts} from './api';


export const updateProductService = async (productData) => {
    const response = await updateProduct(productData);  
    return response.data;
};


export const deleteProductService = async (id) => {
    const response = await deleteProduct(id);  
    return response.data;
};

export const getAllProductsService = async () => {
    const response = await getAllProducts(); 
    return response; 
};