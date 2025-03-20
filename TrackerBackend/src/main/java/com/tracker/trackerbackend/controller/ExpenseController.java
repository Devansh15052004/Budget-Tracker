package com.tracker.trackerbackend.controller;

import com.tracker.trackerbackend.model.Expense;
import com.tracker.trackerbackend.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/expense")
public class ExpenseController
{
    @Autowired
    private ExpenseService service;

    @GetMapping("/history")
    public List<Expense>getExpense()
    {
        return service.getAllExpense();
    }

    @PostMapping("/add")
    public Expense addExpense(@RequestBody Expense expense)
    {
        return service.addAllExpense(expense);
    }

}
