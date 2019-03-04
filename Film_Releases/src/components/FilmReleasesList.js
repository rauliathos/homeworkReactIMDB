import React, {Component} from 'react';
import FilmReleases from "./FilmReleases"

class FilmReleasesList extends Component{
    render(){
        const filmReleasesNodes = this.props.data.map(filmReleases =>{
            return(
                <FilmReleases key={filmReleases.id} href={filmReleases.url}>{filmReleases.name}</FilmReleases>
            )
        })

        return(
        <div className="filmReleases-list">
            {filmReleasesNodes}
        </div>
        )
    }
}
export default FilmReleasesList;


