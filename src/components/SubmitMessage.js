import "./SubmitMessage.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleExclamation} from "@fortawesome/free-solid-svg-icons"
// export default function SubmitMessage({ isVisibale, errorMessage }) {
//     if (isVisibale) {
//         return (
//             <div className="container">
//                 <div>
//                     <p style={{ color: errorMessage == null ? "green" : "red" }}>
//                         {errorMessage == null ? "form submitted successfully" : <img src="./logo192.png"></img>  errorMessage}
//                     </p>
//                 </div>
//             </div>
//         )
//     }
// }

export default function SubmitMessage({ isVisibale, errorMessage }) {
    if (isVisibale) {
        return (
            <div className="container">
                <div>
                    <p style={{ color: errorMessage == null ? "green" : "red" }}>
                        {errorMessage == null
                            ? "Form submitted successfully"
                            : (
                                <span>
                                    <FontAwesomeIcon style={{marginRight : "10px"}} icon={faCircleExclamation}></FontAwesomeIcon>
                                    {errorMessage}
                                </span>
                            )}
                    </p>
                </div>
            </div>
        );
    }
}