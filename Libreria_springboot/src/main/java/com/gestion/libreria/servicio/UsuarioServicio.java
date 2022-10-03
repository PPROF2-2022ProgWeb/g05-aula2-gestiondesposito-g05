package com.gestion.libreria.servicio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.gestion.libreria.modelo.Usuario;
import com.gestion.libreria.repositorio.UsuarioRepositorio;

@Service
public class UsuarioServicio {
	@Autowired
	private UsuarioRepositorio repositorio;
	

	public List<Usuario> listarUsuario() {
		return repositorio.findAll();
	}
	

	public Usuario guardarUsuario(Usuario usuario) {
		return repositorio.save(usuario);
	}
	
	
	public Usuario obtenerUsuarioPorId(Integer id) {
		return repositorio.findById(id).get();
	}
	
	
	public void eliminarUsuario(Integer id) {
		repositorio.deleteById(id);
	}
}
