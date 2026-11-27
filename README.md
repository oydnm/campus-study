# website link
render link - https://campus-study-1-0v01.onrender.com/ 

# Campus study rooms
Campus study room is a piblic directory that helps students across campuse pick a study room by building, room number, capacity, noise level and availability. 

## features 
-his projects allows student to be able to browse through already available rooms and also add rooms. 
-Students can add rooms and also edit details of the rooms with the maximum capacity of rooms being at 24 and the minimum being 1. 
-students can claim rooms when using it and also unclaim it.
-students can delete a room after reviewing and confriming the deletion of it and they can also cancel to keep it.



## mongoDB

the campus study stores its room directoy in MongoDB atlas and each rooms is saved as a document with its own name with details required such as room number, building number, capacity, noise level and availability . the express route use the mongoose room model to create, read , update and delete these documents. 

when a student claims a room, it gets updated and when unclaiming it also gets updated. 

## refrences 
Bootstrap 
 https://getbootstrap.com/ 
 used to provide styling for the button 

Fontawesome
https://fontawesome.com/ 
 used to provide icons for various parts of my project 

Render 
https://render.com/
 used to host live website and deployment 

