package com.gestion.libreria.servicio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestion.libreria.modelo.Libro;
import com.gestion.libreria.repositorio.LibroRepositorio;


@Service
public class LibroServicio {
	@Autowired
	private LibroRepositorio repositorio;
	

	public List<Libro> listarLibros() {
		return repositorio.findAll();
	}
	

	public Libro guardarLibros(Libro libros) {
		return repositorio.save(libros);
	}
	
	
	public Libro obtenerLibroPorId(Integer id) {
		return repositorio.findById(id).get();
	}
	
	
	public void eliminarLibro(Integer id) {
		repositorio.deleteById(id);
	}
}
