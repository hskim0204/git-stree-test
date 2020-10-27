package com.example.demo.board;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class boardController {

	@CrossOrigin("*")
	@GetMapping(path = "/board")
	public String board() {
		return LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME);
	}
}