package com.gestion.libreria.repositorio;

//import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.gestion.libreria.modelo.Usuario;

@Repository
public interface UsuarioRepositorio extends JpaRepository<Usuario, Integer> {
	//List<Usuario> findByName(@Param("name")String name);
}
