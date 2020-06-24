import React, { useLayoutEffect, useRef, useState } from "react";
import './layout.css';
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

export const LayoutEffect = () => {
  const { state, increment } = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${state}`
  );

  const { quote } = !!data && data[0]; // !!null = false

  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect( () => {
      console.log('Hey');
      setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote])

  return (
    <div>
      <h1> Layout Effect </h1>
      <hr/>

      <blockquote className="blockquote text-right">
        <p ref={pTag} className="mb-0"> {quote} </p>

        {/* <footer className="blockquote-footer">{author}</footer> */}
      </blockquote>

      <pre>
          { JSON.stringify( boxSize, null, 3)}
      </pre>

      <button className="btn btn-lg btn-primary" onClick={increment}>
        Siguiente Quote
      </button>
    </div>
  );
};
