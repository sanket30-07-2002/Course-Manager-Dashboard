package course.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import course.enties.Course;
import course.services.Courseservice;

@CrossOrigin(origins = "http://localhost:5173") // or your React dev port
@RestController
public class MyController 
{
	@Autowired
	private Courseservice courseservice;
	@GetMapping("/home")
	public String home()
	{
		return "Welcome to Courses Applications";
	}
	
	// Get All Courses  Get (localhost:8080/courses)
	
	@GetMapping("/courses")
	public List<Course> getCourses()
	{
		return this.courseservice.getCourses();
	}
	
	
	//Get Course By Id      Get (localhost:8080/courses/1)
	@GetMapping("/courses/{courseId}")
	public Course getCourse(@PathVariable String courseId)
	{
		return this.courseservice.getCourse(Long.parseLong(courseId));
	}
	
	
	//Add Course     Post (localhost:8080/courses)
	@PostMapping("/courses")
	public Course addCourse(@RequestBody Course course)
	{
		return this.courseservice.addCourse(course);
	}
	
	
	
	// Update Course by id       Put (localhost:8080/courses/1)
	@PutMapping("/courses/{courseId}")
	public Course updateCourse(@PathVariable long courseId, @RequestBody Course course)
	{
		course.setId(courseId);
		return this.courseservice.updateCourse(course);
	}
	
	// Delete Course by id      Delete (localhost:8080/courses/2)
	@DeleteMapping("/courses/{courseId}")
	public Course deleteCourse(@PathVariable String courseId)
	{
		return this.courseservice.deleteCourse(Long.parseLong(courseId));
	}

}
