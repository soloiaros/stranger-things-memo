import HPDLogo from '../assets/hawkpd.svg'

export default function Header () {
    return (
        <header>
            <img src={HPDLogo} alt="HPD Logo" />
            <h1>Hawkins PD</h1>
            <h2>Monitoring System</h2>
            <h3>GCS v 1.2.9</h3>
            <h3>© 1983 Global Control Systems Inc. </h3>
            <h3> -Server 851- </h3>
        </header>
    )
}