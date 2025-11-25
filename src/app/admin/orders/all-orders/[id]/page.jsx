"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import CustomerInfoForm from "../../../../components/OrderDetails/CustomerInfoForm";
import OrderItemsTable from "../../../../components/OrderDetails/OrderItemsTable";
import EditItemModal from "../../../../components/OrderDetails/EditItemModal";
import OrderActions from "../../../../components/OrderDetails/OrderActions";
// import AddProductModal from "../../../../components/OrderDetails/AddProductModal"; // You'll need to create this component

const EditOrders = () => {
  const router = useRouter();
  const params = useParams();
  const orderId = params.id;

  // State management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    title: "",
    method: "",
    status: "",
    cart: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [currentCartItem, setCurrentCartItem] = useState({
    productId: "",
    title: "",
    price: 0,
    quantity: 1,
  });
  const [currentCartIndex, setCurrentCartIndex] = useState(null);
  const [products, setProducts] = useState([]); // State for available products
  const [searchTerm, setSearchTerm] = useState(""); // For product search

  // Fetch initial data
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        if (orderId) {
          const orderResponse = await axios.get(
            `http://localhost:5001/api/admin/all-order/${orderId}`
          );
          const order = orderResponse.data;
          setFormData({
            name: order.name || "",
            email: order.email || "",
            phone: order.phone || "",
            address: order.address || "",
            title: order.title || "",
            method: order.method || "",
            status: order.status || "",
            cart: order.cart || [],
          });
        }
      } catch (error) {
        console.error("Error fetching initial data:", error);
        toast.error("Failed to load order data");
      }
    };
    fetchInitialData();
  }, [orderId]);

  // Fetch products when add product modal opens
  useEffect(() => {
    const fetchProducts = async () => {
      if (isAddProductModalOpen) {
        try {
          const response = await axios.get("http://localhost:5001/api/products");
          setProducts(response.data);
        } catch (error) {
          console.error("Error fetching products:", error);
          toast.error("Failed to load products");
        }
      }
    };
    fetchProducts();
  }, [isAddProductModalOpen]);

  // Handle cart item edit
  const handleEditClick = (item, index) => {
    setCurrentCartItem(item);
    setCurrentCartIndex(index);
    setIsEditModalOpen(true);
  };

  // Handle add product button click
  const handleAddProductClick = () => {
    setIsAddProductModalOpen(true);
  };

  // Handle cart item changes in modal
  const handleCartItemChange = (e) => {
    const { name, value } = e.target;
    setCurrentCartItem((prev) => ({
      ...prev,
      [name]: name === "quantity" || name === "price" ? Number(value) : value,
    }));
  };

  // Save edited cart item
  const handleSaveCartItem = () => {
    if (!currentCartItem.productId || !currentCartItem.title) {
      toast.error("Product ID and Title are required");
      return;
    }

    setFormData((prev) => {
      const updatedCart = [...prev.cart];
      updatedCart[currentCartIndex] = currentCartItem;
      return {
        ...prev,
        cart: updatedCart,
      };
    });

    setIsEditModalOpen(false);
  };

  // Add new product to cart
  const handleAddProductToCart = (product) => {
    setFormData((prev) => ({
      ...prev,
      cart: [
        ...prev.cart,
        {
          productId: product._id,
          title: product.title,
          price: product.price,
          quantity: 1,
        },
      ],
    }));
    setIsAddProductModalOpen(false);
    toast.success("Product added to order");
  };

  // Remove cart item
  const handleRemoveCartItem = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setFormData((prev) => ({
          ...prev,
          cart: prev.cart.filter((_, i) => i !== index),
        }));
        toast.success("Item removed successfully");
      }
    });
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.put(
        `http://localhost:5001/api/admin/update/all-orders/${orderId}`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      Swal.fire({
        title: "Success!",
        text: "Order updated successfully.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        router.push(`/admin/orders/all-orders`);
      });
    } catch (error) {
      console.error("Error updating order:", error);
      toast.error(error.response?.data?.error || "Order Update Failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Calculate total
  const calculateTotal = () => {
    return formData.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Edit Order #{orderId}</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <CustomerInfoForm formData={formData} handleChange={handleChange} />
            
            <OrderItemsTable 
              cartItems={formData.cart} 
              handleEditClick={handleEditClick} 
              handleRemoveCartItem={handleRemoveCartItem} 
              calculateTotal={calculateTotal}
              onAddProduct={handleAddProductClick} 
            />
          </div>

          <OrderActions 
            isLoading={isLoading} 
            onCancel={() => router.push("/admin/orders/all-orders")} 
            onSubmit={handleSubmit} 
          />
        </form>
      </div>

      <EditItemModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        currentCartItem={currentCartItem}
        handleCartItemChange={handleCartItemChange}
        handleSave={handleSaveCartItem}
      />

      {/* <AddProductModal
        isOpen={isAddProductModalOpen}
        onClose={() => setIsAddProductModalOpen(false)}
        products={filteredProducts}
        searchTerm={searchTerm}
        onSearchChange={(e) => setSearchTerm(e.target.value)}
        onAddProduct={handleAddProductToCart}
      /> */}
    </div>
  );
};

export default EditOrders;