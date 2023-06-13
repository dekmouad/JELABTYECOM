import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import {Link} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../redux/apiCalls";

// React component for displaying a list of products
export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);


  // Fetch products when the component mounts
  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

    // Handle deletion of a product
  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

    // Configuration for the columns in the DataGrid

  const columns = [
        // ID column

    { field: "_id", headerName: "ID", width: 220 },
    {
          // Product column

      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
        // Stock column

    { field: "inStock", headerName: "Stock", width: 200 },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
        // Action column

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

    // Render the ProductList page

  return (

    <div className="productList">
            {/*Link to create a new product*/}
      <Link to="/newproduct">
        <button className="productAddButton">Create</button>
      </Link>
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
      />

    </div>
  );
}
