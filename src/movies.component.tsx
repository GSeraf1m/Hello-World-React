import React, { Fragment, ChangeEvent, FormEvent } from 'react';
import logo from './logo.svg';
import movies from './movies.json';

interface State {
    movie: { name: string, year: number },
    movies: {name: string, year: number}[]
}

class Movies extends React.Component<any,State> {

    state = {
        movie: {name:'',year:0},
        movies:movies,
    }

    render() {
        return (
            <Fragment>
                <div>
                    <h1>Lista de Filmes</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input value={this.state.movie.name} id="name" placeholder="Digite o nome do filme" onChange={this.handleFormChange} />
                        <input value={this.state.movie.year} id="year" placeholder="Digite o ano do filme" onChange={this.handleFormChange} />
                        <button>Adicione o filme</button>
                    </form>
                    <ul>
                        {this.pegarFilmes()}
                    </ul>
                </div>
            </Fragment>
        );

    }
    pegarFilmes() {

        return this.state.movies.map(movie => {
            return <li>{movie.name} - {movie.year}</li>
        });
    } 

    handleSubmit=(e:FormEvent)=>{
        e.preventDefault()
        const { movies, movie } = this.state

        this.setState({
            movies: [
               ...movies,
               movie
            ]
        })
    }
    handleFormChange=(event: ChangeEvent<HTMLInputElement>)=>{
        const target = event.target;
        const id = target.id as keyof State['movie'];
        const value = target.value;

        this.setState({
            movie: {
                ...this.state.movie,
                [id]: value
            }
        })
    }
}

export default Movies;
