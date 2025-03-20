package com.tracker.trackerbackend.service;

import com.tracker.trackerbackend.model.Budget;
import com.tracker.trackerbackend.repo.BudgetRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class BudgetService {
    @Autowired
    private BudgetRepo budgetRepo;
    public List<Budget> getAllBudget()
    {
        return budgetRepo.findAll();
    }

    public Budget addAllBudget(Budget budget)
    {
        return budgetRepo.save(budget);
    }
}
