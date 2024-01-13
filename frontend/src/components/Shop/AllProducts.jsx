import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React, { useEffect } from "react";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProductsShop } from "../../redux/actions/product";
import { deleteProduct } from "../../redux/actions/product";
import Loader from "../Layout/Loader";

const AllProducts = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const { seller } = useSelector((state) => state.seller);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsShop(seller._id));
  }, [dispatch, seller._id]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    window.location.reload();
  };

  const columns = [
    {
      field: "productNo",
      headerName: "Product No",
      minWidth: 180,
      flex: 0.2,
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 180,
      flex: 0.4,
    },
    {
      field: "sourceName",
      headerName: "Source Name",
      minWidth: 50,
      flex: 0.3,
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 100,
      flex: 0.3,
    },
    {
      field: "Stock",
      headerName: "Stock",
      minWidth: 80,
      flex: 0.3,
    },

    {
      field: "sold",
      headerName: "Sold out",
      minWidth: 130,
      flex: 0.2,
    },
    {
      field: "Preview",
      flex: 0.2,
      minWidth: 100,
      headerName: "",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.id}`}>
              <Button>
                <AiOutlineEye size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
    {
      field: "Delete",
      flex: 0.2,
      minWidth: 120,
      headerName: "",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => handleDelete(params.id)}>
              <AiOutlineDelete size={20} />
            </Button>
          </>
        );
      },
    },
    {
      field: "Edit",
      flex: 0.2,
      minWidth: 120,
      headerName: "",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/dashboard-create-product/${params.id}`}>
              <Button>
                <AiOutlineEdit size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  products &&
    products.forEach((item) => {
      row.push({
        id: item._id,
        productNo: item.productNo,
        name: item.name,
        sourceName: item.sourceName,
        // price: "US$ " + item.discountPrice,
        price: "Rs " + item.discountPrice,
        Stock: item.stock,
        sold: item?.sold_out,
      });
    });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
        </div>
      )}
    </>
  );
};

export default AllProducts;
