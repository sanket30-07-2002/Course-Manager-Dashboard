package course.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import course.enties.Course;
import course.repository.CourseRepository;

//@Service
//public class CourseServiceImpl implements Courseservice {
//
//	List<Course> list;
//	public CourseServiceImpl()
//	{
//		list=new ArrayList();
//		list.add(new Course(1, "Java Core Course", "This Course contains basics of java"));
//		list.add(new Course(2, "Spring Boot", "This is course covere basics of Spring Boot"));
//		}
//	
//	
//	// Get All Courses  Get (localhost:8080/courses)
//	@Override
//	public List<Course> getCourses() {
//		
//		return list;
//	}
//
//
//	//Get Course By Id      Get (localhost:8080/courses/1)
//	@Override
//	public Course getCourse(long courseId) {
//		
//		Course c = null;
//		for(Course course:list)
//		{
//			if(course.getId()==courseId)
//			{
//				c=course;
//				break;
//			}
//		}
//		return c;
//	}
//
//
//	
//	//Add Course      Post (localhost:8080/courses)
//	@Override
//	public Course addCourse(Course course) {
//
//		list.add(course);
//		return course;
//	}
//
//
//	// Update Course by id  Put (localhost:8080/courses/1)
//	@Override
//	public Course updateCourse(Course course) {
//		
//		for(Course c : list)
//		{
//			if(c.getId() == course.getId())
//			{
//				c.setTitle(course.getTitle());
//				c.setDescription(course.getDescription());
//				return c;
//			}
//		}
//		throw new RuntimeException("Course with ID " + course.getId() + " not found");
//		
//	}
//
//
//	// Delete Course by id      Delete (localhost:8080/courses/2)
//	@Override
//	public Course deleteCourse(long courseId) {
//		
//		Iterator<Course> iterator = list.iterator();
//		while(iterator.hasNext())
//		{
//			Course course = iterator.next();
//			if(course.getId() == courseId)
//			{
//				iterator.remove();
//				return course;
//			}
//		}
//		throw new RuntimeException("Course with ID " + courseId + " not found");
//	}
//}


@Service
public class CourseServiceImpl implements Courseservice {

    @Autowired
    private CourseRepository courseRepo;

    @Override
    public List<Course> getCourses() {
        return courseRepo.findAll();
    }

    @Override
    public Course getCourse(long courseId) {
        return courseRepo.findById(courseId)
                .orElseThrow(() -> new RuntimeException("Course not found"));
    }

    @Override
    public Course addCourse(Course course) {
        return courseRepo.save(course);
    }

    @Override
    public Course updateCourse(Course course) {
        if (!courseRepo.existsById(course.getId())) {
            throw new RuntimeException("Course not found");
        }
        return courseRepo.save(course); // save() updates if ID exists
    }

    @Override
    public Course deleteCourse(long courseId) {
        Course course = courseRepo.findById(courseId)
                .orElseThrow(() -> new RuntimeException("Course not found"));
        courseRepo.delete(course);
        return course;
    }
}


