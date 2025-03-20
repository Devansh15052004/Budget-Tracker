package com.tracker.trackerbackend.service;

import com.tracker.trackerbackend.model.Expense;
import com.tracker.trackerbackend.repo.ExpenseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenseService
{
    @Autowired
    private ExpenseRepo repo;


    public List<Expense> getAllExpense() {
        return repo.findAll();
    }

    public Expense addAllExpense(Expense expense)
    {
        return repo.save(expense);
    }

}
