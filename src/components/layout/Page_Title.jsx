import React from 'react';

// ToolbarContainer component
function ToolbarContainer({ toolbarContent }) {
    return (
      <div className="d-flex flex-grow-1 justify-content-md-end justify-content-sm-start align-items-center toolbar">
        {toolbarContent}
      </div>
    );
  }

function PageTitle({title, toolbar}) {
  return (
    <div className="page-title py-2">
      <div className="row align-items-center">
        <div className="col-md-3 col-sm-12">
         
          <div className="d-flex align-items-end">
            <h1 className="mb-0">
              {title}
            </h1>
          </div>
        </div>
        <div className="col-md-9 col-sm-12 text-end">
          <ToolbarContainer toolbarContent={toolbar} />
        </div>
      </div>
    </div>
  );
}

export default PageTitle;
