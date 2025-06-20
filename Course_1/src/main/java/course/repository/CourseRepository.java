package course.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import course.enties.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {
}
