[![Netlify Status](https://api.netlify.com/api/v1/badges/5a0f3cd6-4264-4d26-89b2-49d56405256f/deploy-status)](https://app.netlify.com/sites/gregarious-granita-344ab3/deploys)

Check out the live app [here!](https://gregarious-granita-344ab3.netlify.app)

# Data Kernel_

Welcome to the official repository for the Data Kernel project, developed as a part of a project assignment at Northeastern University London. The linked GitHub project is [here](https://github.com/users/kirryl/projects/1/views/3).

 The Data Kernel web application serves the purpose of generating valuable test data, catering to developers in need of datasets for application testing or populating non-production databases during their development phase.

The Data Kernel web app is constructed using the NodeJS and ReactJS stack. The React app was initialized using create-react-app, providing a streamlined project setup. Additionally, React-bootstrap has been implemented to maintain a consistent user interface theme and leverage its pre-built components for the rapid development of a Minimum Viable Product.

For further information on the project structure, dependencies, and user manual, please refer to the relevant sections below as well as the extensive project report.

## Quick Start Guide

To set up the Data Kernel app locally in your console, follow these steps:

1. Install [Node](https://nodejs.org/en/download) version 18, 19, or 20 (The application is tested to support all three)

2. Check that your local node version is correct

   ```bash
   node --version
   ```

3. Navigate to your local repository directory

    ```bash
    bash
    cd ./your/chosen/local/repository/directory
    ```

4. Clone the repository

    ```bash
    git clone https://github.com/kirryl/ase-summative-2.git
    ```

5. Navigate into the project directory

    ```bash
    cd ./ase-summative-2
    git pull
    ```

6. To run the production version of the codebase (skip this step if you want to run the latest development code):

    ```bash
    git checkout main
    ```

7. Navigate to the Data Kernel directory:

    ```bash
    cd data-kernel
    ```

8. Install dependencies:

    ```bash
    npm install
    ```

9. Start the web app locally:

    ```bash
    npm start
    ```

A browser window should open with the locally hosted app.
If a browser window doesn't open, navigate to url `http://localhost:3000/`in your browser.

See the project report for guidance on local testing.

## Repository Structure
The repository is organised for easy navigation and understanding of the codebase. Key directories include:

`data-kernel/src/`: Contains the source code for the Data Kernel web app.

`data-kernel/public/`: Houses public assets and the HTML file used as the entry point for the React app.

`data-kernel/node_modules/`: Contains Node.js dependencies (managed by npm).

`.github/`: Houses github DevOps related files including GitHub Action workflows.

`res/`: Contains resources such as image files used for this README.

## Dependenies
The project has these major dependencies:

- **NodeJS**: The JavaScript framework used for server-side development.

- **ReactJS**: A JavaScript library for building user interfaces.

- `create-react-app`: A tool for creating React applications with a predefined project structure.

- `react-bootstrap`: A library providing Bootstrap components as React components for a consistent and responsive UI.

# Project Report

## Table of Contents

TBC

## Background

In software development and data-engineering developers often find there is a lack of readily available and easily accessible test data for development and testing their non-production system. This is an obstacle to development and a can slow down the testing workflow. To test a non-production system, developers and testers require an abundance of test data to cover various test cases.

For example, when creating a database containing reference data for different countries, the onus falls on the developer to generate a dataset for their database from scratch. This additional step in a developer's workflow acts as a blocker for the overall software development process.

The primary objective of the Data Kernel Project is to deliver a Minimum Viable Product (MVP) that addresses the problem of inaccessible test data. The MVP aims to streamline test data access, reducing testing effort and accelerating the software development process.

## Project Management

![Project Timeline](./res/project-timeline.PNG)

The project developing the data kernel web app was organised using GitHub Projects, as well as the remote repository tools on GitHub. Each task and product feature was ticketed, refined and tracked using the GitHub project ticketing system. At the outset of the project, there was no concrete path to a solution for the testing data problem. Therefore, there was no clear set of features to implement without some prerequisite problem analysis and ideation.

### Software Development Process

The software development framework chosen for this project was a variation of Kanban. This approach sees tasks organised in tickets which are placed in several sequential lanes on a Kanban board. As a ticket is refined, assigned, implemented, tested and completed it is moved through each lane. This approach was taken as it is a relatively simple way of visualising a task’s current state. When implementing this framework a best practice is to ensure there are minimal tasks in progress at any single time. The reasoning behind this process is that if many tasks are worked on simultaneously, then it increases the time it takes for any single task to be completed and deployed. By prioritising quick win tickets, it was possible to deploy them and get feedback sooner.

Another agile approach used which was a variation on the standard Kanban framework was using sprints. Agile sprints set out a repeating time period in which tasks are planned and refined. Each sprint has a particular goal, which is aimed to be completed by the end of the sprint. For this project, the time period chosen for a sprint was three days.  this is a move away from a more traditional sprint time which usually lasts one or two weeks. However as the project timeframe was short And the aim was to produce an MVP, The shorter sprint time was expected to reduce the time to deploy and get feedback. At the end of a 3-day sprint, a brief session was held to refine tickets for the next sprint, with a definition of done and subtasks.

After reviewing the agile methods used in this project there were some lessons learnt. The Kanban board worked as intended in providing a useful view of task progress. However, the shorter sprint time was not adequate to effectively complete sprint goals. Also, the short sprint time did not factor in the time taken to create and refine tickets. In effect, the shorter sprint times constricted the time left to develop features. It is possible that in a less cross-functional and larger development team, the shorter sprint time would be more effective.

### Ticketing

Any ticket which can be fixed via a pull request is created as a Github Issue. The project follows an incremental development approach. Each sprint the new feature issues would expand on the functionality of the web app. At the start of a sprint, each planned ticket is refined to specify the aim and requirements for a user story.

Github Milestones are used in the place of traditional 'epics'. The milestone groups a set of tickets which relate to a project deliverable or greater functionality.

## Project Steps

### Problem Analysis

![alt text](res/Ideate1.PNG)

![alt text](res/Ideate2.PNG)

### User Interface Design

![alt text](res/Figma1.PNG)

![alt text](res/Figma2.PNG)

[Figma Link](https://www.figma.com/file/YsBjuMR3hcsKRLJFGfePu4/Data-Kernel_?type=design&node-id=4%3A63&mode=design&t=KhngNZH3w0eEhSVj-1)

### Development Sprints

TBC sprint length

TBC refinement

## App Testing

<p align="left">
    <img src="res/jest-logo.PNG" alt="Jest library logo" height="125">
</p>

### Component Testing

The Data Kernel app is built with functional components. The Jest framework is used to run component testing for the web app. This library was chosen as it has wide use and comes configured with the create-react-app library.

To run the testing suite locally execute the following in the console:

```node
cd data-kernel
npm run test
```

<p align="left">
    <img src="res/codecov.svg" alt="Netlify logo" height="125">
</p>

### Test Coverage

The repository's CI/CD pipeline includes automated code coverage. On the create/update of a pull request into one of the protected branches (`development`, `quality-assurance`, `main`), a github workflow runs generates a `.xml` test coverage report. The same workflow publishes the coverage report to Codecov. The Codecov service creates analytics on the repository's test coverage.

The repository needs regular test coverage reports, so that there is no untested functionality in the web app. Running the coverage report when creating a pr flags any deterioration in coverage. If the percentage coverage reduces between changes, the developer it expected to at least match the previous test coverage.

## CI/CD

TBC Intro on CD/CD

<p align="left">
    <img src="res/Netlify-logo.png" alt="Netlify logo" height="125">
</p>

### Environments

The app is deployed sequentially in the `development`, `quality-assurance`, and `main` environments. The Netlify platform is used to build and deploy the web app to each environment.

#### Development

The `development` branch and environment is a stable version of the web app for active development.

Access `development` environment [here](https://tangerine-lebkuchen-6fc955.netlify.app)

[![Netlify Status](https://api.netlify.com/api/v1/badges/1170c14b-2e3c-494c-96d7-6a5cedd89970/deploy-status)](https://app.netlify.com/sites/tangerine-lebkuchen-6fc955/deploys)

#### Quality Assurance

The `quality-assurance` branch and environment is for QA testing, user acceptance testing and staging changes before merging to `main`.

Access `quality-assurance` environment [here](https://mellow-heliotrope-691105.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/6f10fd74-83f9-4bc0-a00c-21ae7abf3ef2/deploy-status)](https://app.netlify.com/sites/mellow-heliotrope-691105/deploys)

#### Live

The `main` branch and environment is the live version of the web app and latest release from continuous integration.

Access `main` environment [here](https://gregarious-granita-344ab3.netlify.app)

[![Netlify Status](https://api.netlify.com/api/v1/badges/5a0f3cd6-4264-4d26-89b2-49d56405256f/deploy-status)](https://app.netlify.com/sites/gregarious-granita-344ab3/deploys)

### Workflow Automation

TBC on CI/CD pipelines
