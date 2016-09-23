/**
 * @author: Kozinets Svyatoslav
 */
import ControllerRender from "./controllers/ControllerRender"
import ControllerREST from "./controllers/ControllerREST"

export default class Main extends React.Component {
    constructor( props ) {
        super( props )
        this.state = {
            posts: null
        }
    }

    componentDidMount() {
        ControllerREST.getPosts.call( this )
        ControllerREST.getAboutData.call( this )
    }

    render() {
        return (
            <div>
                <div className="content">{ this.state.posts && ControllerRender.renderPostList.call( this ) }</div>
                <div className="sidebar">
                    { ControllerRender.renderTopPosts.call( this ) }
                    { this.state.aboutData && ControllerRender.renderAboutInfo.call( this ) }
                </div>
            </div>
        )
    }
}