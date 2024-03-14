import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject,Toolbar } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';

const Orders = () => {
  const editing = { allowDeleting: true, allowEditing: true ,allowAdding:true };
  
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        toolbar={toolbarOptions}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport,Toolbar]} />
      </GridComponent>
    </div>
  );
};
export default Orders;
