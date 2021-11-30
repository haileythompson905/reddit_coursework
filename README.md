# README
Objects in your in db

Objects -> Model

Model -> Controller

Controller actions -> View / Component

Repeat for each object

Sub, Topic, Comment
Sub Model
  Subs Controller
  actions ->
  Index View = Subs
  Show View = Sub
  New View = SubNew
  Edit View = SubEdit
  create, update, destroy - model, no views but do handle in one of the above.
Topic model
  Topics Controller
  actions ->
  Index View = Subs
  Show View = Sub
  New View = SubNew
  Edit View = SubEdit
  create, update, destroy - model, no views but do handle in one of the above.
comment Model
  Comments Controller
  actions ->
  Index View = Subs
  Show View = Sub
  New View = SubNew
  Edit View = SubEdit
  create, update, destroy - model, no views but do handle in one of the above.

View -> pages

* Make sure the parent for all of the MVC (views and controllers) Routes all done in order to move on to the child, or else error or unfinished code.

Billboard
  model
  controller
  each views

Artist
  model
  controller
  each views

Song
  model
  controller
  each views

Billboard
name - Top Nov Hits
desc - popping music for nov.
image - url to image online
  id - 1

Artist
name - Maroon 5
rank - 20th
billboard_id - 1
  id - 6

Song
  title - Payphone
  duration - 3.45
  album- Cell
  artist_id - 6


const person = {id: 12, name: 'John', age:34}
const {id, name, age, notOnPerson} = person

Views, Components
Return
JSX
mash up between HTML + JS 
{ able to run js in {} }
<h1 class="title"> -> <h1 className="title>
Need to have in a grouping elements
<>

</>


<h1>title</h1>
<p>para</p>
*this will give you an error

<>
<h1>title</h1>
<p>para</p>
</>