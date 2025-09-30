package me.sr.bend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {

    // Custom query methods based on property names
    List<Person> findByLastName(String lastName);

    List<Person> findByEmailContaining(String emailFragment);

    List<Person> findByFirstNameAndLastName(String firstName, String lastName);
}