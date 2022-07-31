import "./Paginate.css";
import leftarrow from "../../Images/leftarrow.png";
import rightarrow from "../../Images/rightarrow.png";

const Paginate = ({ contactsPerPage, totalContacts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalContacts / contactsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <div className="pagination">
        <img src={leftarrow} alt="" />
        {pageNumbers.map((number) => {
          return (
            <a onClick={() => paginate(number)} href="#!" className="page-link">
              {number}
            </a>
          );
        })}
        <img src={rightarrow} alt="" />
      </div>
    </div>
  );
};

export default Paginate;
