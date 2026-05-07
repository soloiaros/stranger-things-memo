export default function NavigationBar ({ onClick }) {
    return (
        <nav>
            <h2>Request data on:</h2>
            <ul>
                <li><a onClick={onClick} data-mode="characters" href="#">Inhabitants</a></li>
                <li><a onClick={onClick} data-mode="locations" href="#">Locations</a></li>
            </ul>
        </nav>
    )
}