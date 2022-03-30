import React from 'react';
import {useLocation, useNavigate } from 'react-router-dom'
import './styles.css';

const Folder = (props) => {
  const {state:{folder}} = useLocation();
  // const {state:{Home}} = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      <div className='flex-row items-center'>
        <button onClick={()=>navigate(-1)}>Back</button>
        <h2 className='folder-heading'>{folder?.name}</h2>
      </div>
    </div>
  )
}

export default Folder
