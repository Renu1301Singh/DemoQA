# Automated Testing of Demo Website using Nightwatch.js and Page Object Model


## Objective
Testing a Website using Nightwatch.js with Page Object model design pattern.


## Overview

>This repository contains automated test scripts for a demo website using Nightwatch.js,
>a popular end-to-end testing framework, and follows the Page Object Model (POM) design
>pattern for better maintainability and readability of test code automation scripts.


## Website Under Test

For implementing the above objective a demo website is chosen.
...

Website URL:"https://demoqa.com/automation-practice-form"


## Features

- Automated testing of form inputs on demoQA website.
- Utilizes Nightwatch.js for end-to-end testing.
- Follows the Page Object Model for better test structure and maintenance.

## Requirements

Node.js (v12.x or later)
Nightwatch.js
WebDriver (ChromeDriver, GeckoDriver, etc.)

## Project Structure
automated-testing-framework/
│
├── tests/ # Test scripts directory
│ ├── loginTests.js # Test scripts for login functionality
│ ├── registrationTests.js # Test scripts for user registration functionality
│ └── ...
│
├── pages/ # Page Object Model (POM) directory
│ ├── loginPage.js # Page object for login page
│ ├── registrationPage.js # Page object for registration page
│ └── ...
│
├── config/ # Configuration files directory
│ ├── environments.json # Test environment configurations
│ ├── nightwatch.conf.js # Nightwatch configuration file
│ └── ...
│
└── ...



