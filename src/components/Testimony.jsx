import "../styles/Testimony.css"

/**
 *
 * @param profileUrl
 * @param name
 * @param {string} role
 * @param {string} content
 * @returns {JSX.Element}
 * @constructor
 */

function Testimony({profileUrl, name, role, content }) {
    return (
        <article className="article-testimony">
            <p>{content}</p>
            <div className="wrapper">
                <img src={profileUrl} alt={`profile picture of ${name}`}/>
                <div className="info">
                    <strong>{name}</strong>
                    <span>{role}</span>
                </div>
            </div>
        </article>
    );
}

export default Testimony;