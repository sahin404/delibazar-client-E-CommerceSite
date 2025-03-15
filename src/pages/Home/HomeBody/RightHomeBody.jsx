import Banner from "../Banner/Banner"

const RightHomeBody = ({ category }) => {
  // console.log(category_name);
  return (
    <div>
      <Banner></Banner>
      <div className="text-3xl text-black">
        {category}
      </div>

    </div>
  )
}

export default RightHomeBody