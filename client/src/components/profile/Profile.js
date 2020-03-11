import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/spinner';
import Films from '../films/Films';
import Film from '../films/Films';
//import ProfileTop from './ProfileTop';
//import ProfileAbout from './ProfileAbout';
// import ProfileExperience from './ProfileExperience';
// import ProfileEducation from './ProfileEducation';
//import ProfileGithub from './ProfileGithub';
//import { getProfileById } from '../../actions/profile';

//so either: pass in films here, run a map fn to find a match with user id
//or, add each film to a general list, and to the user, and just map each of users films
//think the latter is better.  

const Profile = ({
  getProfileById,
  profile: { profile, loading },
  auth,
  match
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to='/profiles' className='btn btn-light'>
            Back To Profiles
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to='/edit-profile' className='btn btn-dark'>
                Edit Profile
              </Link>
            )}
          <div className='profile-grid my-1'>
            <h2 className='text-primary'>Your films</h2>
            <Films />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps
)(Profile);