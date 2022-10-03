package com.gestion.libreria.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gestion.libreria.modelo.Prestamo;


public interface PrestamoRepositorio extends JpaRepository<Prestamo, Integer>  {

}
