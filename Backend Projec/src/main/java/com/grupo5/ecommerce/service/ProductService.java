package com.grupo5.ecommerce.service;

import com.grupo5.ecommerce.dao.ProductDao;
import com.grupo5.ecommerce.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductDao productDao;
    public Product  addNewProduct(Product product){
        return productDao.save(product);
    }

    public List<Product> getAllProducts(){
       return (List<Product>) productDao.findAll();
    }

    public Product getProductDetailsById(Integer productId){
       return productDao.findById(productId).get();
    }

    public void deleteProductDetails(Integer productId){
        productDao.deleteById(productId);
    }
}
