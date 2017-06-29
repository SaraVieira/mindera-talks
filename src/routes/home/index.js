import { h, Component } from 'preact';
import { connect } from 'mobx-preact';
import { action } from 'mobx';
import uuid from 'node-uuid';
import style from './style';

@connect(['videos'])
export default class Home extends Component {

	@action addVideo() {
		this.props.videos.addVideo({
			id: uuid(),
			name: 'CSS Hates you',
			video: 'https://www.youtube.com/watch?v=gwW36kV9TV4'
		});
	}

	constructor(props) {
		super(props);
		this.addVideo = this.addVideo.bind(this);
	}

	render() {
		return (
			<div class={style.home}>
				{this.props.videos.videos.map(video => <p>{video.name}</p>)}
				<button onClick={this.addVideo}>Add A video</button>
			</div>
		);
	}
}
