package com.grupo5.ecommerce.dao;

import com.grupo5.ecommerce.entity.OrderDetail;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;
@Repository
public interface OrderDetailDao extends CrudRepository<OrderDetail, Integer>{
}
