package com.grupo5.ecommerce.dao;

import com.grupo5.ecommerce.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserregDao extends CrudRepository<User, String>{

}