//Dependecia commonj
const express=require('express')

//crear el objeto app
const app=express()

//primera prueba de url del servidor
app.get('/prueba', function(request, response){
        response.send("Holaaaa");
});


//uris de bootcamps
//traer todos ls bootcamps
app.get('/api/v1/devcamp/bootcamps',
(request,response)=>{
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg" : "mostrar todos los bootcamps"    
                    })
})
//traer bootcamp por id
app.get('/api/v1/devcamp/bootcamps/:id',
(request,response)=>{
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg" : `Seleccionando bootcamp con id ${request.params.id}`  
                    })
})
//crear bootcamps
app.post('/api/v1/devcamp/bootcamps',
(request,response)=>{
            response
                    .status(201)
                    .json({
                        "success": true,
                        "msg" : "crear bootcamp"    
                    })
})
//actualizar bootcamp por id
app.put('/api/v1/devcamp/bootcamps/:id',
(request,response)=>{
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg" : `Actualizando  bootcamp con id ${request.params.id}`  
                    })
})
//eliminar bootcamp por id
app.delete('/api/v1/devcamp/bootcamps/:id',
(request,response)=>{
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg" : `Eliminando bootcamp con id ${request.params.id}`  
                    })
})


//evidencia:uris de curses
//traer todos los curses
app.get('/api/v1/devcamp/curses',
(request,response)=>{
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg" : "mostrar todos los curses"    
                    })
})
//traer curses por id
app.get('/api/v1/devcamp/curses/:id',
(request,response)=>{
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg" : `Seleccionando curses con id ${request.params.id}`  
                    })
})
//crear curses
app.post('/api/v1/devcamp/curses',
(request,response)=>{
            response
                    .status(201)
                    .json({
                        "success": true,
                        "msg" : "crear curses"    
                    })
})
//actualizar curses por id
app.put('/api/v1/devcamp/curses/:id',
(request,response)=>{
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg" : `Actualizando  curses con id ${request.params.id}`  
                    })
})
//eliminar curses por id
app.delete('/api/v1/devcamp/curses/:id',
(request,response)=>{
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg" : `Eliminando curses con id ${request.params.id}`  
                    })
})



//evidencia:uris para reviews
//traer todos los reviews
app.get('/api/v1/devcamp/reviews',
(request,response)=>{
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg" : "mostrar todos los reviews"    
                    })
})
//traer reviews por id
app.get('/api/v1/devcamp/reviews/:id',
(request,response)=>{
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg" : `Seleccionando reviews con id ${request.params.id}`  
                    })
})
//crear reviews
app.post('/api/v1/devcamp/reviews',
(request,response)=>{
            response
                    .status(201)
                    .json({
                        "success": true,
                        "msg" : "crear reviews"    
                    })
})
//actualizar reviews por id
app.put('/api/v1/devcamp/reviews/:id',
(request,response)=>{
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg" : `Actualizando  reviews con id ${request.params.id}`  
                    })
})
//eliminar reviews por id
app.delete('/api/v1/devcamp/reviews/:id',
(request,response)=>{
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg" : `Eliminando reviews con id ${request.params.id}`  
                    })
})




//evidencia:uris para users
//traer todos los users
app.get('/api/v1/devcamp/users',
(request,response)=>{
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg" : "mostrar todos los users"    
                    })
})
//traer users por id
app.get('/api/v1/devcamp/users/:id',
(request,response)=>{
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg" : `Seleccionando users con id ${request.params.id}`  
                    })
})
//crear users
app.post('/api/v1/devcamp/users',
(request,response)=>{
            response
                    .status(201)
                    .json({
                        "success": true,
                        "msg" : "crear users"    
                    })
})
//actualizar users por id
app.put('/api/v1/devcamp/users/:id',
(request,response)=>{
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg" : `Actualizando  users con id ${request.params.id}`  
                    })
})
//eliminar users por id
app.delete('/api/v1/devcamp/users/:id',
(request,response)=>{
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg" : `Eliminando users con id ${request.params.id}`  
                    })
})


//establecer un servidor
const puerto=4500

app.listen(puerto ,
        console.log("Servidor escuchando en el puerto:"+ puerto))
