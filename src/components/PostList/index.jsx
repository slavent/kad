import React from "react"
import "./style.scss"
import { Link } from "react-router"

export default ( { data } ) =>
    <div className="posts">
        { data.map( ( { id, acf: { title, preview, image } }, index ) =>
            <div key={ index } className="posts__item box">
                <div className="posts__category">Статьи</div>
                <div className="posts__title">
                    <Link to={ "/post/" + id }>{ title }</Link>
                </div>
                <div
                    className="posts__desc"
                    dangerouslySetInnerHTML={ { __html: preview } }>
                </div>
                <div className="posts__photo">
                    <Link to={ "/post/" + id }>
                        <img src={ image }/>
                    </Link>
                </div>
                <Link to={ "/post/" + id } className="posts__more">читать дальше</Link>
            </div>
        ) }
    </div>
