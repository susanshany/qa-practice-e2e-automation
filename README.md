# QA Practice E2E Automation

This repository contains end-to-end (E2E) automation tests built with Playwright using TypeScript.

## Overview

This project demonstrates E2E test automation using Playwright, a modern and powerful testing framework that enables reliable end-to-end testing for modern web apps.

## Technologies Used

- [Playwright](https://playwright.dev/) - Modern E2E testing framework
- TypeScript - Programming language
- Node.js - Runtime environment

## Prerequisites

- Node.js (Latest LTS version recommended). Install node.js and set the environment variable
- Visual Studio code
- npm (Node Package Manager)
- A modern web browser (Chrome, Firefox, or Edge)

# To create the project from scratch

- Create a folder for the project
- cd into the project
- run  (npm init playwright)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/susanshany/qa-practice-e2e-automation.git
cd qa-practice-e2e-automation
```

2. Install dependencies:
```bash
npm install
```

## Project Structure

```
qa-practice-e2e-automation/
├── tests/              # Test files
├── pages/             # Page Object Models
├── playwright.config.ts   # Playwright configuration
└── package.json       # Project dependencies and scripts
```

## Running Tests

To run all tests:
```bash
npx playwright test
```

To run tests in UI mode:
```bash
npx playwright test --ui
```

To run tests in a specific browser:
```bash
npx playwright test --project=chromium
```

## To run @regression or smoke tsets

npx playwright test --grep '@Regression'

## To Runthe test in debug mode

1. npx playwright test tests/formValidationTest.spec.ts --debug

## Record and playback  with Codgen

npx playwright codegen https://qa-practice.netlify.app/bugs-form

## Run the project from a special configuration file(create new configuration file playwright.config1.ts )

npx playwright test tests/formValidationTest.spec.ts --config playwright.config1.ts

## To run the test from the custom script in the package.json file

npm run regression:test

## To install allure to see allure report
Install JAVA and set the env variable(Java prerequist for allure report)
install allure playwright plugin
npm -i -D @playwright/test allure-playwright

## To see the allure report
Script in Package.json open allure report 

## Integrate the framework with Jenkin
download Jenkin 
then run the command
java -jar jenkins.war -httpPort=8080
then open 
localhost:8080
and setthe project

## Writing Tests

- Follow the Page Object Model pattern
- Keep tests atomic and independent
- Use meaningful descriptions
- Follow TypeScript best practices
- Implement proper assertions

## Best Practices

1. Use Page Object Model for better maintainability
2. Write reusable test helpers and utilities
3. Keep selectors up to date
4. Add proper test descriptions
5. Handle timeouts and waits properly
6. Add proper assertions
7. Use test data management

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

- Shany Sabu
