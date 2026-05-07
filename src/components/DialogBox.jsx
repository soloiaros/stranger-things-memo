import CloseIcon from '../assets/close-btn.svg'

export default function DialogBox () {
    return (
        <dialog id="attrib-dialog">
            <div className="upper-bar">
                <p>Attributions</p>
                <form method="dialog"><button><img src={CloseIcon} alt="Close dialog" /></button></form>
            </div>
            <div className="info-section">
                <h2>Thanks for providing resources and inspiration!</h2>
                <p>Styling: macktropolis on CodePen</p>
                <p>Icons: Bakunetsu Kaito from TheNounProject</p>
                <p>Data: Lucas Josino (HawAPI)</p>
            </div>
        </dialog>
    )
}