package com.gestion.libreria.modelo;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "books")
@EntityListeners(AuditingEntityListener.class)
public class Libro {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "title")
	private String title;

	@Column(name = "date")
	private String date;

	@Column(name = "author")
	private String author;

	@Column(name = "category")
	private String category;

	@Column(name = "edit")
	private String edit;

	@Column(name = "lang")
	private String lang;

	@Column(name = "pages")
	private String pages;

	@Column(name = "description")
	private String description;

	@Column(name = "ejemplares")
	private String ejemplares;

	@Column(name = "stock")
	private int stock;

	@Column(name = "available")
	private int available;

	
	@OneToMany (mappedBy="libro")
	private Set<Prestamo> prestamo = new HashSet<>();


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getDate() {
		return date;
	}


	public void setDate(String date) {
		this.date = date;
	}


	public String getAuthor() {
		return author;
	}


	public void setAuthor(String author) {
		this.author = author;
	}


	public String getCategory() {
		return category;
	}


	public void setCategory(String category) {
		this.category = category;
	}


	public String getEdit() {
		return edit;
	}


	public void setEdit(String edit) {
		this.edit = edit;
	}


	public String getLang() {
		return lang;
	}


	public void setLang(String lang) {
		this.lang = lang;
	}


	public String getPages() {
		return pages;
	}


	public void setPages(String pages) {
		this.pages = pages;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public String getEjemplares() {
		return ejemplares;
	}


	public void setEjemplares(String ejemplares) {
		this.ejemplares = ejemplares;
	}


	public int getStock() {
		return stock;
	}


	public void setStock(int stock) {
		this.stock = stock;
	}


	public int getAvailable() {
		return available;
	}


	public void setAvailable(int available) {
		this.available = available;
	}


	public Set<Prestamo> getPrestamo() {
		return prestamo;
	}


	public void setPrestamo(Set<Prestamo> prestamo) {
		this.prestamo = prestamo;
		for(Prestamo prestam:prestamo) {
			prestam.setLibro(this);
		}
	}
	
	
}
