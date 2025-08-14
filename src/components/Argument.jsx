import "../styles/Argument.css"

/**
 *
 * @param imgUrl
 * @param {string} title
 * @param {string} paragraph
 * @returns {JSX.Element}
 * @constructor
 */
function Argument({imgUrl, title, paragraph}) {
    return (
        <article className="article-argument">
            <img src={imgUrl} alt="" />
            <strong>{title}</strong>
            <p>{paragraph}</p>
        </article>
    );
}

export default Argument;