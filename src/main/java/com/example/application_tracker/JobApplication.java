package com.example.application_tracker;

public class JobApplication {
private String company;
private String position;
private String status;

public JobApplication (String company, String position, String status) {
    this.company = company;
    this.position = position;
    this.status = status;
}

public String getCompany() {
    return company;
}

public String getPosition() {
    return position;
}

public String getStatus() {
    return status;
}
}