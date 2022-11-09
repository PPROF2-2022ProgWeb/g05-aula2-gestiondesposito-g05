package com.grupo5.ecommerce.service;

import com.grupo5.ecommerce.configuration.JwtRequestFilter;
import com.grupo5.ecommerce.dao.OrderDetailDao;
import com.grupo5.ecommerce.dao.ProductDao;
import com.grupo5.ecommerce.dao.UserDao;
import com.grupo5.ecommerce.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailService {
    private static final String ORDER_PLACED="Placed";

    @Autowired
    private OrderDetailDao orderDetailDao;

    @Autowired
    private ProductDao productDao;

    @Autowired
    private UserDao userDao;

    public void placeOrder(OrderImput orderImput) {

        List<OrderProductQuantity> productQuantityList=  orderImput.getOrderProductQuantityList();

        for(OrderProductQuantity o: productQuantityList){
            Product product = productDao.findById(o.getProductId()).get();

            String currentUser = JwtRequestFilter.CURRENT_USER;
            User user= userDao.findById(currentUser).get();

            OrderDetail orderDetail = new OrderDetail(
                    orderImput.getFullName(),
                    orderImput.getFullAddress(),
                    orderImput.getContactNumber(),
                    orderImput.getAlternateContactNumber(),
                    ORDER_PLACED,
                    product.getProductActualPrice() * o.getQuantity(),
                    product,
                    user
            );
            orderDetailDao.save(orderDetail);
        }
    }
}
