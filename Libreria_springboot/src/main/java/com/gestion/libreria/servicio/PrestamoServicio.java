package com.gestion.libreria.servicio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestion.libreria.modelo.Prestamo;

import com.gestion.libreria.repositorio.PrestamoRepositorio;

@Service
public class PrestamoServicio {
	@Autowired
	private PrestamoRepositorio repositorio;
	

	public List<Prestamo> listarPrestamo() {
		return repositorio.findAll();
	}
	

	public Prestamo guardarPrestamo(Prestamo prestamo) {
		return repositorio.save(prestamo);
	}
	
	
	public Prestamo obtenerPrestamoPorId(Integer id) {
		return repositorio.findById(id).get();
	}
	
	
	public void eliminarPrestamo(Integer id) {
		repositorio.deleteById(id);
	}
}
