import "./SubmitMessage.css"

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
                                    <img
                                        src="/logo192.png"
                                        alt="logo"
                                        style={{ width: "20px", marginRight: "10px" }}
                                    />
                                    {errorMessage}
                                </span>
                            )}
                    </p>
                </div>
            </div>
        );
    }
}