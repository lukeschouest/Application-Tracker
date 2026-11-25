package com.example.application_tracker;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.ArrayList;
import java.util.List;

@RestController
public class ApplicationController {

    private final ArrayList<JobApplication> applications = new ArrayList<>();


    @GetMapping("/applications")
    public ArrayList<JobApplication> getApplication() {
        return applications;
    }
}