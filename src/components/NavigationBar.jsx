export default function NavigationBar ({ onClick }) {
    return (
        <nav>
            <h2 id="nav-start">Request data on:</h2>
            <ul>
                <li><a onClick={onClick} data-mode="characters" href="#nav-start">Inhabitants</a></li>
                <li><a onClick={onClick} data-mode="locations" href="#nav-start">Locations</a></li>
            </ul>
        </nav>
    )
}