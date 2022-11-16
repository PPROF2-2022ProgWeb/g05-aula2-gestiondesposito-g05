package com.grupo5.ecommerce.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user",catalog="grupo5", schema="")
public class registro {
    
@Id
@Column
private Integer user_name;


}
