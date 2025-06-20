package course.services;

import java.util.List;
import course.enties.Course;

public interface Courseservice {

	// Get All Courses  Get (localhost:8080/courses)
	public List<Course> getCourses();
	
	//Get Course By Id      Get (localhost:8080/courses/1)
	public Course getCourse(long courseId);
	
	//Add Course     Post (localhost:8080/courses)
	public Course addCourse(Course course);
	
	
	// Update Course  Put (localhost:8080/courses/1)
	public Course updateCourse(Course course);
	
	
	// Delete Course by id      Delete (localhost:8080/courses/2)
	public Course deleteCourse(long courseId);
}
