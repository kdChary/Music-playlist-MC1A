import {MdDelete} from 'react-icons/md'

import './index.css'

const TrackItem = props => {
  const {trackDetails, deleteTrack} = props

  const {id, imageUrl, name, genre, duration} = trackDetails

  const onDeleteTrackClicked = () => {
    deleteTrack(id)
  }

  return (
    <li className="track-item">
      <div className="track-left-section">
        <img src={imageUrl} alt="track" className="track-image" />
        <div className="track-details">
          <p className="track-name">{name}</p>
          <p className="track-genre">{genre}</p>
        </div>
      </div>
      <div className="track-right-section">
        <p className="track-duration">{duration}</p>
        <button
          type="button"
          className="delete-button"
          data-testid="delete"
          onClick={onDeleteTrackClicked}
        >
          <MdDelete className="delete-icon" alt="delete" />
        </button>
      </div>
    </li>
  )
}

export default TrackItem
