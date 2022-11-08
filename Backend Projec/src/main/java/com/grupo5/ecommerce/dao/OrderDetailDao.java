package com.grupo5.ecommerce.dao;

import com.grupo5.ecommerce.entity.OrderDetail;
import org.springframework.data.repository.CrudRepository;


public interface OrderDetailDao extends CrudRepository<OrderDetail, Integer> {
}
