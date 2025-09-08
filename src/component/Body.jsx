import React, { useState, useEffect } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

const Body = () => {
  const [res, setres] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [inputData, setInputData] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await fetch("https://fakestoreapi.com/products");
      const json = await data.json();
      setres(json);
      setFilterData(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // auto filter when input changes
  useEffect(() => {
    if (inputData.trim() === "") {
      setFilterData(res);
    } else {
      const datafilter = res.filter((item) =>
        item.title.toLowerCase().includes(inputData.toLowerCase())
      );
      setFilterData(datafilter);
    }
  }, [inputData ,res]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">🛍️ Fake Store</h1>

      <div className="flex gap-4 justify-center">
        <input
          type="text"
          placeholder="Search Your Product"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 w-64"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {loading ? (
          <div className="col-span-full text-center text-gray-500">Loading...</div>
        ) : filterData.length > 0 ? (
          filterData.map((data) => (
            <Link key={data.id} to={`/res/${data.id}`}>
            <Card key={data.id} resdata={data} /></Link>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">No products found</div>
        )}
      </div>
    </div>
  );
};

export default Body;
