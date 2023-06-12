
<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Posts List Application</h3>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>

  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

A mobile app that displays a list of items retrieved from a public API and allows the user to
add new items to the list. The app should have two screens: a list screen and a form screen.

* List Screen:

* The list screen should display a list of items retrieved from the following API:
<https://jsonplaceholder.typicode.com/posts>

* Each item in the list should display the title and body of the post.
* Tapping on an item in the list should navigate to the form screen with the selected item's
title and body pre-filled in the form.

* Form Screen:
The form screen should allow the user to enter a new title and body for the post.
When the form is submitted, the new post should be added to the list and displayed on the list
screen.

### Built With

This section should list any major frameworks/libraries used to bootstrap the project:

* [![React][React.js]][React-url]
* [![Vue][Base.js]][Base-url]

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

This is list of things you need to use the software and how to install them.

* Download and install node and npm, if already there check your versions

  ```sh
  node -v
  npm -v
  ```

* Expo CLI

  ```sh
  npm install -g expo-cli
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo

   ```sh
   git clone https://github.com/almasrisawsan/gfa-task
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

3. Run the app

   ```sh
   expo start --ios
   expo start --android
   ```

4. You can use npm to run the app

   ```sh
   npm run ios
   npm run android
   ```  

<!-- USAGE EXAMPLES -->
## Usage

* You can list all posts in home page screen
* IOS
[home-screenshot]

* Android
[android-screenshot]

* You can edit selected post
[edit-screenshot]

* You can add new post
[add-screenshot]

* All fields are required and have validation

<!-- CONTACT -->
## Contact

Sawsan Almasri - <sawsan.msri@gmail.com>

Project Link: [https://github.com/almasrisawsan/gfa-task](https://github.com/almasrisawsan/gfa-task)

LinkedIn: <https://www.linkedin.com/in/sawsan-almasri/>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: assets/home-screen.png
[home-screenshot]: assets/home-screen.png
[android-screenshot]: assets/android-screen.png
[edit-screenshot]: assets/edit-screen.png
[add-screenshot]: assets/add-screen.png
[React.js]: https://img.shields.io/badge/React-React%20Native-black
[React-url]: https://reactnative.dev/
[Base.js]: https://img.shields.io/badge/React-Native%20Base-blue
[Base-url]: https://nativebase.io/
