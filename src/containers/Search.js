import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { ArtistsWithPaging } from '../components/artists/Artists';
import { getArtistText, getText } from '../selectors/search';
import { updateInput } from '../actions/search';
import store from '../store';

function Search({ artistText, text, handleChange, handleSubmit }) {
  return (
    <>
      <h1>Search!!!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Search Name:
          <input type="text" name="text" value={text} onChange={handleChange}></input>
        </label>
        <button type="submit">Submit</button>
      </form>
      <ArtistsWithPaging 
        artistText={artistText}
      />
    </> 
  );
}

Search.propTypes = {
  artistText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  artistText: getArtistText(state),
  text: getText(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    dispatch(updateInput({ name: target.name, value: target.value }));
  },
  
  handleSubmit(event) {
    event.preventDefault();
    dispatch(updateInput({ name: 'artistText', value: getText(store.getState()) }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
