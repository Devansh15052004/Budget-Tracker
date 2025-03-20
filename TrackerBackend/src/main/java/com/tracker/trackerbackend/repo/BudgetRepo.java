package com.tracker.trackerbackend.repo;

import com.tracker.trackerbackend.model.Budget;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BudgetRepo extends JpaRepository<Budget,Integer>
{

}
