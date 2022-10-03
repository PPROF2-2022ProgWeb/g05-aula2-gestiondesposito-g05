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

import com.gestion.libreria.modelo.Libro;
import com.gestion.libreria.servicio.LibroServicio;



@RestController
@RequestMapping("/api/v2")
@CrossOrigin(origins="http://localhost:4200")
public class LibroControlador {
	@Autowired
	private LibroServicio servicio;

	//este metodo sirve para listar los libros
	@GetMapping("/Libros")
	public List<Libro>  listarLibros() {
		return servicio.listarLibros();
	}
	
	//este metodo sirve para obtener libros
	@GetMapping("/Libros/{id}")
	public ResponseEntity<Libro> obtenerLibro(@PathVariable Integer id) {
		try {
			Libro libro=servicio.obtenerLibroPorId(id);
			return new ResponseEntity<Libro>(libro,HttpStatus.OK);
		}catch(Exception exception){
			return new ResponseEntity<Libro>(HttpStatus.NOT_FOUND);
		}
	}

	//crea un usuario
	@PostMapping("/Libros")
	public void  guardarLibros(@RequestBody Libro libro){
		servicio.guardarLibros(libro);
		}
	
	@PutMapping("/Libros/{id}")
	public ResponseEntity<?> actualizarLibro(@RequestBody Libro libro,@PathVariable Integer id) {
		try {
			Libro libroExistente=servicio.obtenerLibroPorId(id);
			
			libroExistente.setAuthor(libro.getAuthor());
			libroExistente.setAvailable(libro.getAvailable());
			libroExistente.setCategory(libro.getCategory());
			libroExistente.setDate(libro.getDate());
			libroExistente.setDescription(libro.getDescription());
			libroExistente.setEdit(libro.getEdit());
			libroExistente.setEjemplares(libro.getEjemplares());
			libroExistente.setLang(libro.getLang());
			libroExistente.setPages(libro.getPages());
			libroExistente.setStock(libro.getStock());
			libroExistente.setTitle(libro.getTitle());
			
			servicio.guardarLibros(libroExistente);
			return new ResponseEntity<Libro>(HttpStatus.OK);
		}catch(Exception exception){
			return new ResponseEntity<Libro>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	//borra un ID
	@DeleteMapping("/Libros/{id}")
	public void eliminarLibro(@PathVariable Integer id){
		servicio.eliminarLibro(id);
	}
}
