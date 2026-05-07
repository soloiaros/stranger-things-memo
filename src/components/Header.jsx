import HPDLogo from '../assets/hawkpd.svg'
import GHIcon from '../assets/gh.png'
import CreditsIcon from '../assets/credits.png'

export default function Header () {
    return (
        <header>
            <div className="decorative">
                <img src={HPDLogo} alt="HPD Logo" />
                <h1>Hawkins PD</h1>
                <h2>Monitoring System</h2>
                <h3>GCS v 1.2.9</h3>
                <h3>© 1983 Global Control Systems Inc. </h3>
                <h3> -Server 851- </h3>
                <h3>------------------</h3>
            </div>
            <div className="functional-links">
                <a href="https://github.com/soloiaros/stranger-things-memo" target='_blank'><img src={GHIcon} alt="GitHub repositoty of the project" /></a>
                <button commandfor="attrib-dialog" command="show-modal"><img src={CreditsIcon} alt="View credentials" target='_blank' /></button>
            </div>
        </header>
    )
}