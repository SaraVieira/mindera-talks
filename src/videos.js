import { observable, action } from 'mobx';
import uuid from 'node-uuid';

class Videos{
		@observable videos = [{
			id: uuid(),
			name: 'MTalk | Unpack Webpack',
			video: 'https://youtu.be/9VnIApH6zvs'
		}];

		@action addVideo= (video) => {
			this.videos.push(video);
		}
}

let videos = new Videos();
export default videos;
