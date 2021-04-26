Although I can only really see the home page for this website, I can gather that as far as functionality goes, it is quite simple. It's main purpose will be to advertise the business's services, and inform the customer on what they are about and what they do.

Because of the simplicity of the project, as well as the obvious benefits of using a component based library, I would likely build this in Vue or React, in this instance I will choose React due to my experience using it and how easy it is to use with other plugins and libraries.

The plugins and libraries I would find to be necessary for this is one are the following: 

-   glide.js which allows you to easily and quickly implement a smooth carousel which seems to be required on the top of the homepage, and possibly elsewhere on the site.

-   GraphQL to perform the search function found on the header

Header/Footer:

Aside from the previously mentioned search function likely requiring GraphQL, the header and footer are by far the most simple elements on this site. Though they can easily be coded in using vanilla JS, HTML, CSS (maybe not even js), I will opt to create these in components as well ensuring they can be seamlessly used throughout all of the pages and stay as consistent as possible.

Services Section:

At a glance, the services section looks to have hard coded content rather than dynamic, but a component would be useful in this scenario. Although this may be hard coded, the client may want to expand their business, and provide more services. Having these in components, although not required, will make the process of adding more information seamless.

Blog Posts:

The blog section differs from the service section in a few key ways. One of which is that this is definitely dynamic, and is likely either going to be filtering through the API in order to decide which blog posts to display, or simply choosing those that are most recent. One thing I am unsure of with this section is how the "like" and "comment" function will work, I would need to  know whether they expect this to happen while still staying on the same page (more complicated), or if they would prefer it to redirect you to the appropriate blog post to then proceed with liking/commenting. Regardless, components will be used to display each blog post as the layout is identical across the board.

Aside from this, my only suggestion for this (could possibly be how it is supposed to work, but I can't tell from the mockup) is for the blog posts to be coded as pop ups. This will allow for a more user-friendly one-page experience, which both React and Vue are fantastic at creating.
