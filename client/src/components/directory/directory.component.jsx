import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
// import { selectDirectorySections } from '../../components/directory/directory.selectors';  // TODO move to Redux

import MenuItem from '../menu-item/menu-item.component';

import { DirectoryMenuContiner } from './directory.styles';


const Directory = ({ sections }) => (
  <DirectoryMenuContiner>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuContiner >
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);