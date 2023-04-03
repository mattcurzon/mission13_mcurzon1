import data from './MovieData.json'

const MovieData = data.MovieData;

function MovieList () {
    return (
        <>
        <div>
            <h1>Joel Hilton's Movie Collection</h1>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Director</th>
                        <th>Rating</th>
                        <th>Category</th>
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
}

export default MovieList;