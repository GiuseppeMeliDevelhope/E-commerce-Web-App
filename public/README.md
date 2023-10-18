Name: Giuseppe Meli
Date: 15/02/2020
start the app: cd public /
              npm start
server: cd server/
       npm run dev

functions added:
1.server created,api calls all products: img, description, title, price, category,id. Loadin Screen from the payment section on, until the thank you section. Full-responisve .

2.navbar with logo and cart icon:
  -cart icon clickable to visualize selected product items from client
  -small counter at the icon
  -the logo brings always back to the homepage
  -sticky 
  -when scroll changes color

3.Hero - Part where a big image comes in over the product section( for design )

4.product section- all products with image and category and price listet in a structured way(completely responsive):
 -when hover the products -> two icons come out   and the image gets bigger(for design)
 -by clicking the "+" icon the products get listed in the cart list(sidebar), and the counter number rises at the cart icon in the navbar
 -by clicking the "eye" icon you get to the product details page where the there is a full description of the product with possibility to add it to the cart

 5.Sidebar - The sidebar is the cart list where all selected products get listed, here we have the possibilty to proceed to the payment section by clicking "checkout", but only if there are products present in the item list:
   -the discount gets only visibile next to the total price at the bottom of the sidebar when we have more than 3 prodcuts that are over 1000 euro
   -the items are systematically listed in flex-col
   -at the top left we have the total number of all products listed in the sidebar and on the right an arrow icon to close the item list
   -on the left is the img, next to the image we have the title,id,and a small field with a "+" and a "-" to add more of the same product
   -a little bit more in the middle we have the price of one product while at the right at justify-end we have the total price of the product and an "x" icon to delete the product from the list.
   -on the bottom part of the sidebar we have the total price of all products and on the right a "clear" icon to clear the whole item list
   -at least we have to buttons : 
      1.view cart(for design) 
      2.checkout -> to proceed to the payment section
    -sidebar fully responsive
    -all products are saved in local storage so when we re-render the products are still there 


6.Payment Section - We arrive initially at the  payment section for the cards, as default payment section - we cannot proceed if not all fields are filled:
   -by clicking the pay now button we cannot proceed if not all fields are filled
   -we have the possibility to choose "cash on delivery" at the checkbox that will bring us to directly to the shipping method for cash on delivery clients
   -the pay now button whe everything is correctly filled, will get us to the shipping section
   -if we click and enter the shipping form from the "pay now" button we don't have to pay any extra cost because we are paying with card, and the estimated date will be less than the "cash on delivery" client
   -if we enter the "cash on delivery" route, we will get a +10,00 extra cost and we have a longer time to wait so the estimated date get longer

   7.Shipping - When we get to the shipping section from both sides, they are really similar but 2 different shipping forms, the only thing that changes, is that the full name for who payed with card is not present because he already gave the name at the payment prior, the "cash on delivery" client will have to write a little more - both can't proceed if not all fields are filled:
    -we have : FullName, email-adress, adress, city, country/region(FR,DE,IT,ES), state/province, zip code



   8.Order Summary - On the left we have a small container with the selected products we are going to buy(image,title), the container contains all products listed and is scrollable.
   The shipping methods are automatically checked, it depends which way you payed. On the right we have all products listed with title and price.
   Under it we have the subtotal(currentPrice) and under it again we have the shipping cost(that is free for card payers, if there is a cash on delivery client he will have 10 euro of shipping cost)
   -! The Discount is only visibile when reached over 1000 euro and the client have more than 3 items. When thats the case it will be visibile in a red color like that " discount  -23,99" under the shipping cost. !
   At least we have the real Total prcie of all products. If we click now "place order" we get a pop up message, asking if we are sure to complete the transaction. If we accept we get to the "thank you" page where the estimated date is to see with a following loading screen.

   9.Thank You Section - After a longer loading screen we get to the final destination. Here we can see that the payment was successfully done. Under it we can see a thank you and the estimated delivery date. The estimated delivery date depends from which route you passed the oder summary section, if you are card payer you dont have to wait as long as the cash on delivery client. At least if we click the "continue shopping" button we return to the homepage where the products are and the cart list where all products were, gets completely cleared so it is again empty when returning to the homepage.


