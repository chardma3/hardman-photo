# HARDMAN PHOTO - E-Commerce Web App.

### Code Institute - Final Milestone Project (4) - Full Stack Frameworks With Django.


HARDMAN PHOTO is a Photography webshop with award winning photographs and limited edition prints. The store's collection ranges from portraits to urban landscapes as well as stunning collages. The application allows users to browse the different collections as well as all photos at once.


![homepage](readme/images/responsive_img.png)

The live website can be found [here](https://hardman-photo.herokuapp.com/)

## Table of Contents

* [Project Summary](#project-summary)
* [User Experience Design (UX)](#user-experience-design)
  * [The Strategy Plane](#the-strategy-plane)
    * [User Stories](#user-stories) 
  * [The Scope Plane](#the-scope-plane)
  * [The Structure Plane](#the-structure-plane)
  * [The Skeleton Plane](#the-skeleton-plane)
    * [Wireframes](#wireframes)
    * [Database Design](#database-design)
    * [Security](#security)
  * [The Surface Plane](#the-surface-plane)
* [Features](#features)
   * [Existing Features](#existing-features)
   * [Future Features](#future-features)
* [Technologies](#technologies)
* [Testing](#testing)
* [Deployment](#deployment)
* [Credits](#credits)

****

# Project Summary

Welcome to my Full Stack Frameworks with Django Project for Code Institute.

The goal of this project was to allow the user to create an account and make a purchase of products with Stripe. Although the majority of the admin activities is done through the Django admin site, the web app also provides more pleasant environment for common tasks such as adding, editing and deleting products or blog posts through the web app's UI.
I have developed this ecommerce shopping website with Django which is powerful and flexible. The Django and Stripe frameworks have been used to take care of sensitive customer information in a secure manner.

## The Strategy Plane

HARDMAN PHOTO is a web-shop for photographer and visual artist, Claire Hardman, based in Stockholm, Sweden. The customer can successfully purchase items and have them delivered to their home. Different sizes are available based on commonly used print measurements.

## User Stories

As an e-commerce site owner...

* As a store owner, I want to be able to add a product so that I can add new items to my store.
* As a store owner, I want to be able to edit/ update a product so that I can change product prices, descriptions, images and other photo criteria.
* As a store owner, I want to delete a photo so that I can remove photos that have run out of limited print.

As a customer...

* I want a líst of photos so that I can select a photo to purchase.
* I want to view a specific category of products so that I can quickly find photos that I'm interested in without having to search through all photos.
* I want to view photo details so that I can view the sizes available and choose the quantity I would like to purchase.
* I want to easily view the the total amount of my shopping bag to know how much I am spending.
* I want to successfully register for an account and proceed to log in.
* I want to easily access my previous orders.
* I want to be able to store my shipping details so that it’s easier for me to check out.
* I want to be able to contact the store of the website incase I have any issues or questons.
* I want to be able to easily recover my password in case I have forgetten it.

## The Scope Plane 

When designing the page, I wanted the user to have a positive experience aka intuitive, easy and visually appealing. The user can navigate the website using the navigation bar that is always visible. The user can navigate to different sections easily and intuitively.

### Features planned:

* Responsive Design - The site should function on mobile, tablet and desktop/laptop devices.
* Mobile and desktop navigations.
* Standard e-commerce feed of products with the option to sort products and filter them by category name. 
* Every product can be added to the bag immediately and links to a product page where the user can read more about it.
* About page with information about the photographer who has created the photos.
* Contact information and a contact form to easily contact the store.

## The Structure Plane

When the user opens the site, they see the hero image and  Call-to-action text and a buy now button which leads them to all photographs available for purchase. On smaller devices there is a link in the hamburger menu. There is also a link for each section of the website in the navigation bar.

The categories of photos available are shown in the always visible navigation menu at the top of the page. If a user wishes to see more about the photo they may click on the photo which takes them to the product details where they can see sizes available and an option to add it to the bag. If the user adds to the bag, they will see a message at the top of the page informing them that they have put that product with quantity they have chosen in their bag.

The about page contains a blurb about the photographer to the right and an image of the photographer to the left.

In a bag section, users can see all the items in their bag and if they wish to change its quantity, easily select the plus or minus sign followed by the update button. They can also choose to remove that item altogether with the remove button. Confirmation messages are shown in the top right corner with corresponding and intuitive colors. Once the user is ready for checkout, they can click through to the checkout section where they see a form see a form to fill in in order for the checkout to be completed. Once completed, the order will be stored in the order history of the users profile and user may access it at anytime.

## The Skeleton Plane

### Wireframes

Wireframes for this project may be viewed in a seperate file [here](wireframes.md).

### Database Design

As Django works with SQL databases by default, I was using SQLite in development. Heroku, however, provides a PostgreSQL database for deployment

### Entity Relationship Diagram Model (ER Diagram)

![ER Diagram](readme_img/er_diagram.png)

### User Model

The User model utilized for this project is the standard one provided by `django.contrib.auth.models`

### Profiles App

| Name | Database Key | Field Type | Type Validation |
| :-------------: |:----------------:| :--------------: | :---------: |
|User | user |	OneToOneField 'User'| on_delete=models.CASCADE
|Default Phone Number |	default_phone_number | CharField | max_length=20, null=True, blank=True
|Default Country | default_country | CountryField | blank_label='country', null=True, blank=True
|Default Postcode | default_postcode | CharField | max_length=20, null=True, blank=True
|Default Town or City | default_town_or_city | CharField | max_length=40, null=True, blank=True
|Default Street Address1 | default_street_address1 | CharField | max_length=80, null=True, blank=True
|Default Street Address2 | default_street_address2 | CharField | max_length=80, null=True, blank=True

### Products App

`Category` model

| Name | Database Key | Field Type | Type Validation |
| :-------------: |:----------------:| :--------------: | :---------: |
|Name | name | CharField | max_length=254
|Friendly Name | friendly_name | CharField | max_length=254, null=True, blank=True

`Product` model

| Name | Database Key | Validation | Field Type|
| :-------------: |:----------------:| :--------------: | :---------: |
|Product id | id | primary_key=True | AutoField
|Name | name | default='', max_length=254 | CharField
|Price | price | max_digits=6, decimal_places=2 | DecimalField
|Image| image| blank=False | ImageField

### Order

| Name | Database Key | Validation | Field Type|
| :-------------: |:----------------:| :--------------: | :---------: |
|Order id | id | primary_key=True | AutoField
|User | user | User, on_delete=models.CASCADE, related_name="orders" | ForeignKey(User)
|Full name | full_name | max_length=50 | CharField
|Phone number | phone_number | max_length=20, blank=False | CharField
|Country | country | max_length=40, blank=False | CharField
|Postcode | postcode| max_length=40, blank=True | CharField
|Town or City | town_or_city | max_length=40, blank=False | CharField
|Street address 1 | street_address1 | max_length=40, blank=False | CharField
|Street address 2 | street_address2 | max_length=40, blank=False | CharField
|County | county | max_length=40, blank=False | CharField
|Date | date | default=timezone.now | DateField
|Total price | total_price | max_digits=100, decimal_places=2, default=0.00 | DecimalField

### OrderLineItem

| Name | Database Key | Validation | Field Type|
| :-------------: |:----------------:| :--------------: | :---------: |
|Order Line Item id | id | primary_key=True | AutoField
|Order | order | Order, related_name="orderline", null=False | ForeignKey
|Product | product | Product, null=False | ForeignKey
|Quantity | quantity | blank=False | IntegerField

### Security

Using config variables in heroku, all SECRET access keys are stored safely to prevent unwanted connections to the database.

Django allauth was used to set up user registration and built in decorators allowed restricted access to certain features on the website that are not intended for regular users.

## The Surface Plane

### Colour Scheme

As is the case with photography stores, both online and physically, photography galleries and museums black and white is the driving color scheme. The stark contrast of light and dark are the very basis of photography and this color simplicity allows the photography on display to shine.

### Typography

The main font used throughout the website is 'Bebas Neue' and 'Roboto'. These are strong and simple fonts that compliment the purpose and feel of the website.

### Images

The images used in the website have been created by the websites photographer Claire Hardman.

# Features

## Existing Features

Web App Sections:
* Navigation bar
    * Navigation bar is visible on all pages and on all sizes (on a smaller width, it toggles into "hamburger"). It contains the website's logo and links to each section of the website.

* Footer section
    * Footer section contains links to the social media profiles, copyright information and contact information if the user does not wish to use the contact form provided on the contact page.

* Webshop
    * Every item is clickable which navigates to a product details page where the user can read more about it, including sizes, name, category, price and an add button if they would like to add the item to their bag.

* About page
    * Provides information about the photographer who is featured on the website.

* User account 
    * Available to registered/logged in users with the purpose of tracking their order history and safely storing shipping details for a secure and easy checkout.

* Admin account
    * Users with admin rights have access to orders, user profiles, as well as product and blog inventory. The majority of the information is stored in the Django admin site but the admin users may also do common tasks such as adding, editing and deleting products via the site.

## Future Features

### Blog

* I would like to implement a blog as I've read that websites with blogs and frequently updated information rank higher in searches.

### Heart/favorites function

* A feature that allows authenticated users to heart/favorite items so that they can see items those items in favorites section. 
* Every product in the feed and on product pages would have a heart-shaped icon which would add the product to this favorites section. The list could be accessed on one of the profiles pages, where users can remove the items from the list as well.
* This feature is to increase the conversion rate and familiarity with the user.

## Features and Django Apps

HARDMAN PHOTO, [A Django project](https://docs.djangoproject.com/en/3.1/ref/applications/), consists of 7 Django applications listed below. As explained in Django's documentation - a Django application describes a Python package that provides some set of features. Applications may be reused in various projects.

* `about`
* `bag`
* `checkout`
* `contact`
* `home`
* `products`
* `profiles`

The following list of features is structured in a way that should help with understanding of how the features are spread throughout the project.

### Search functionality

* A Search box is part of the top navigation and is, therefore, accessible on all pages.
* On mobile and ipad the search bar is collapsed under the search symbol.
* It allows customers to enter keywords associated with the products they wish to purchase.
* The search results are displayed as a feed of products by using the page templates prepared for the `products` Django app.

### Toasts

* Small snippets of messages divided into 4 main categories: `toast_success`, `toast_info`, `toast_warning` and `toast_error`.
* They appear on every page whenever a certain action has been done by the user.
* Their purpose is to give feedback on the action a user has just performed, such as logging in, logging out, adding a product to the bag, updating the bag, changing their user info, finishing the checkout process, etc.

### Django-allauth feature

* `django-allauth` is a Python package. As written in the [django-allauth docs](https://django-allauth.readthedocs.io/en/latest/), it is an "integrated set of Django applications addressing authentication, registration, account management as well as 3rd party (social) account authentication."
* It provides a set of features such as **signup**, **login**, **logout** and **password change**
* After signing up, a verification e-mail is sent to the registered e-mail to confirm it. Once confirmed, the user can log in with their credentials and access the `profiles` app.
* The links to these features can be found in the navigation, under the **My Account** dropdown menu, as well as on the pages and throughout the web app.

### Automatic e-mails

* An account is working for this project and used as a sender for all verification, reset and confirmation e-mails.
* For example, users receive an order confirmation e-mail after a purchase, account verification e-mail after the registration, password reset e-mail after requesting a password reset, etc.

### Home app

* `home` Django app mainly serving as an introduction to the company and the marketplace.

### About app

* `about` Django app contains an image and a blurb about the photographer featured on the store.

### Products app

* `products` Django app is where all the logic and templates connected to individual products are.
* It can be divided into three main sections: **shop**, **product pages** and **admin product management activities**.
* **Shop** is the landing page where shoppers start. Here they have access to the nav bar with all categories, a search bar and a buy now button which takes them to all photos where they can browse through all photography avaible on the website. This also features a sort function via the sort dropdown where they can sort by price, name and category.
* By clicking on a product, the user can see the full product info including pictures of product, name, price and an add button if they would like to add product.
* **Admin product management** activities include adding, editing and deleting products. Users with admin rights can do that directly in the UI through forms.

### Bag app

* `bag` Django app is a standard e-commerce functionality which aids the checkout process.
* A bag icon is always present in the top right corner of the web app. The bag adds a number under the bag icon allowing users to know the current amount of their bag.
* Users can edit the quantity of items or remove them from bag and view the total amount of the bag. In order to proceed with checkout, the user will be required to register on the site or be logged in. When the user decides to finish shopping, they will need to input their information and credit card details to complete the purchase.
* If users try to access their empty bags, there will be a message displayed that nothing has been added yet and encourage them to go to the shop.

### Checkout app

* `checkout` Django app is another standard e-commerce functionality which enables users to buy the products online from the webshop.
* In order to check out, the user is presented with a form asking for the shipping and payment details and with the overview of the order.
* Users can easily go back to the bag and adjust it by clicking on the bag icon in the top right corner.
* A webhook is implemented to the checkout so that the order is successfully processed in case the checkout process gets interrupted. Some reasons might be closing the browser too soon or losing internet connection.
* "payments" are handled through `stripe`. A test purchase can be made with the following details:
    * credit card: 4242 4242 4242 4242
    * expiration date: 04 / 24
    * CVC: 424
    * ZIP: 42424
* After the payment has been processed, the user is presented with the order summary on the order confirmation page.
* Users can also see their **order history** on the `profiles pages`.

### Profiles app

* `profiles` Django app is available to registered, authenticated users.
* It offers 2 features: order history and saving shipping information.
* **Order history** displays all previous orders per user account.
* Saving shipping information is done through a form which can be edited anytime. This information is what populates the checkout form for the next orders and where shipping information saved during the checkout process is stored.

### Contact app

* `contact` Django app is available to all users. This is to make it easier for users to contact the store owner about potential purchases or project proposals.

# Technologies

The website is designed using following technologies:

#### Languages used
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
    - HTML5 provides the structure and the content for my project. 
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
    - CSS3 provides the style of the HTML5 elements.
- [JavaScript](https://nl.wikipedia.org/wiki/JavaScript)
    - JavaScript provides the interactive elements on the website. 
- [jQuery](https://jquery.com/)
    - jQuery is used for implementation of Bootstrap.
- [Python](https://www.python.org/)
    - Python provides the backend of the project.
- [Jinja](https://en.wikipedia.org/wiki/Jinja_(template_engine))
    - Jinja provides the templating language for Python.

#### Frameworks, libraries & other
- [Django](https://www.djangoproject.com/) 
    - The GitPod is used as Python framework for the project.
- [Gitpod](https://www.gitpod.io/) 
    - The GitPod is used to develop the project.
- [Git](https://git-scm.com/)
    - The Git was used for version control to commit to Git and push to GitHub.
- [GitHub](https://github.com/)
    - The GitHub is used to host the project.
- [Pip3](https://pip.pypa.io/en/stable/)
    - Pip3 is used for installing the necessary tools, libraries and frameworks.
- [Heroku](https://heroku.com/)
    - Heroku is used to host the project.
- [AWS Amazon](https://aws.amazon.com/)
    - AWS Amazon is used to store static and media files.
- [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/index.html)
    - Boto3 is used for compatibility in AWS.
- [Gunicorn](https://pypi.org/project/gunicorn/)
    - Gunicorn is used to enable deployment to Heroku.
- [Spycopg2](https://pypi.org/project/gunicorn/)
    - Spycopg2 is used to enable the PostGreSQL database to connect with Django.
- [Google Fonts](https://fonts.google.com/)
    - Google Fonts is used to provide the font roboto for all the text that is used in the project. 
- [Balsamiq](https://www.balsamiq.com/)
    - Balsamiq is used to create the wireframes for the project.
- [Bootstrap](https://getbootstrap.com/)
    - Bootstrap is used for the design framework.
- [Heroku](https://dashboard.heroku.com/)
    - Heroki is the cloud platform to deploying the app.
- [Django Crispy Forms ](https://django-crispy-forms.readthedocs.io/en/latest/)
    - Django Crispy Forms is used to style the Django forms
- [Stripe](https://stripe.com/en-nl)
    - Stripe is used for the secure payments
- [EmailJS](https://www.emailjs.com/) 
    – Service that helps sending emails using client side technologies only. 

#### Databases 
- [SQlite3](https://www.sqlite.org/index.html)
    - SQlite3 is used as the development database.
- [PostgreSQL](https://www.postgresql.org/)
    - PostgreSQL is used as the production database.

#### Testing tools used 
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/open) is used to detect problems and test responsiveness.
- [Chrome Lighthouse](https://developers.google.com/web/tools/lighthouse)
    - Open source automated tool that audits webpages for performance, accessibility, progressive web apps, SEO and more. 
- [W3C Markup Validation Service](https://validator.w3.org/)
    - The W3C Markup Validation Service is used to check whether there were any errors in the HTML5 code. 
- [W3C CSS validator](https://jigsaw.w3.org/css-validator/)
    - The W3C CSS validator is used to check whether there were any errors in the CSS3 code.
- [JShint](https://jshint.com/)
    - JShint is a JavaScript validator that is used to check whether there were any errors in the JavaScript code. 
- [PEP8](http://pep8online.com/)
    - The PEP8 validator is used to check whether there were any errors in the Python code.

# Testing

**Testing section is located [here](TESTING.md)**

# Deployment

#### Requirements 
- Python3 
- Github account 
- Heroku account
- An IDE of choice 
- Stripe account
- AWS Amazon account
- Gmail account

#### Clone the project 
To make a local clone, follow the following steps. 
1. Log in to GitHub and go to the repository. 
2. Click on the green button with the text **“Code”.**
3. Click on **“Open with GitHub Desktop”** and follow the prompts in the GitHub Desktop Application or follow the instructions from **[this link](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop)** to see how to clone the repository in other ways. 

#### Working with the local copy
1. Install all the requirements: Go to the workspace of your local copy. In the terminal window of your IDE type: **pip3 install -r requirements.txt**.
2. Set up the environment variables: 
    - Create a `.gitignore` file in the root directory of the project. 
    - Create a `.env` file. This will contain the following environment variables:

    ```
    Import os
    os.environ("SECRET_KEY", "Added by developer")
    os.environ("STRIPE_PUBLIC_KEY", "Added by developer")
    os.environ("STRIPE_SECRET_KEY", "Added by developer")
    os.environ("STRIPE_WH_SECRET", "Added by developer")
    os.environ("MAILCHIMP_API_KEY", "Added by developer")
    os.environ("MAILCHIMP_DATA_CENTER", "Added by developer")
    os.environ("MAILCHIMP_EMAIL_LIST_ID", "Added by developer")
    ```
    - Add the `.env` file to the `.gitignore` file.
    **NOTE:** See more in the [Stripe Documentation](https://stripe.com/docs/keys) to read more about setting the API key.
3. Migrate the models to create the database by the following commands:
    - `python3 manage.py makemigrations`
    - `python3 manage.py migrate`
4. Load the data fixtures for categories and product in this exact order:
    - `python3 manage.py loaddata categories`
    - `python3 manage.py loaddata products`
5. Create a superuser. The superuser has acces to the admin environment.
    - `python3 manage.py createsuperuser`
    - Enter your username, email and password.
6. Run the app: Open your terminal window in your IDE. Type: `python3 manage.py runserver` and run the app.
7. To acces the admin environment, you can add `/admin` at the end of your url and login with the superuser.


#### Heroku Deployment  
1. Set up local workspace for Heroku 
    - In terminal window of your IDE type: `pip3 freeze -- local > requirements.txt.` (The file is needed for Heroku to know which filed to install.)
    - Create a Procfile with the following text: `web: gunicorn <name app>.wsgi:application` (The file is needed for Heroku to know which file is needed as entry point.)
    - Push all these files to your GitHub reposity.
2. Set up Heroku
    - Create a Heroku account and create a new app and select your region. 
    - Go to resources in Heroku and search for **postgess**. Select **Hobby dev - Free** and click on the provision button to add it to the project.
    - Go to the settings app in Heroku and go to **Config Vars**. Click on **Reveal Config Vars** and add the following config variables:

    | KEY            | VALUE         |
    |----------------|---------------|
    | AWS_ACCESS_KEY_ID | `<aws access key>`  |
    | AWS_SECRET_ACCESS_KEY | `<aws secret access key>`  |
    | DATABASE_URL| `<postgres database url>`  |
    | EMAIL_HOST_PASS | `<email password(generated by Gmail)>` |
    | EMAIL_HOST_USER| `<email address>`  |
    | MAILCHIMP_API_KEY| `<api key>`  |
    | MAILCHIMP_DATA_CENTER| `<datacenter id>`  |
    | MAILCHIMP_EMAIL_LIST_ID| `<emailist id>`  |
    | SECRET_KEY | `<your secret key>`  |
    | STRIPE_PUBLIC_KEY| `<your stripe public key>`  |
    | STRIPE_SECRET_KEY| `<your stripe secret key>`  |
    | STRIPE_WH_SECRET| `<your stripe wh key>`  |
    | USE_AWS | `True`  |

3. Set up Database
    - Copy the **DATABASE_URL** (Postgres URL) from the config variables of Heroku and past it into the default database in `setting.py`

    ```
    DATABASES = {
        'default': dj_database_url.parse("<DATABASE_URL here>")
    }
    ```
    **NOTE:** This setup for the databases is temporary for deployment to Heroku.
    - Migrate the models to create the database by the following commands:
        - `python3 manage.py makemigrations`
        - `python3 manage.py migrate`
    - Load the data fixtures for categories and product in this exact order:
        - `python3 manage.py loaddata categories`
        - `python3 manage.py loaddata products`
    - Create a superuser. The superuser has acces to the admin environment.
        - `python3 manage.py createsuperuser`
        - Enter your username, email and password.
    - Now you can remove the DATABASE_URL from `settings.py` and set the 'old' default DATABSE settings.
    - Adjust the ALLOWED_HOSTS in you settings.py with the following:
    
    ```
    ALLOWED_HOSTS = ['<your Heroku app URL>', 'localhost]
    ```
    - Push the code to Github.
4. Connect with Heroku 
    - Click on the **Connect to GitHub** section in the deploy tab in Heroku. 
        - Search your repository to connect with it.
        - When your repository appears click on **connect** to connect your repository with the Heroku. 
    - Set automatic deploment: Go to the deploy tab in Heroku and scroll down to **Aotmatic deployments**. Click on **Enable Automatic Deploys**. By **Manual deploy** click on **Deploy Branch**.
Heroku will receive the code from Github and host the app using the required packages. 
Click on **Open app** in the right corner of your Heroku account. The app wil open and the live link is available from the address bar. 

#### Hosting static and media files with AWS
The static and media files are hosted in the AWS S3 Bucket. To host them you will need an account and create an S3 bucket and set a group, policy and user in the IAM environment. 
Read more about the the S3 Bucket storage [here](https://aws.amazon.com/s3/). For more information about the storage in your project [click here](https://django-storages.readthedocs.io/en/latest/backends/amazon-S3.html).

# Credits

## Content

* All photos used in this website have been created by the websites photographer Claire Hardman. Websites used for inspiration are:
    * [Poster Store](https://posterstore.se/)
    * [Dear Sam](https://dearsam.se/)


## Coding Sources

* Videos from Code Institute

## Acknowledgments

* Huge thanks to the gang at Code Institute Tutor Support, Student Care and my mentor Precious Liege for all their guidance, patience and support.