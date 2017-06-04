import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default class FavoritesTableRow extends React.Component {

  constructor(props) {
    super(props);
  }

  latestEpisodeDate() {
    const { favorite } = this.props;
    let episodeToReturn = null;

    favorite._embedded.episodes.forEach(episode => {
      if (!episodeToReturn && moment(episode.airdate) < moment().set('hour', 0).set('minute', 0).set('second', 0)) {
        episodeToReturn = episode;
      }
      else if (episodeToReturn && moment(episode.airdate) < moment().set('hour', 0).set('minute', 0).set('second', 0)
        && moment(episode.airdate) > moment(episodeToReturn.airdate)) {
        episodeToReturn = episode;
      }
    });
    return episodeToReturn ? moment(episodeToReturn.airdate).format('L') : 'Unkown';

  }

  nextEpisode() {
    const { favorite } = this.props;
    let next = null;

    favorite._embedded.episodes.forEach(episode => {
      if (!next && moment(episode.airdate) >= moment().set('hour', 0).set('minute', 0).set('second', 0)) {
        next = episode;
      }
      else if (next && moment(episode.airdate) >= moment().set('hour', 0).set('minute', 0).set('second', 0)
        && moment(episode.airdate) < moment(next.airdate)) {
        next = episode;
      }
    });

    return next ? moment(next.airdate).format('L') : 'Unknown';
  }

  render() {
    const { favorite } = this.props;
    const latestEpisode = this.latestEpisodeDate();
    const nextEpisode = this.nextEpisode();

    return (
      <tr>
        <td>
          <Link to={`/serie/${favorite.id}`}>{favorite.name}</Link>
          </td>
        <td>{favorite.status}</td>
        <td>{latestEpisode}</td>
        <td>{nextEpisode}</td>
        <td>
          <button className="btn btn-danger">
            <span className="glyphicon glyphicon-trash"/>
          </button>
        </td>
      </tr>
    );
  }
}

FavoritesTableRow.PropTypes = {
  favorite: PropTypes.shape({
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    _embedded: PropTypes.arrayOf(
      PropTypes.shape({
        airdate: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};

