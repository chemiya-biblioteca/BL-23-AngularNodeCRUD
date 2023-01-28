const router = require('express').Router()
const conexion = require('./config/conexion')



//---------- agregamos rutas--------
//get equipos
router.get('/',(req, res)=>{
    let sql ='select * from tb_equipo'//hago select de todos
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)//devuelvo el resultado en json
        }
    })

})

// get un equipo
router.get('/:id',(req, res)=>{
    const {id} = req.params//cojo el id que me lega y hago select con el y devuelvo en json
    let sql ='select * from tb_equipo where id_equipo = ?'
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//agregar equipo
router.post('/',( req, res)=>{
    const{nombre, localizacion} = req.body//cojo el body que m ellega y lo inserto y devuelvo texto

    let sql = `insert into tb_equipo(nombre, localizacion) values('${nombre}','${localizacion}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'equipo agregado'})
        }
    })
})

//eliminar 
router.delete('/:id',(req, res)=>{
    const{id} = req.params//cojo el id y hago consulta para borrarlo, devuelvo texto

    let sql =`delete from tb_equipo where id_equipo = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'equipo eliminado'})
        }
    })
});

//modificar
router.put('/:id',(req, res)=>{
    const{id}=req.params
    const{nombre, localizacion} = req.body//cojo los campos y el id que me llega y hago actualizaciony devuelvo texto

    let sql = `update tb_equipo set 
                nombre ='${nombre}',
                localizacion='${localizacion}'
                where id_equipo = '${id}'`
    
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'equipo modificado'})
        }
    })

})
//----------------------------------

module.exports = router