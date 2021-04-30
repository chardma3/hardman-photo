## Summary
* [Responsiveness](#responsiveness)
* [Overall](#overall)
    * [Navigation](#navigation)
    * [Button "Go to top"](#button-go-to-top)
    * [Footer](#footer)
* [Home](#home)
* [Shop](#shop)
* [Bag & Checkout](#bag-checkout)
* [Account](#account)
    * [Registration](#registration)
    * [Sign In](#sign-in)
    * [Profile](#profile)
    * [Orders](#orders)
    * [Log out](#log-out)

**Back to [Readme.md](README.md)**

****

## Responsiveness

![responsivness](readme/images/responsive.png)

This site was was tested on multiple browsers (Google Chrome, Mozzila Firefox and Opera), multiple mobile devices (Samsung Galaxy, Huawei, Sony) and tablet devices(Samsung Galaxy Tab) and showed responsivness and compatibility.

| Functionality | Expected Outcome | Actual Outcome | Pass/Fail |
| :-------------: |:----------------:| :--------------: | :---------: |
| Viewing on mobile device | Images adapted, no overflow | As Expected | Pass |
| Viewing on tablet device | Pages rendering properly, no distortion | As expected | Pass |
| Viewing on laptop device |  No distortion | As expected | Pass |
| Viewing on desktop device up to 2k | No distortion | As expected | Pass |

## Overall

### Navigation

| Functionality | Expected Outcome | Actual Outcome | Pass/Fail |
| :-------------: |:----------------:| :--------------: | :---------: |
| Clicking on Logo button | Opens "Index" page | As Expected | Pass |
| Clicking on `Buy now` link | Opens page with all photos | As expected | Pass |
| Clicking on `log In` link | Opens Log In page | As expected | Pass |
| Clicking on `Register` link | Opens Register page | As expected | Pass |
| Clicking on `my account` link | Opens dropdown tab with links | As expected | Pass |
| Clicking on `log Out` link | Logs out user and redirects to log in page | As expected | Pass |

### Button "Go to top" (only on mob and tablet)

| Functionality | Expected Outcome | Actual Outcome | Pass/Fail |
| :-------------: |:----------------:| :--------------: | :---------: |
| Clicking on Go to top button | Scrolls up to top of the page | As Expected | Pass

### Footer

| Functionality | Expected Outcome | Actual Outcome | Pass/Fail |
| :-------------: |:----------------:| :--------------: | :---------: |
| Clicking on `Facebook` icon | Opens Facebook website in new tab | As expected | Pass |
| Clicking on `Instagram` icon | Opens Instagram website in new tab | As expected | Pass |
| Clicking on `Pinterest` icon | Opens Pinterest website in new tab | As expected | Pass |

## Home

| Functionality | Expected Outcome | Actual Outcome | Pass/Fail |
| :-------------: |:----------------:| :--------------: | :---------: |
| Clicking on product cards | Opens the selected product detail | As expected | Pass |
| Clicking on `buy now` button | Opens the products page | As expected | Pass |

## Shop

| Functionality | Expected Outcome | Actual Outcome | Pass/Fail |
| :-------------: |:----------------:| :--------------: | :---------: |
| Clicking on filter button | Show products under that category | As Expected | Pass
| Clicking on product | Show product details info on a new page | As Expected | Pass
| Selecting the number in input and clicking "Add" | Adds the selected quantity of the item to bag and then opens "all products" page |As Expected | Pass |

## Bag & Checkout

| Functionality | Expected Outcome | Actual Outcome | Pass/Fail |
| :-------------: |:----------------:| :--------------: | :---------: |
| Changing quantity and clicking on +/- buttons | Changes quantity of item. If quantity changed to zero, removes product from bag | As Expected | Pass
| Clicking on products image and/or name |S hows that products detail page | As Expected | Pass
| Clicking on `Checkout` button | Opens "Chekout" page | As Expected | Pass
| Clicking on `Submit` button without filling the form | Redirects user to required field | As Expected | Pass
| Clicking on `Submit` button after filling out the form | Checks with Stripe if everything is ok and redirects to "Bag" page | As Expected | Pass
| Clicking on `Submit` button after filling out the form with un-authenticated user | redirects to "login" page | As Expected | Pass

## Account

### Registration

| Functionality | Expected Outcome | Actual Outcome | Pass/Fail |
| :-------------: |:----------------:| :--------------: | :---------: |
| Clicking on Register button | Registers the user and redirects to confirm email address. If registration form is incomplete, shows Please fill out this field | As Expected | Pass

### Sign in

| Functionality | Expected Outcome | Actual Outcome | Pass/Fail |
| :-------------: |:----------------:| :--------------: | :---------: |
| Clicking on `Log In` with correct username and password | Directs user to the index page | As Expected | Pass |
| Clicking on `Log In` with Incorrect username and password | flash message to user showing incorrect username or password | As Expected | Pass |
| Clicking on Forgot password | Opens "Forgot password" page | As Expected | Pass

### Profile

| Functionality | Expected Outcome | Actual Outcome | Pass/Fail |
| :-------------: |:----------------:| :--------------: | :---------: |
| Clicking on Edit profile button | Opens "Edit profile" page |As Expected | Pass
| Clicking on `Update` button | Saves changes to profile and redirects to "Profile" page | As Expected | Pass

### Orders

| Functionality | Expected Outcome | Actual Outcome | Pass/Fail |
| :-------------: |:----------------:| :--------------: | :---------: |
| If no items, clicking on `Buy now` button | Shows "all products" page | As Expected | Pass
| Clicking on a `order history` | Shows user's previous orders with all information | As Expected | Pass

### Log Out

| Functionality | Expected Outcome | Actual Outcome | Pass/Fail |
| :-------------: |:----------------:| :--------------: | :---------: |
| Clicking on `log Out` button | Logs out user and redirects to index page | As expected | Pass |

**Back to [Top](testing.md)**
