// eslint-disable-next-line react/prop-types
const Card = ({children, bg="bg-amber-50"}) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-2xl card`}>
      {children}
    </div>
  );
}
export default Card;