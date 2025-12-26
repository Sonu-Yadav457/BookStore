import React from "react";

// import list from "../../public/list.json";
import Cards from "./Cards";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Courses = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get("http://localhost:3000/book");
        // console.log(response.data);
        setBook(response.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    getBook();
  }, []);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  // console.log(list);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-24">
        <div className="mt-10 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We are delhigted to have you{" "}
            <span className="text-pink-400">here</span>
          </h1>
          <p className="mt-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            consequatur nostrum ipsam voluptates distinctio! Tempore alias
            soluta dolorum voluptatem iusto repudiandae, unde nulla architecto
            facere fugit quas. Impedit iusto culpa reprehenderit magnam,
            laudantium ipsa laboriosam tenetur magni dolorem animi consequuntur
            blanditiis velit, voluptates temporibus ipsam at sit repudiandae
            ducimus odit.
          </p>
          <button className="btn btn-secondary mt-2" onClick={handleBack}>
            Back
          </button>
        </div>
        <div className="m-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
