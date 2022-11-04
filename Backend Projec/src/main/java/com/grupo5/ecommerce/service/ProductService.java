package com.grupo5.ecommerce.service;

import com.grupo5.ecommerce.dao.ProductDao;
import com.grupo5.ecommerce.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    @Autowired
    private ProductDao productDao;
    public Product  addNewProduct(Product product){
        return productDao.save(product);
    }
}
