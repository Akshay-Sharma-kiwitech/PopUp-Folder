import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../Components/Modal';
import './styles.css';

function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [input, setInput] = useState('');
  const [folders, setFolders] = useState([])
  

  
  const handleAddFolder = () => {
    let foldersArr = [...folders]
    const folderItem = {
      id: foldersArr?.length + 1,
      name: input,
    }
    foldersArr.push(folderItem)
    setFolders(foldersArr);
    setInput('');
    setModalOpen(false);
  }

  return (
    <div className="home">
      <div className='center'>
        <h2>Hey,open the modal.</h2>
        <button
          className="openModalBtn"
          onClick={() => {
            setModalOpen(true);
          }}
          >
          Open
        
        </button>
      </div>

      <div className='folders-container'>
        {
          folders?.map(folder => {
            return (
              <Link to={`/folder/${folder?.name}`} state={{folder}} className='folder'>
                <img src={require('/home/kiwitech/popupsuccess/src/Assets/OneDrive_Folder_Icon.svg.png')} alt={folder?.name}/>
                <span className='folder-name'>{folder?.name}</span>
              </Link>
            )
          })
        }
        </div>


      {
        modalOpen &&
        <Modal
          setOpenModal={setModalOpen} 
          input={input}
          setInput={setInput}
          handleSubmit={handleAddFolder}
        />
      }
      
    </div>
  );
}

export default Home;
