package com.gestion.libreria.controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestion.libreria.modelo.Usuario;
import com.gestion.libreria.servicio.UsuarioServicio;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200")
public class UsuarioControlador {
	@Autowired
	private UsuarioServicio servicio;

	//este metodo sirve para listar los libros
	@GetMapping("/Usuario")
	public List<Usuario>  listarUsuario() {
		return servicio.listarUsuario();
	}
	
	//este metodo sirve para obtener libros
	@GetMapping("/Usuario/{id}")
	public ResponseEntity<Usuario> obtenerUsuario(@PathVariable Integer id) {
		try {
			Usuario usuario=servicio.obtenerUsuarioPorId(id);
			return new ResponseEntity<Usuario>(usuario,HttpStatus.OK);
		}catch(Exception exception){
			return new ResponseEntity<Usuario>(HttpStatus.NOT_FOUND);
		}
	}

	//crea un usuario
	@PostMapping("/Usuario")
	public void  guardarUsuario(@RequestBody Usuario usuario){
		servicio.guardarUsuario(usuario);
		}
	
	@PutMapping("/Usuario/{id}")
	public ResponseEntity<?> actualizarUsuario(@RequestBody Usuario usuario,@PathVariable Integer id) {
		try {
			Usuario usuarioExistente=servicio.obtenerUsuarioPorId(id);
			
			usuarioExistente.setId(usuario.getId());
			usuarioExistente.setDomicilio(usuario.getDomicilio());
			usuarioExistente.setEmail(usuario.getEmail());
			usuarioExistente.setFechaNac(usuario.getFechaNac());
			usuarioExistente.setLast_name_m(usuario.getLast_name_m());
			usuarioExistente.setLast_name_p(usuario.getLast_name_p());
			usuarioExistente.setName(usuario.getName());
			usuarioExistente.setSancMoney(usuario.getSancMoney());
			usuarioExistente.setSanctions(usuario.getSanctions());
			usuarioExistente.setTel(usuario.getTel());
			
			servicio.guardarUsuario(usuarioExistente);
			return new ResponseEntity<Usuario>(HttpStatus.OK);
		}catch(Exception exception){
			return new ResponseEntity<Usuario>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	//borra un ID
	@DeleteMapping("/Usuario/{id}")
	public void eliminarUsuario(@PathVariable Integer id){
		servicio.eliminarUsuario(id);
	}
}
