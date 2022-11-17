package com.grupo5.ecommerce.controller;

@RestController
@RequestMapping("/registro")
public class Registrocontrolador {


@Autowired
private UserregDao userregDao;

@GetMapping
public List< >

@PostMapping
public void insertar(@RequestBody User user){
    userregDao.save(user);
}
}