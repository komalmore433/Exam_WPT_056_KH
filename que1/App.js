import React from "react";
import { useState } from "react";
export default function App() {
  return (
    <div>
      <Fun />
    </div>
  );
}

function Fun() {
  const [appname, setapp] = useState("Myapp");
  const [stdname, setname] = useState("KOMAL");
  const [stdid, setid] = useState("056");
  const [mesg, setmesg] = useState(" ");
  const [list, setlist] = useState([]);
  const [validation, setval] = useState(false);

  const mesgch = (e) => {
    setmesg(e.target.value);
  };

  //let count = 0;
  const addmesg = () => {
    if (mesg == " ") {
      setval(true);
    } else {
      setval(false);
    }

    // if (mesg.index % 2 == 0) {
    //   <div className="text-right">
    //     const newlist = [mesg, ...list]; setlist(newlist);
    //   </div>;
    // } else {
    //   <div>const newlist = [mesg, ...list]; setlist(newlist);</div>;
    // }
    const newlist = [mesg, ...list];
    setlist(newlist);
    setmesg(" ");
  };
  return (
    <div>
      <diV className="bg bg-secondary p-3 text-light my-2 text-center">
        <h1>
          {appname}
          <span>
            <h6>
              by {stdname} {stdid}
            </h6>
          </span>
        </h1>
      </diV>

      <div className=" m-2">
        <input
          type="text"
          value={mesg}
          onChange={mesgch}
          className={
            mesg == " " && validation ? "border border-danger border-3" : " "
          }
        />
        <input
          type="button"
          value="SEND"
          className="btn btn-secondary m-3"
          onClick={addmesg}
        />
      </div>

      <div>
        {list.map((item, index) => (
          <div key={index} className="bg bg-secondary m-3 h-80%">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
