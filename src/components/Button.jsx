import "../styles/Button.css"

function Button({children}) {
    return (
        <a className="btn-main" href="#">{children}</a>
    );
}

export default Button;