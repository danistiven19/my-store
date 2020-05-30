import React from 'react';

const RowCategory = (props) => (
  <>
  <tr>
    <td colSpan="5" className="text-center bg-light font-weight-bold">
      {props.category}
    </td>
  </tr>
  </>
);

export default RowCategory;
