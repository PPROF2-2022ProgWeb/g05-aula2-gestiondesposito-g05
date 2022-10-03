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
import com.gestion.libreria.modelo.Prestamo;
import com.gestion.libreria.servicio.PrestamoServicio;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200")
public class PrestamoControlador {
	@Autowired
	private PrestamoServicio servicio;

	//este metodo sirve para listar los libros
	@GetMapping("/Prestamo")
	public List<Prestamo>  listarPrestamo() {
		return servicio.listarPrestamo();
	}
	
	//este metodo sirve para obtener libros
	@GetMapping("/Prestamo/{id}")
	public ResponseEntity<Prestamo> obtenerPrestamo(@PathVariable Integer id) {
		try {
			Prestamo prestamo=servicio.obtenerPrestamoPorId(id);
			return new ResponseEntity<Prestamo>(prestamo,HttpStatus.OK);
		}catch(Exception exception){
			return new ResponseEntity<Prestamo>(HttpStatus.NOT_FOUND);
		}
	}

	//crea un usuario
	@PostMapping("/Prestamo")
	public void  guardarPrestamo(@RequestBody Prestamo prestamo){
		servicio.guardarPrestamo(prestamo);
		}
	
	@PutMapping("/Prestamo/{id}")
	public ResponseEntity<?> actualizarPrestamo(@RequestBody Prestamo prestamo,@PathVariable Integer id) {
		try {
			Prestamo prestamoExistente=servicio.obtenerPrestamoPorId(id);
			
			prestamoExistente.setId(prestamo.getId());
			prestamoExistente.setFechaEntrega(prestamo.getFechaEntrega());
			prestamoExistente.setFechaSalida(prestamo.getFechaSalida());
			prestamoExistente.setLibro(prestamo.getLibro());
			prestamoExistente.setUsuario(prestamo.getUsuario());
			prestamoExistente.setEstado(prestamo.getEstado());
			
			servicio.guardarPrestamo(prestamoExistente);
			return new ResponseEntity<Prestamo>(HttpStatus.OK);
		}catch(Exception exception){
			return new ResponseEntity<Prestamo>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	//borra un ID
	@DeleteMapping("/Prestamo/{id}")
	public void eliminarPrestamo(@PathVariable Integer id){
		servicio.eliminarPrestamo(id);
	}
}
