import React, {Component} from 'react';

class FilmReleases extends Component{
    render(){
        return(
            <div className="filmReleses">
          <a href={this.props.href}>
                   <li>{this.props.children}</li>
                </a>  
            </div>
        )
    }
}
export default FilmReleases;



