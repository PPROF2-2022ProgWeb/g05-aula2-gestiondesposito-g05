package Grupo5;
//import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;

//import org.springframework.data.web.JsonPath;
//import org.springframework.web.bind.annotation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;


@RestController
@RequestMapping("/api")





public class UsuarioControlador{
	@Autowired
	private UsuarioRepositorio repository;
	
	//retorna todo
	@GetMapping("/usuarios")
	public List<Usuario> allUsuarios(){
		return repository.findAll();		
	}
	
	//retorna un usuario en especial
	@GetMapping("/usuarios/{name}")
	public List<Usuario> findByName(@PathVariable("name")String name){
		return repository.findByName(name);		
	}
	
	//crea un usuario
	@PostMapping("/usuarios")
	public Usuario createUsuario(@RequestBody Usuario user){
		return repository.save(user);
		}

	//actualiza un ID
	@PostMapping("/usuarios/{id}")
	public Usuario updateUsuario(@PathVariable int id ,@RequestBody Usuario user){
		return repository.save(user);
	}
	
	//borra un ID
	@DeleteMapping("/usuarios/{id}")
	public void deleteUsuario(@PathVariable ("id") Long id){
		repository.deleteById(id);
	}
}

