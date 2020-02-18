import React, {Fragment} from 'react';

const Informacion = ({info}) => {

    if(Object.keys(info).length === 0){
        return null;
    }

    console.log(info)

    return (
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Informacion de Artista
            </div>
            <div className="card-body">
                <img src={info.strArtistThumb} alt="Logo"></img>
                <p className="card-text"><span class="badge badge-success">{info.strGenre}</span></p>
                <h2 className="card-text text-center">Acerca de la banda</h2>
                <p className="card-text">{info.strBiographyES}</p>
                <p className="card-text">
                    <a href={`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>

                    <a href={`https://${info.strStwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>

                    <a href={`${info.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Informacion;