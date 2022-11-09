
// Insertar al menos 15 publicaciones nuevas con almenos 2 comentarios por publicación:


db.posts.insertMany([
{ title: 'Hola', body: "Hola colega", username: 'fernando',comments: [{username: 'Joselito',body: 'como mola'},{username: 'Rodrigo',body: 'no mola nada'}]},
{ title: 'Hello', body: 'Aquí pasando la mañana', username: 'Daniela',comments: [{username: 'Pepe',body: 'igual yo'},{username: 'Ramona',body: 'yo no'}]},
{ title: 'Hola', body: 'Hola colega', username: 'Miguel',comments: [{username: 'Joselito',body: 'como mola'},{username: 'German',body: 'Holita'}]},
{ title: "Saludos", body: "Hoy es miércoles", username: "Fernanda",comments: [{username: "Pablito",body: "Que va"},{username:'Juanito',body:'Si, si'}]},
{ title: 'Ufff', body: 'Tengo sueño', username: 'Carlos',comments: [{username: 'Armando',body: 'Yo también'},{username:'Ginés',body:'Yo no'}]},
{ title: 'Desayunando', body: 'Que rico el mate', username: 'Matias',comments: [{username: 'Diego',body: 'No me gusta el mate'},{username:'Ginés',body:'A mi me encanta'}]},
{ title: 'Comiendo', body: 'Que rica la pasta', username: 'Sofia',comments: [{username: 'Dani',body: 'que pinta'},{username:'Ginés',body:'ñam ñan'}]},
{ title: 'Me voy de vacaciones', body: 'Estoy en Bali', username: 'Rosa',comments: [{username: 'Mayte',body: 'yo quiero ir'},{username:'Boro',body:'Yo ya he estado'}]},
{ title: 'Trabajando', body: 'Tengo mucho curro', username: 'Arturo',comments: [{username: 'Tomás',body: 'Que te sea leve'},{username:'Carmen',body:'Yo estoy de vacaciones'}]},
{ title: 'Examenes', body: 'Estudiando mucho', username: 'Pere',comments: [{username: 'John',body: 'Poor guy'},{username:'Carmeta',body:'animo'}]},
{ title: 'Estoy enfermo', body: 'Se admiten visitas', username: 'Jim',comments: [{username: 'Sif',body: 'recuperate'},{username:'Jonas',body:'mañana me paso'}]},
{ title: 'De puente', body: 'Que ganas tenia de irme de vacaciones', username: 'Matilde',comments: [{username: 'Ana',body: 'Nos vemos pronto'},{username:'Pinocho',body:'Ole'}]},
{ title: 'Que calor', body: 'No se puede soportar', username: 'Cenicienta',comments: [{username: 'Shreck',body: 'Largo de mi cienaga'},{username:'Asno',body:'Me quiero quedar contigo'}]},
{ title: 'En la montaña', body: "Creo que no vuelvo a casa", username: 'Frofo',comments: [{username: 'Gandalf',body: 'Hombre de poca fe'},{username: 'Pipin',body: 'Ya vienen las aguilas'}]},
{ title: 'Llegando a casa', body: "Estoy cansando, pero me merecido la pena", username: 'Brody',comments: [{username: 'Quint',body: 'Que suerte tienen algunos'},{username: 'Hooper',body: 'Que suerte hemos tenido'}]},
    ])

    // Insertar al menos 10 nuevos usuarios:


    db.Users.insertMany([

        { username: "Richard", age: 55, email: "richard@gmail.com"},

        { username: "Sarah", age: 37, email: "sarah@gmail.com"},

        { username: "Peter", age: 58, email: "peter@gmail.com"},

        { username: "Cenicienta", age: 31, email: "cenicienta@gmail.com"},

        { username: "Shrek", age: 54, email: "shrek@gmail.com"},

        { username: "Asno", age: 44, email: "asno@gmail.com"},

        { username: "Encantador", age: 31, email: "encantador@gmail.com"},

        { username: "Brody", age: 52, email: "brody@gmail.com"},

        { username: "Frodo", age: 115, email: "frodo@gmail.com"},

        { username: "Bilbo", age: 186, email: "bilbo@gmail.com"}

        ])

        // Actualizar publicaciones:
        // Actualiza todos los campos de una publicación



        db.Users.find()

        db.posts.updateOne({ title: 'Llegando a casa' },
        { $set:{title: "Creia que llegaba", body: 'al final no llegue', username: "Fredy",comments: [{username: 'Hopper',body: 'Adios tiburoncito'} ]}})

        // Cambiar el body de una publicación.


        db.Posts.updateOne({ title: 'examenes' },
            {
              $set: {
                body: "no estudio nada",
              }
            })


            // Actualizar comentarios:
            // Actualiza el comentario de una publicación.

       

        db.Posts.updateOne({ title: 'En la montaña' }, {$set: {comments: {username: "Berta", body:"I miss you" },}})

        // Actualizar usuarios:
        // Actualiza todos los campos de un usuario

        db.Users.updateOne({username:'Frodo'},{$set:{username:'Gandalf', age:101,email:"gandalf@gmail.com"}})


        // Cambiar el email de dos usuarios es decir hacer la query dos veces.

        db.Users.updateOne({username:'Asno'}, {$set:{email:'asno2@gmail.com'}})
        db.Users.updateOne({username:'Cenicienta'}, {$set:{email:'cenicienta2@gmail.com'}})

        // Aumenta en 5 años la edad de un usuario

        db.Users.updateOne({ username: 'Richard' },
        {
          $inc: {
            age: 5
          }
        })

        // OBTENER DATOS
        // Seleccionar todas las publicaciones

        db.posts.find()

        // Selecciona las publicaciones que coincidan con el username indicado

        db.posts.find({username: "Matilde"})

        // Seleccione todos los usuarios con una edad mayor a 20

        db.Users.find({age: {$gt:20}})

        // Seleccione todos los usuarios con una edad inferior a 23

        db.Users.find({age:{$lt:23}})

        // Seleccione todos los usuarios que tengan una edad entre 25 y 30 años

        db.Users.find({age:{$gte: 25 ,$lte: 30}})

        // Muestra los usuarios de edad menor a mayor y viceversa

        db.Users.find().sort({age:1})
        db.Users.find().sort({age:-1})

        // Seleccione el número total de usuarios

        db.Users.find().count()

        // Seleccione todas las publicaciones y haz que se muestren con la siguiente estructura: Título de la publicación: "title one"

        db.posts.find().forEach(() => {
            print("titulo de la publicacion:'title one'" )
          })

        //   Selecciona solo 2 usuarios

        db.Users.find().limit(2)

        // Busca por title 2 publicaciones

        db.posts.find({ $or:[{title: "Estoy enfermo"},{title: "Que calor"}]});

        // BORRAR DATOS

        // Elimina a todos los usuarios con una edad mayor a 30

        db.Users.deleteMany({ age: {$gt:100}})

        // Extra

        // Seleccione el número total de publicaciones que tienen más de un comentario

        db.posts.find( { comments: {$size: 2} } ).count();

        // Seleccione la última publicación creada


        db.posts.find().sort({_id:-1}).limit(1);

        // Selecciona 5 publicaciones y que sean las últimas creadas
 
        db.posts.find().sort({_id:-1}).limit(5);


        // Elimina todas las publicaciones que tengan más de un comentario


        db.posts.deleteMany({comments: {$gt:1}});



