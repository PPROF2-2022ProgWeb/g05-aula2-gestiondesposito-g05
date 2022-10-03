package com.gestion.libreria.modelo;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name = "prestamo")
@EntityListeners(AuditingEntityListener.class)
public class Prestamo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	// indico que muchos prestamos pueden
	// pertenecer a un libro
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "libro")
	@JsonProperty(access = Access.WRITE_ONLY)
	private Libro libro;

	// indico que muchos prestamos pueden
	// pertenecer a un usuario
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "usuario")
	@JsonProperty(access = Access.WRITE_ONLY)
	private Usuario usuario;

	@Column(name = "fechaSalida")
	private LocalDate fechaSalida;

	@Column(name = "fechaEntrega")
	private LocalDate fechaEntrega;

	@Column(name = "estado")
	private int estado;

	public Prestamo() {
		super();
	}

	public Prestamo(int id, Libro libro, Usuario usuario, LocalDate fechaSalida, LocalDate fechaEntrega, int estado) {
		super();
		this.id = id;
		this.libro = libro;
		this.usuario = usuario;
		this.fechaSalida = fechaSalida;
		this.fechaEntrega = fechaEntrega;
		this.estado = estado;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Libro getLibro() {
		return libro;
	}

	public void setLibro(Libro libro) {
		this.libro = libro;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public LocalDate getFechaSalida() {
		return fechaSalida;
	}

	public void setFechaSalida(LocalDate fechaSalida) {
		this.fechaSalida = fechaSalida;
	}

	public LocalDate getFechaEntrega() {
		return fechaEntrega;
	}

	public void setFechaEntrega(LocalDate fechaEntrega) {
		this.fechaEntrega = fechaEntrega;
	}

	public int getEstado() {
		return estado;
	}

	public void setEstado(int estado) {
		this.estado = estado;
	}

}
