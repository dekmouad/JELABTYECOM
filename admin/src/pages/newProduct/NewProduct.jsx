import { useState } from "react";
import "./newProduct.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { addProduct } from "../../redux/apiCalls";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const [color, setColor] = useState([]);
  const [type, setType] = useState([]);
  const [size, setSize] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  let history = useHistory();

 // Function to handle input changes
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  console.log(inputs)
  console.log(color)
  console.log(size)
  console.log(cat)

  // Function to handle category selection
  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  // Function to handle color selection
  const handleColor = (e) => {
    setColor(e.target.value.split(","));
  };

  // Function to handle size selection
  const handleSize = (e) => {
    setSize(e.target.value.split(","));
  };

  // Function to handle type selection
  const handleType = (e) => {
    setType(e.target.value.split(","));
  };


  // Function to handle the "Create" button click

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {    
           // Handle upload error
      },
      () => {        
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL, categories: cat,color : color, size:size,type:type };
          addProduct(product, dispatch);
          history.push("/products")
        });
      }
    );
  };
  // Render the NewProduct page
  return (
    <div className="newProduct">
      {isLoading && <Spinner/>}
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            name="title"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            name="desc"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Style</label>         
            <select name="brand" onChange={handleChange}> 
                  <option disabled selected> Style</option>
                  <option>Jellaba</option>
                  <option>Caftan</option>
                  <option>Takchita</option>
                  <option>Jabador</option>
                  <option>Gandoura</option>
                  
          </select>
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            name="price"
            type="number"
            placeholder="20"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <select name="Categories" onChange={handleCat}> 
                  <option disabled selected> Categories</option>
                  <option>women</option>
                  <option>men</option>
                  <option>kids</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Color</label>
          <input type="text" placeholder="red,black,white..." onChange={handleColor} />
        </div>
        <div className="addProductItem">
          <label>Size</label>
          <input type="text" placeholder="XS,S,M,L.." onChange={handleSize} />
        </div>
        <div className="addProductItem">
          <label>Type</label>
            <select name="type" onChange={handleType} > 
                  <option disabled selected> Type</option>
                  <option>Trousers</option>
                  <option>T-Shirt</option>
                  <option>Tracksuit</option>
                  <option>shoes</option>
                  <option>Sweatshirt</option>
             </select>
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button onClick={handleClick} className="addProductButton">
          Create
        </button>
      </form>
    </div>
  );
}
