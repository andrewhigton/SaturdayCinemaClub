import React, { useEffect, useState, Fragment } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createFilm, getCurrentProfile } from '../../actions/profile';

const CreateFilm = ({
	createFilm,
	// getCurrentProfile,
	profile: { profile, loading },
	history
}) => {
	const [formData, setFormData] = useState({
		user: '',
		title: '',
		date: '',
		cinema: '',
		image: '',
		ticketPrice: 8,
		crowdfundTarget: 90,
		totalsoFar: 56,
		
	});
	const [displaySocialInputs, toggleSocialInputs] = useState(false);
	const {
		user,
		title,
		cinema,
		date,
		image,
	
	} = formData;
	
	const onChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });
	
	const onSubmit = e => {
		e.preventDefault();
		createFilm(formData, history);
	};
	
	// useEffect(() => {
	// 	getCurrentProfile();
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [getCurrentProfile]);
	return loading && profile === null ? (
		<Redirect to='/dashboard' />
	) : (
		<Fragment>
			<h1 className='dashboard large text-primary'>Create a film request</h1>
			
			<small>* = required field</small>
				
			<form className='pageMargins' onSubmit={e => onSubmit(e)}>
				<div className='form-group'>
					<p>Film</p>
					<input
						type='text'
						placeholder='Enter film title'
						name='title'
						value={title}
						onChange={e => onChange(e)}
					/>
				</div>
				<div className='form-group'>
					<p>Cinema</p>
					<input
						type='text'
						placeholder='Enter location, or cinema'
						name='cinema'
						value={cinema}
						onChange={e => onChange(e)}
					/>
				</div>
				<div className='form-group'>
		          <p>Date</p>
		          <input
		            // type='date'
		            name='date'
		            placeholder='Enter a date'
		            value={date}
		            onChange={e => onChange(e)}
		          />
		        </div>
 				<div className='form-group'>
					<p>Image</p>
					<input
						type='text'
						placeholder='Enter a url for your movie image'
						name='image'
						value={image}
						onChange={e => onChange(e)}
					/>
				</div>
				

				<input type='submit' className='btn btn-primary my-1' />
				<Link className='btn btn-light my-1' to='/dashboard'>
					Go Back
				</Link>
			</form>
		</Fragment>
	);
};

CreateFilm.propTypes = {
	createFilm: PropTypes.func.isRequired,
	// getCurrentProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
	profile: state.profile
});

export default connect(mapStateToProps, { createFilm })(
	withRouter(CreateFilm)
	);


				// {displaySocialInputs && (
				// 	<Fragment>
				// 		<div className='form-group social-input'>
				// 			<i className='fab fa-twitter fa-2x' />
				// 			<input
				// 				type='text'
				// 				placeholder='Twitter URL'
				// 				name='twitter'
				// 				value={twitter}
				// 				onChange={e => onChange(e)}
				// 			/>
				// 		</div>

				// 		<div className='form-group social-input'>
				// 			<i className='fab fa-facebook fa-2x' />
				// 			<input
				// 				type='text'
				// 				placeholder='Facebook URL'
				// 				name='facebook'
				// 				value={facebook}
				// 				onChange={e => onChange(e)}
				// 			/>
				// 		</div>

				// 		<div className='form-group social-input'>
				// 			<i className='fab fa-youtube fa-2x' />
				// 			<input
				// 				type='text'
				// 				placeholder='YouTube URL'
				// 				name='youtube'
				// 				value={youtube}
				// 				onChange={e => onChange(e)}
				// 			/>
				// 		</div>

				// 		<div className='form-group social-input'>
				// 			<i className='fab fa-linkedin fa-2x' />
				// 			<input
				// 				type='text'
				// 				placeholder='Linkedin URL'
				// 				name='linkedin'
				// 				value={linkedin}
				// 				onChange={e => onChange(e)}
				// 			/>
				// 		</div>

				// 		<div className='form-group social-input'>
				// 			<i className='fab fa-instagram fa-2x' />
				// 			<input
				// 				type='text'
				// 				placeholder='Instagram URL'
				// 				name='instagram'
				// 				value={instagram}
				// 				onChange={e => onChange(e)}
				// 			/>
				// 		</div>
			
				// 	</Fragment>
// <div className='my-2'>
					
// 					<button
// 						onClick={() => toggleSocialInputs(!displaySocialInputs)}
// 						type='button'
// 						className='btn btn-light'
// 					>
// 						Add Social Network Links
// 					</button>
// 					<span>Optional</span>
// 				</div>
// 				)}