# Common errors

#### Instagram error
`11:23:46 AM: Cannot query field "allInstaNode" on type "Query".`
Not sure what causes this, but it's possibly related to Instagram changing up things with how to interact with their API.

Last time I encountered this error I solved it by following the steps 
[here](https://community.netlify.com/t/deploying-a-gatsby-site-on-netlify-using-the-gatsby-source-instagram-plugin-failing-on-build-time-issue-with-netlify-fetching-data-from-instagram-cannot-reproduce-locally/15957/9reproduce-locally/15957)
I.e. Changing the username to userID (it's a number) and upgrading the insta source plugin.


EDIT: I decided to scrap this plugin all together and went with the solution this individual posts [here](https://github.com/LarsBehrenberg/gatsby-instagram-feed/blob/master/src/components/instagram.js)

#### Regex for Price
There might be an issue with price-item formatting (for the menu), this is parsed using 
a regex string, so make sure all menu items follow this format.