# simple_social_media_simulator
Express Project for : Create a simple project which contains Signup, Login, and CRUD operation for posts and comments

# Description
- Any user can create up to 5 posts per day
- Any user can query for posts, and in return, the user will get a random 100 posts out of the latest 500 posts
- Any user can comment on posts
- Any user can reply to a comment
- Any user can reply to a reply
- Every post has a number of watches, which describes the number of users that have seen this post
- The user can delete a post as long as no body have seen the post yet (number of watches is zero)
- The user can create/edit a post at any time
- Edited posts should have an edit flag, and an edit history that contains all versions of that post
- Watcher service to be entirely realtime