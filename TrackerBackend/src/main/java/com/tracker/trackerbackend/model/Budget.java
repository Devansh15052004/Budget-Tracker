package com.tracker.trackerbackend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Table
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Budget
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String month;
    private Date date;
    private Double budget;
}
