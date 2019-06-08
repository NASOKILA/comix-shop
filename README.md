
Comixs Shop Doucmentation

Angular Fundamentals
Atanas Kambitov          
12/08/2018

This is a simple comics shop application created with Angular where a registered user can buy a comics online.
The app contains animations, transitions, success and error messages, back and front form validations, pagination and more.
It uses Kinvey for a backend server, database, authentication and roles and it has bootstrap for design.

The app is uploaded to a Github repository and Google Drive: https://github.com/NASOKILA/comix-shop.git
https://drive.google.com/open?id=1bXd5qDzs6TssJ94pX20zzt4bfB0BSqbe 


There are three types of users.

Guest User - A guest is a user who has not registered yet, he can only see the home page which is deferent for him and two buttons for register and login. 

 
Logged In User - This type of user has already registered, he can not only see a different navigation bar and a different home but can logout and also use many other functionalities.
The home page displays the user role and username.
 

This user has access to additional pages:

My profile page: 
This is a profile page displaying details of the user.
From here the user can view details for each order made or simply delete that order.
 
My orders page: 
Displays all orders made by this user, form here the user can delete an order created by him or view it’s details page.	
 

Order Details Page: 
This page displays all details for a single order and it has a link back to my orders page.
 
All comics Page:
This page lists all the comics in the website.
It contains animations, transitions, pagination and more.
Each comics has buttons for different actions, but this user can see only [Info] and [Buy] buttons.
If a comics is out of stock the user sees only [Info] button.
A user can buy a comics multiple times, but if he already owns a comics he sees a different text on that comics.
The text on a displayed comics changes if the comics is out of stock.
 

Comics Details Page:
This page displays all details for that comics.
From here a user can add a comment to that commix, [buy] it if it’s not out of stock or go [back] to All Comics Page.
The user has the right to delete his own comments for that comics.
 
Confirm order page:
This page is just for order confirmation before the order is made, it’s very similar to the comics details page.
It has the options to confirm that order or go back.
 

Finish Order Page:
If the user confirms the order, he is redirected to the finish order page which congratulates him for the order he just created.
It has buttons to [View Order Details] or to go [Back to All Comics].
 
 

Admin User:
An administrator can do everything that the normal user can do, plus to [create], [edit] and [delete] every comics, comment and order created by anyone in the entire website.
The Admin user sees more buttons and has access to a few more pages than the regular user.
The navigation and a couple of pages view is changed for an Admin user.

Comics Create Page:
It allows the administrator to create a new comics.
 

Edit Comics Page:
It allows the administrator to edit any comics.
 
Delete Comics Page:
It allows the administrator to delete any comics.

 
All Orders Page:
It allows the administrator to view all orders for every user and view it’s details.
 

All User Profiles Page:
It allows the administrator to view all users and view it’s details.
 







# ComixShop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

