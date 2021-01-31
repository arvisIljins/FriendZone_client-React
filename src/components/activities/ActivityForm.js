import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setEditMode } from './reducer/ActivitiesActions';

const ActivityForm = (props) => {
  const initializeForm = () => {
    return props.selectedActivity
      ? props.selectedActivity
      : {
          title: '',
          category: '',
          description: '',
          date: '',
          city: '',
          venue: '',
        };
  };
  const [activity, setActivity] = useState(initializeForm);

  // Input changes
  const handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    setActivity({ ...activity, [name]: value });
  };

  //Submit
  const handleSubmit = (event) => {
    //Stop Page reloading
    event.preventDefault();
    console.log(activity);
  };

  return (
    <Section>
      <div className='form-style-10'>
        <h1>
          Create new activity
          <span>Fill the form and tell us about your activity!</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className='section'>
            <span>1</span>About activity:
          </div>
          <div className='inner-wrap'>
            <label>
              Title
              <input
                onChange={handleInputChange}
                name='title'
                component='input'
                type='text'
                value={activity.title}
              />
            </label>
            <label>
              Description
              <textarea
                onChange={handleInputChange}
                component='input'
                name='description'
                value={activity.description}
              ></textarea>
            </label>
          </div>

          <div className='section'>
            <span>2</span>Where it's will happen?
          </div>
          <div className='inner-wrap'>
            <label>
              City
              <input
                type='text'
                onChange={handleInputChange}
                name='city'
                value={activity.city}
              />
            </label>
            <label>
              Venue
              <input
                type='text'
                onChange={handleInputChange}
                name='venue'
                value={activity.venue}
              />
            </label>
          </div>

          <div className='section'>
            <span>3</span>When and what?
          </div>
          <div className='inner-wrap'>
            <label>
              Date
              <input
                type='datetime-local'
                onChange={handleInputChange}
                name='date'
                value={activity.date}
              />
            </label>
            <label>
              Category
              <input
                type='text'
                onChange={handleInputChange}
                name='category'
                value={activity.category}
              />
            </label>
          </div>
          <div className='button_container'>
            <button className='details_button' type='submit' content='Submit'>
              Add
            </button>
            <button
              className='details_button'
              onClick={() => props.setEditMode(false)}
              content='Cancel'
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
};
const mapStateToProps = ({ activitiesState: { selectedActivity } }) => {
  return { selectedActivity };
};

// Functions
const mapDispatchToProps = (dispatch) => {
  return {
    setEditMode: (boole) => dispatch(setEditMode(boole)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityForm);

const Section = styled.section`
  width: 100%;
  margin: 1rem;
  .form-style-10 {
    padding: 3rem;
    background: var(--baseColor-Light);
    border-radius: 0.5rem 0.5rem 0.5rem 0;
    overflow: hidden;
  }
  .form-style-10 .inner-wrap {
    padding: 3rem;
    background: var(--baseColor-Light-2);
    border-radius: 0.5rem 0.5rem 0.5rem 0;
    margin-bottom: 15px;
  }
  .form-style-10 h1 {
    background: var(--baseColor-Light-2);
    padding: 1rem 3rem 1.5rem 3rem;
    margin: -3rem -3rem 3rem -3rem;
    color: var(--baseColor-Light);
    font-size: 2rem;
  }
  .form-style-10 h1 > span {
    display: block;
    margin-top: 0.2rem;
    font-size: 1.3rem;
  }
  .form-style-10 label {
    display: block;
    font-size: 1.3rem;
    color: var(--baseColor-Light);
    margin-bottom: 1.5rem;
  }
  .form-style-10 input[type='text'],
  .form-style-10 input[type='datetime-local'],
  .form-style-10 textarea,
  .form-style-10 select {
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 8px;
    border-radius: 0.5rem 0.5rem 0.5rem 0;
    background-color: var(--baseColor-Light);
    border: 0.1rem solid var(--baseColor-Light);
    outline: none;
    color: var(--baseColor-Light-2);
    :active {
      border-bottom: 0.1rem solid var(--success);
    }
    ::-webkit-calendar-picker-indicator {
      filter: invert(0.3);
    }
  }

  .form-style-10 .section {
    font-size: 2rem;
    color: var(--baseColor-Light-2);
    margin-bottom: 0.5rem;
  }
  .form-style-10 .section span {
    background: var(--baseColor-Light-2);
    padding: 0.5rem 1rem 0.5rem 1rem;
    position: absolute;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border: 0.4rem solid var(--baseColor-Light);
    font-size: 1.4rem;
    margin-left: -4.5rem;
    color: var(--baseColor-Light);
    margin-top: -0.3rem;
  }

  .button_container {
    display: flex;
    justify-content: flex-end;
  }

  .details_button {
    padding: 0.2rem 0.5rem;
    margin-left: 1rem;
    background-color: var(--baseColor-Dark-2);
    border: solid 0.1rem var(--baseColor-Dark-2);
    text-transform: uppercase;
    color: var(--baseColor);
    font-size: 1.2rem;
    transition: all 0.3s;
    cursor: pointer;
    outline: none;
    :hover {
      background-color: var(--baseColor);
      color: var(--baseColor-Dark-2);
    }
    :active {
      transform: scale(0.9);
    }
  }
`;
