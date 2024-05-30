const AlbumCard =(props)=> {
    
    return(
        <div className="col">
            <div className="card album-card h-100">
                <img src={`/images/${props.imgUrl}`} alt={`image of ${props.title}`} className="img-fluid image card-img-top album-images"/>
                <div className="card-body">
                    <h3 className="card-title album-title text-uppercase">{props.title}</h3>
                    <p className="card-tex text-capitalize">{props.artist} | {props.label} | {props.yrReleased}</p>
                </div>
            </div>
        </div>
    )
}

export default AlbumCard