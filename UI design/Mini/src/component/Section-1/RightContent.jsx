import { Cards } from "./Cards";

export const RightContent = (props) => {
  return (
    <div className=" h-full w-2/3 p-5 flex justify-between">
      {props.users.map(function (elem) {
        return <Cards color={elem.color} img={elem.img} tag={elem.tag} id={elem.id} />;
      })}
    </div>
  );
};
