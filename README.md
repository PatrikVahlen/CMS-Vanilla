# Project description:


This project is an example of using headless CMS on a static webpage. The headless CMS used in this project is Wordpress.com which will provide 
the API as a JSON which contains all the information and which is then rendered in javascript. The front end is deployed using Vercel. 

## Requirements

To use this project you need to be invited to my wordpress.com as an author by being invited through email. You can contact me at: patrik.vahlen@gmail.com.

**Admin:** To invite users go to Settings _> Users and fill out the form with email and access.  

## Getting started

The webpage can be found at: https://cms-vanilla.vercel.app/

If you already have access to the site on my wordpress.com you can start posting and the webpage should dynamically update after a refresh of the page.

## Install locally

### 1. Clone the repository

If you're using Visual Studio Code on Windows type below in the terminal:

```git clone https://github.com/PatrikVahlen/CMS-Vanilla.git```

This should clone the repository so you have it locally, no need to install any dependencies at all.

### 2. Run your project

In Visual Studio Code right click the **index.html** file and choose **"Open with Live Server"** and it the webpage will run locally on your machine.

### 3. Creating you own Wordpress.com

If you are not familiar with Wordpress.com you can follow the link below, to create an account and get started with how to use wordpress.com

https://wordpress.com/support/create-a-blog/#:~:text=in%20your%20browser.-,Signing%20Up%20for%20Your%20First%20WordPress.com%20Site,and%20characters%20like%20!%20or%20%40.

After you've created a webpage in Wordpress.com, made the site public and created a post you need to retrieve the API so that the frontend can render the posts.

Replace **YOUR_WEBPAGE_NAME_HERE** with your published webpage-name below. 

```https://public-api.wordpress.com/rest/v1.1/sites/YOUR_WEBPAGE_NAME_HERE.wordpress.com/posts```

Replace the URL in app.js at the very top to render your posts on the webpage. When creating new posts you will need to refresh the webpage so the new posts are rendered.

When creating your posts in Wordpress.com and you are including images, it's important to add an **_ALT-text_** to that picture, this is left to the publisher to make sure.

### 4. Deploy

We are using Vercel to host our static webpage. If you are new to Vercel (which I was to) it's quite simple, just follow the below link to create an account and Vercel.com will guide you through the process. 

https://vercel.com/new

You will also need a GITHUB repository to connect your created project to Vercel. 

The webpage hosted by Vercel will be updated automatically after pushing new code to your GIT-repository as this is handled by GITHUB.

#### Developers notes

The reason for using Vanilla Javascript to render the static webpage is due to me wanting to be able to use
W3C markup validator which can be found at https://validator.w3.org/.

This is also an attempt to follow the guidelines at A-level provided by https://www.w3.org/WAI/WCAG21/quickref/

I've also used Chromes built in tool "Lighthouse" to check accessability.



