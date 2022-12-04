# Reach-Dao

The DApp allows any user to create a proposal for other users to contribute to and vote on. If the proposal passes, it becomes a bounty funded by the contributions as well as funds raised from sponsors. If the proposal does not pass, all users who contributed can claim a refund on the amounts that each of them contributed.  


A proposal could be a fullscale DApp, A part of a DApp, A tutorial, or frameworks or tools that make building with Reach easier and faster for developers. However, proposals are not limited to this and look forward to creative ways users use the DApp.

The central idea behind the Reach DAO is to allow projects to be executed or actualized faster by incentivising them via bounties while also providing an avenue for Developers to gain much needed experience and expertise and earn money while doing this. 

The end game is for the Reach DAO to be a hub for developers with the benefit, and hope that users create proposals with this in mind.
Those who are not developers but have projects that they may want to execute are also invited to create proposals.

Please be aware that you would have to sign multiple transactions on your metamask while going through most of the steps below.

1. Open a few tabs in your favourite browser (we recommend at least 3 tabs).

2. Navigate to the app at the URL https://reach-dao-five.vercel.app/``.  

3. Click on the Connect Wallet button to activate wallet connect and scan the QR code.  

4. Click on the Deploy button to deploy the contract as an Admin in the first tab.

5. Copy the contract information to the clipboard by clicking on the Copy to Clipboard button and then head on over to the next tab and follow steps 1 - 3 after which you can attach to the contract as a new user by clicking on Attach and pasting the contract information and clicking on the the button to attach.

6. You would be greeted by the Welcome page.

7. Please navigate to the Proposals page by clicking on the Proposals button on the top right-hand side of your screen. You can then go ahead to create a proposal by clicking on the Make a Proposal button and  filling out all the fields of the form after which the proposal would be added to the list of active proposals.

8. After creating a proposal, you can go to the next tab and attach as a seperate user following the processes described in steps above and navigate to the proposals page. You would see a list of active proposals and can go ahead to upvote, downvote or contribute to any proposal that you choose to.  

A user may upvote, downvote or contribute to a proposal before the proposal deadline which starts counting as soon as the proposal is created, This is currently set to 5 blocks on ETH. You may change these values if you choose by changing the values on line 301 of the ReachContext.js file in your code editor by following the path [/src/context/ReachContext.js](src/context/ReachContext.js).  

If a proposal passes i.e it has more upvotes than downvotes after the deadline elapses, the proposal is moved to the list of active bounties which can be found on the bounties page. If the proposal fails then any user who contributed can claim a refund by clicking on the claim refund button which becomes visible when a proposal fails.  

I encourage you to play around with the DApp and create as many proposals as you want to and upvote, downvote and contribute to them.  


## Authors

- Owolabi Adeyemi
