import data from '../MovieData.json'

const MovieData = data.MovieData;

function MovieList () {
    return (
        <>
        <div className='text-center'>
            <h1>The Collection</h1>
        </div>
        <div className='row justify-content-center'>
            <div className='col-auto'>
                <table className='table table-striped table-bordered'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Title</th>
                            <th>Year</th>
                            <th>Director</th>
                            <th>Rating</th>
                            <th>Category</th>
                            <th>Edited</th>
                        </tr>
                    </thead>
                    <tbody>
                        {MovieData.map((m) => (
                            <tr>
                                <td>{m.Title}</td>
                                <td>{m.Year}</td>
                                <td>{m.Director}</td>
                                <td>{m.Rating}</td>
                                <td>{m.Category}</td>
                                <td>{m.Edited}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}

export default MovieList;