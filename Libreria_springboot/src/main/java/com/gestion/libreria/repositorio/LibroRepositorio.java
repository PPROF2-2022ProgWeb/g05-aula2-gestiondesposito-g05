package com.gestion.libreria.repositorio;

//import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.gestion.libreria.modelo.Libro;

@Repository
public interface LibroRepositorio extends JpaRepository<Libro, Integer>{
	//List<Libro> findByTitle(@Param("title")String title);
}
