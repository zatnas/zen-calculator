"use client";

export default function Button({text, colSize} : {text: string, colSize: number}) {
  let className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-full w-full";
  let divClassName = "";
  if (colSize == 2) {
    divClassName += "col-span-2";
  }
  return (
    <div className={divClassName}>
      <button className={className} onClick={() => console.log("hello")}>
        {text}
      </button>
    </div>
  );
}
