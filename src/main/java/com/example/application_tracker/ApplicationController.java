package com.example.application_tracker;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.ArrayList;

@RestController
public class ApplicationController {

    private final ArrayList<JobApplication> applications = new ArrayList<>();


    @GetMapping("/applications")
    public ArrayList<JobApplication> getApplication() {
        return applications;
    }

    @PostMapping("/applications")
    public JobApplication addApplication( @RequestBody JobApplication application) {
        applications.add(application);

        return application;
    }
}