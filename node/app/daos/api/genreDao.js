const con = require(`../../config/dbconfig`)

const genreDao = {
    table: 'genre',
    
    sort:   (req, res, table)=> {
        con.execute(
            `SELECT * FROM ${table} ORDER BY genre;`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR: ', error)
                }
            }
        )
    },

    getInfo: (res,table, id)=> {
        `SELECT al.album_id, al.title, al.album_cover,
        CASE
            WHERE ar.alias IS NULL THEN ``
            ELSE ar.alias
            END alias,
        CASE
            WHERE ar.fName IS NULL THEN ``
            ELSE ar.fName
            END fName,
        CASE
            WHERE ar.lName IS NULL THEN ``
            ELSE ar.lName
            END lName,
        CASE
            WHERE b.band IS NULL THEN ``
            ELSE b.band
            END band,
        ar.artist_id, b.band_id, g.genre_id, g.genre
        FROM album al
        LEFT OUTER JOIN artist ar USING (artist_id)
        LEFT OUTER JOIN band ar USING (band_id)
        JOIN album_to_genre USING (album_id)
        JOIN genre g USING (genre_id)
        WHERE ${table}_id = ${id};`
    }
}

module.exports = genreDao