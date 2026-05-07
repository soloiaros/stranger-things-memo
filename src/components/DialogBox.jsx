import { useRef, useEffect } from 'react'
import CloseIcon from '../assets/close-btn.svg'

function makeDraggable(dialogEl) {
    let isDragging = false;
    let initialX, initialY;

    let [currentOffsetX, currentOffsetY] = [0, 0];

    const handle = dialogEl.querySelector('.upper-bar');

    function moveDialog(event) {
        dialogEl.style.transform = `translate3d(${currentOffsetX + event.clientX - initialX}px, ${currentOffsetY + event.clientY - initialY}px, 0px)`;
    } 
    
    handle.addEventListener('mousedown', (event) => {
        initialX = event.clientX;
        initialY = event.clientY;
        isDragging = true;

        document.addEventListener('mousemove', moveDialog);
    });

    document.addEventListener('mouseup', (event) => {
        if (!isDragging) return;
        currentOffsetX += event.clientX - initialX;
        currentOffsetY += event.clientY - initialY;
        isDragging = false;
        document.removeEventListener('mousemove', moveDialog);
    })
}

export default function DialogBox () {

    const dialogRef = useRef(null);

    useEffect(() => {
        if (dialogRef.current) {
            makeDraggable(dialogRef.current);
        }
    }, []);


    return (
        <dialog id="attrib-dialog" ref={dialogRef}>
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