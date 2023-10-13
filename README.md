<div align="center">

<img width="150mm"  src="data-kernel/src/logo-white.svg">

[![Netlify Status](https://api.netlify.com/api/v1/badges/5a0f3cd6-4264-4d26-89b2-49d56405256f/deploy-status)](https://app.netlify.com/sites/gregarious-granita-344ab3/deploys)
[![codecov](https://codecov.io/gh/kirryl/ase-summative-2/graph/badge.svg?token=SG9B2TBR77)](https://codecov.io/gh/kirryl/ase-summative-2)

</div>

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

10. In the browder window click on the tile containing 'Countries'

11. Click on the 'Export JSON' button to download the country data export (In testing the api has not always produced a result, so a second press may be required)

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

![Kanban tickets](res/ticketing.PNG)

To use GitHub projects and the GitHub repository effectively together each task was created as an issue in the project repository. Prior to a sprint, a task in the backlog is refined. During a refinement session a ticket would:

- have a brief explanation added
- assigned subtasks if it could be broken down into steps
- be allocated to a milestone
- given a complexity estimate

The complexity estimates are not related to how much time would be spent on a ticket but rather its complexity.  for instance, a task which has no unknowns could be estimated to be a Fibonacci number of 1 or 2,  whereas tasks with unknowns could be estimated at 5 or 8.

### Milestones

One feature of GitHub used in this project is Milestones. For each stage in the incremental development of Data Kernel, a milestone was set. Each ticket which contributed to reaching a milestone was assigned to it. This way it was clear which tasks were helping achieve a milestone. If assigned to a milestone, the ticket could be prioritised to reach a milestone faster.

### Naming conventions

During the project some naming conventions were enforced for consistency

Tickets:

- Base verb used at the begining of a ticket name (e.g. `Add, Update, Fix`)

Commits:

- Base verb used at the begining of a ticket name (e.g. `Add, Update, Fix`)
- Only capitalise first word of a commit (e.g. `Add more tests`)

Branches:

- All lower case
- Hyphen `-` separated names
- Feature branch names start with `feature` (e.g. `feature-add-more-tests`)

## Problem Analysis and Ideation

Before a set of user stories can be created the user’s problem needs to be analysed. This was completed using Miro, which is an online tool that functions as an interactive online board. The problem was defined as ‘Developer workflow slowed down by the need to create test data’. Leading on from that there was an ideation session, to brainstorm possible solutions to address the user problem, as evidenced in the picture below. In this session, each feature idea was evaluated with pros and cons to help choose a feasible solution.

From the problem analysis session, the target user and customer stakeholders were defined as software developers and data engineers. This is because these stakeholder groups are most likely to be using generic test data for their work tasks. Software testers were considered as well, but as they often require more specialised test data any tester-specific user stories were set aside for future development opportunities.

![Problem Analysis evidence](res/Ideate1.PNG)

![Ideation evidence](res/Ideate2.PNG)

Once the good and bad of each idea were set out, three ideas were shortlisted for the Minimal Viable Product. These three deliverables are specified in the image above, with a reason for why they were shortlisted.

Not listed in the ideation documents are the non-functional requirements (NFRs) which would need to be satisfied by the web app. These include:

- scalable and future-proof ui design.
- accessibility requirements, such as alt text for screen readers and UI colour selection.
- usability with responsive user interface.

Some of the other stakeholders apart from the final userm, to be included in the project were:

- A developer to code review any code additions
- A selected user to assess the quality and acceptance test feature releases.

## Choosing a Technical Stack

After ideation was complete, it was then time to choose a technical stack to use for the web app. There were several options from the outset including AngularJS, ReactJS or NextJS for a front end and possibly a flask app to act as a server-side API. After some deliberation ReactJS was chosen as it could serve as a lightweight front-end web app. As the application would be relying on external APIs it was decided not to develop a back-end service for this project. However, for any future development, there is the opportunity to create an API to serve any custom data generation.

Node Package Manager was chosen to handle the external dependencies required for the React App and testing libraries.

## User Interface Design

To design the user interface a prototyping tool - Figma was used. Figma allowed the rough components making up the UI to be planned so that there was a template to aim for in the final product, which is shown in the images below. The project was set out to create a Minimal Viable Product, so the main functionalities selected during ideation are presented in the UI design. These are the export button and the filtering components.

As the product is only meant to be an MVP, the UI design also includes some areas for expansion. One of the NFRs is to make the app design scalable, so a landing page has been designed to serve as a directory for future additional test data portals to be linked from. Also included in the UI design document is a navigation bar, to make navigation within the web app simple. This was added to improve usability and it is always available at the bottom of the viewport.

The colour palette used in the UI prototype was originally chosen to be vibrant and visually pleasing. As the web app was being developed, some of the feedback from quality assurance testing raised that the grey text was not very readable. This would be a potential accessibility concern, so the palette was changed in the final web app implementation to have greater contrast.

![alt text](res/Figma1.PNG)

![alt text](res/Figma2.PNG)

The link to the Figma prototype is [here](https://www.figma.com/file/YsBjuMR3hcsKRLJFGfePu4/Data-Kernel_?type=design&node-id=4%3A63&mode=design&t=KhngNZH3w0eEhSVj-1)

## Setting up the Development Environment

Before development could begin on the features of the web app, an efficient development environment was created. The repository was set to have a conventional directory structure with a `res/` folder for images and resources and a `.github/` folder. The latter stores a pull request (PR) template, which automatically populates a PR with sections for a description, story ticket links and a checklist for testing, code comments and documentation. This addition accelerated the developer workflow significantly and caught PRs missing comments before they were merged into an environment.

Also in the `.github/` directory are the GitHub action workflow files. The workflows defined here automate testing whenever a PR is made to a protected branch. The `on-create-pull-request.yml` workflow is triggered by a PR and uses the reusable workflows `run-generate-code` and `run-node-tests`. The former generates test coverage reports and deploys them to Codecov and the latter tests building and unit testing the ReactJS app.

The automated workflows enable multiple node version testing. Before a PR is merged to `development` it is build-tested and unit-tested in node versions 18, 19 and 20. This prevents obsolescence, as we are future-proofing the app to work in the newest Node versions.  The image below shows the GitHub Action in action.

![Alt text](res/action-workflow.PNG)

Another task involved in setting up the development environment is protecting the environment branches. The three branches `development`, `quality-assurance` and `main` hold the code deployed to each of the web app environments. To stop bad code from being pushed into these environments several protection rules were set up:

- Pushing code directly is blocked to protected branches
- A code review approval is required from a user other than a PR author to merge a branch into a target protected branch

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

### CI/CD

<p align="left">
    <img src="res/Netlify-logo.png" alt="Netlify logo" height="125">
</p>

The project set out to employ Continuous Integration and Continuous Deployment throughout the development of the Data Kernel Web App. Using the established environment branches, when a completed feature reached `development`, the code app would be deployed to Netlify as a stable development deployment. Once a group of features were deployed in development, the `development` branch would be merged into `quality assurance` which triggered a deployment to a Netlify QA environment. Once QA testing is complete the features are merged into `main`, where the live application is deployed again to Netlify. This automated approach reduces the effort spent on managing manual deployments.

After trialling continuous deployments in three environments, the process became difficult to manage. The single developer team meant that the benefits of merging into a stable developer branch first, followed by QA were lost. For future projects expanding on Data Kernel, using a Git branching strategy such as Git Flow may be more efficient.

## Code Quality

### Test Driven Development

<p align="left">
    <img src="res/codecov.svg" alt="Netlify logo" height="100">
</p>

The Data Kernel project set out to follow test-driven development (TDD) so that defects and missing functionality never reach a live environment. This begins with setting out the intended functionality of a ticket during refinement. During development, ample unit tests should be written to cover the added functionality.

To track and flag the test coverage for the web app, Codecov was used. Codecov is a test coverage service, which analyses the repository and reports its test coverage. As mentioned before this is integrated in the repository’s CI/CD pipeline. Whenever PR is made to a protected environment, a test coverage report is generated and deployed to Codecov. You can view the current code coverage analytics by clicking on the badge below.

The repository needs regular test coverage reports, so that there is no untested functionality in the web app. Running the coverage report when creating a PR flags any deterioration in coverage. If the percentage coverage reduces between changes, the developer it expected to at least match the previous test coverage.

### Peer Code Reviews

An important step in this project’s Testing workflow is peer code reviews. Whenever a change is being merged into a protected environment, the peer code review requirement is the last defence against bad code. This process involves a developer apart from the code author reviewing the code changes and suggesting alterations before a merge. In this project, this process has helped spot missing comments and unit tests.

The peer review process promotes higher coding standards and makes sure that code is clean, tested and well-commented. Like the following code shows.

```javascript
  const baseURL = "https://restcountries.com/v3.1";

  const loadCountries = async () => {
    setLoading(true);

    try {
      // call api using baseURL
      const response = await axios.get(`${baseURL}/all`);
      setData(response.data);
    } catch (er) {
      // error handling
      setError(er);
    } finally {
      setLoading(false);
    }
  };
```

### Testing with Jest

<p align="left">
    <img src="res/jest-logo.PNG" alt="Jest library logo" height="120">
</p>

The Data Kernel app is built with functional components. The Jest framework is used to run component testing for the web app. This library was chosen as it has wide use and comes configured with the create-react-app library.

To run the testing suite locally execute the following in the console one line at a time:

```node
cd data-kernel
npm install
npm test
```

The MVP version of the app has UI testing, checking that elements are visible and interactable. For example:

```javascript
it("renders description", () => {
    render(<LandingPage />, { wrapper: MemoryRouter });

    const description = screen.getByText("Welcome to the Data Kernel App");
    expect(description).toBeInTheDocument();
  });

  it("router navigates to country-export on tile click", () => {
    // mock navigate
    const mockRouter = jest.fn();
    require("react-router-dom").useNavigate.mockImplementation(
      () => mockRouter
    );

    render(<LandingPage />, { wrapper: MemoryRouter });

    // get tile with countries link
    const countriesTile = screen.getByRole("button", { name: "Countries" });
    fireEvent.click(countriesTile);

    expect(mockRouter).toHaveBeenCalledWith("/country-export");
  });
```

The UI testing also mocks the external data api and tests whether its calls to it are valid:

```javascript
test("loads countries and triggers download on button click", async () => {
    const responseData = [{ name: "Country A" }, { name: "Country B" }];
    axios.get.mockResolvedValue({ data: responseData });

    render(<DataExport />);

    fireEvent.click(screen.getByTestId("page-export-button"));

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        "https://restcountries.com/v3.1/all"
      );
    });
  });
```

Although TDD was employed in the project where possible. Testing every new line of functional code was at times very complex. Fox instance, the mocking of the axios library was very difficult and blocked the data export feature for an entire sprint. This can be attributed to inexperience with TDD specifically in React with the Jest framework

Behaviour Driven Development (BDD) may be a suitable alternative as it doesn't infringe as much on the developer's coding process, but still aims to root out defects and incorrect feature behaviour.

## Evaluation

### Requirements

The final project Kanban board is extensive, but there were features which didn't make the MVP release. This includes the filtering of data before an export. This proved to be a complex feature to implement and didn't reach a working state before the project deadline. It should be the first feature to be prototyped in future development.

A refactor of the code would also be required as part of any future work, as some functions such as the API call could be restructured into a React Hook. This would make the component much more widely usable in the application and serve as the basis for new data-type exports in the future.

### UI and UX

The User Interface looks clean and not cluttered. The UI has been designed to be scalable and should be easy to expand upon for future development.

### Usability and Accessibility

The website is quite simple, but there have been considerations taken for usability and accessibility. For instance, alt text is used to help screen readers understand images. Hyperlinks in the website are correctly labelled making them useful for screen readers and buttons are large making them easy to use. Finally, the app's colour palette has gone through several iterations to reach a theme which has contrasting colours and readable text.

There are areas of accessibility which should be addressed in future development, such as:

- Keyboard-only navigation - to help users with assistive technology to navigate and use the site.
- Accessible Rich Internet Applications (ARIA) attributes - to help provide context for screen readers and other assistive technology users.
