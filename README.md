# Project description:


This project is an example of using headless CMS on a static webpage. The headless CMS use is Wordpress.com and
the API is a JSON which contains all the information and which is then rendered in javascript.

The webpage can be found at: https://cms-vanilla.vercel.app/

If you want to run the project locally simply clone the git repository and run the static webpage in Visual Studio Code (or other program) using Live Server (right click the index.html and choose open with Live Server).

The reason for using Vanilla Javascript to render the static webpage is due to me wanting to be able to use
W3C markup validator which can be found at https://validator.w3.org/. 


**Backend:**

Wordpress.com is used as backend in this project where posts are created and which are then rendered in javascript on the static webpage https://cms-vanilla.vercel.app/. 

I will assume that the use is familiar with Wordpress.com but if you are not you can follow the link below, to create an account and get started with how to use wordpress.com

https://wordpress.com/support/create-a-blog/#:~:text=in%20your%20browser.-,Signing%20Up%20for%20Your%20First%20WordPress.com%20Site,and%20characters%20like%20!%20or%20%40.

After you've created a webpage in Wordpress.com, made the site public and created a post you need to retrieve
the API so that the webpage can render the posts.

Fill in the name of your webpage below. 

https://public-api.wordpress.com/rest/v1.1/sites/"YOUR_WEBPAGE_NAME_HERE".wordpress.com/posts

Use your link and replace the URL in app.js at the very top to render your posts on the webpage. When creating new posts
you will need to refresh the webpage so the new posts are rendered. 

If you want to use my wordpress.com than I will need to invite you to the project as an author and will require either your email or username in Vercel. You can contact me at: patrik.vahlen@gmail.com.  


**Frontend:** 

This project uses basic javascript rendering using HTML and CSS. The code in app.js is commented thoroughly if Javascript is new to you. 

We are using Vercel to host our static webpage. If you are new to Vercel (which I was to) it's quite simple, just follow the below link to create an account and Vercel.com will guide you through the process. 

https://vercel.com/new

You will also need a GITHUB repository to connect you project to Vercel. 
