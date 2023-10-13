[![Netlify Status](https://api.netlify.com/api/v1/badges/5a0f3cd6-4264-4d26-89b2-49d56405256f/deploy-status)](https://app.netlify.com/sites/gregarious-granita-344ab3/deploys)

Check out the live app [here!](https://gregarious-granita-344ab3.netlify.app)

# Data Kernel_

The Data Kernel Repository is part of a project assignment completed for Northeastern University London. The core functionality for the developed web app is as a portal for test data exports. The web app was developed in 2023 as a Minimum Viable Product using Github Projects as the project's management tool. The linked project is [here](https://github.com/users/kirryl/projects/1/views/3).

![alt](res/github-mark-white.svg)

## Project Management

The project for developing Data Kernel was organised using Github Projects and the issues and milestones functionality of Github. Each project task was ticketed and tracked in the Project ticketing system.

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
