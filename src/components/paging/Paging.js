import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const withPaging = ComponentToPage => {
    class WithPaging extends Component {
      state ={
          page: 0,
          totalPages: 1
      };

      pageForward = () => {
          this.setState(state => ({ page: state.page + 1 }));
      };

      pageBackward = () => {
          this.setState(state=> ({ page: state.page - 1 }));
      };

      updateTotalPages = (totalPages) => {
          this.setState({ totalPages: totalPages });
      }

      render() {
          const { page, totalPages } = this.state;
          return (
          <>
            <Paging   
                page={page}
                totalPages={totalPages}
                pageBackward={this.pageBackward}
                pageForward={this.pageForward}
            />
            <ComponentToPage 
                page={page}
                updateTotalPages={this.updateTotalPages}
                {...this.props}
            />
          </>
          );
      }
    }
    return WithPaging;
};

function Paging({ page, totalPages, pageForward, pageBackward }) {
    return (
      <>  
        {page > 0 && <button onClick={pageBackward}>BACK</button>}
        <span>{page} of {totalPages}</span>
        {page < totalPages && <button onClick={pageForward}>NEXT</button>}
      </>
    );
}

Paging.propTypes = {
    page: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    pageForward: PropTypes.func.isRequired,
    pageBackward: PropTypes.func.isRequired
};

export default Paging;
