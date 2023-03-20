export const Offer = ({ props }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-sm border border-gray-200 m-auto shadow-xl p-2 shadow-slate-300 mt-8">
      <img className="w-full h-96" src={props.url} />

      <span className="mb-3 w-full m-auto text-center text-2xl">{props.title}</span>

      <div className="m-3 w-full h-18 text-center">
        <span>{props.content}</span>
      </div>
    </div>
  );
};

export default Offer;
