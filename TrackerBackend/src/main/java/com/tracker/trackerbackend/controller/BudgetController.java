package com.tracker.trackerbackend.controller;

import com.tracker.trackerbackend.model.Budget;
import com.tracker.trackerbackend.service.BudgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/budget")
public class BudgetController
{

    @Autowired
    private BudgetService service;
    @RequestMapping("/all")
    public List<Budget> getBudgets()
    {
        return service.getAllBudget();
    }
    @PostMapping("/addBudget")
    public Budget addBudget(@RequestBody Budget budget)
    {
        return service.addAllBudget(budget);
    }

}
