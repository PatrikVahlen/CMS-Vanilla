# Project description:


This project is an example of using headless CMS on a static webpage. The headless CMS used in this project is Wordpress.com which will provide 
the API as a JSON which contains all the information and which is then rendered in javascript.

The webpage can be found at: https://cms-vanilla.vercel.app/

If you want to run the project locally simply clone the git repository and run the static webpage in Visual Studio Code (or other program) using Live Server (right click the index.html and choose open with Live Server).

The reason for using Vanilla Javascript to render the static webpage is due to me wanting to be able to use
W3C markup validator which can be found at https://validator.w3.org/.

This is also an attempt to follow the guidelines at A-level provided by https://www.w3.org/WAI/WCAG21/quickref/


**Backend:**

Wordpress.com is used as backend in this project where posts are created and which are then rendered in javascript on the static webpage https://cms-vanilla.vercel.app/. 

If you are not familiar with Wordpress.com you can follow the link below, to create an account and get started with how to use wordpress.com

https://wordpress.com/support/create-a-blog/#:~:text=in%20your%20browser.-,Signing%20Up%20for%20Your%20First%20WordPress.com%20Site,and%20characters%20like%20!%20or%20%40.

After you've created a webpage in Wordpress.com, made the site public and created a post you need to retrieve
the API so that the webpage can render the posts.

Replace "YOUR_WEBPAGE_NAME_HERE" with your webpage-name below. 

https://public-api.wordpress.com/rest/v1.1/sites/"YOUR_WEBPAGE_NAME_HERE".wordpress.com/posts

Replace the URL in app.js at the very top to render your posts on the webpage. When creating new posts you will need to refresh the webpage so the new posts are rendered.

When creating your posts in Wordpress.com and you are including images, it's important to add an ALT-text to that picture.

If you want to use my wordpress.com than I will need to invite you to the project as an author and will require either your email or username in Vercel. You can contact me at: patrik.vahlen@gmail.com.  


**Frontend:** 

This project uses basic javascript and rendering using HTML and CSS. The code in app.js is commented thoroughly. 

We are using Vercel to host our static webpage. If you are new to Vercel (which I was to) it's quite simple, just follow the below link to create an account and Vercel.com will guide you through the process. 

https://vercel.com/new

You will also need a GITHUB repository to connect your created project to Vercel. 

The webpage hosted by Vercel will be updated automatically after pushing new code to your GIT-repository as this is handled by GITHUB.
