/*

Possible models and associations:

  Main Elements:
    -Users ( belong to many rooms )
    -Rooms ( have many users / posts )
    -Post ( belongs to 1 user )
    -Votes ( belong to 1 post )


    User:
      -Name
      -email
      -password
      -picture
      -salt
      -googleId

    Room:
      -Name
      -Tags
      -Posts

    Post:
      -Author Id
      -Content
      -Votes

    Associations:
      -Post belongs to room through room_post
      -Author Id
 */

