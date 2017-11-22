import React from "react";
import ReactPaginate from "react-paginate";
import { Wrapper, More } from "./styled";
import "./styles.css";
import prev from "./prev.svg";
import next from "./next.svg";

class Rating extends React.Component {
  render() {
    return (
      <Wrapper>
        <ReactPaginate
          previousLabel={<img src={prev} alt="prev" />}
          nextLabel={<img src={next} alt="next" />}
          breakLabel={<a href="">...</a>} // shit
          breakClassName={"break-me"}
          // pageCount={this.state.pageCount}
          pageCount={17}
          marginPagesDisplayed={2}
          pageRangeDisplayed={0}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
        <More>1—6 of 100+ Rentals</More>
      </Wrapper>
    );
  }
}
export default Rating;
