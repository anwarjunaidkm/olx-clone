import React, { Fragment, useState,useContext } from 'react';
import './Create.css';
import Header from '../Header/Header';
import {FirebaseContext,AuthContext} from '../../store/FirebaseContext'
import {useHistory} from 'react-router-dom'

const Create = () => {

const{firebase} =useContext(FirebaseContext)
const {user}=useContext(AuthContext)
const [name,setName] = useState('');
const [category,setCategory] = useState('');
const [price,setPrice] = useState('');
const [image,setImage] = useState('');
const date =new Date();
const history = useHistory()

const handleSubmit =()=>{
  
  firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
    ref.getDownloadURL().then((url)=>{
    console.log(url);
    firebase.firestore().collection('products').add({
      name,
      category,
      price,
      url,
      useId:user.uid,
      createdAt:date.toDateString()

    })
    history.push('/')


    })
  })



}

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          {/* <form> */}
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              name="category"
              defaultValue="John"
            />
            <br />
            <label   htmlFor="fname">Price</label>
            <br />
            <input value={price} onChange={(e)=>setPrice(e.target.value)} className="input" type="number" id="fname" name="Price" />
            <br />
          {/* </form> */}
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>
          
            <br />
            <input onChange={(e)=>{
              setImage(e.target.files[0])

            }} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
        
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
