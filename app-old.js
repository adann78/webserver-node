const http=require('http')
http.createServer( (req, res)=> {
    
    
    //res.writeHead(200, {'Content-Type': 'application/json'})
    /*
    const persona={
        id: 1,
        nombre: 'Adan'
    }
    res.write(JSON.stringify(persona))

res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
   res.writeHead(200, { 'Content-Type': 'application/csv' })
     res.write('1, Kenia\n')
   res.write('2, Heyri\n')
   res.write('3, Carmen\n')
   res.write('4, Eloina\n')
   res.write('5, Mitzi\n')
    */
   
   res.write('hola mundo')
  
    res.end();
})
.listen(8080)

console.log('Escuchando en el puerto',8080)

