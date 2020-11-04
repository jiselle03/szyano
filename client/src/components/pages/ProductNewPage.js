import React from 'react';

import { Button } from '@material-ui/core';

const ProductNewPage = props => {
    return(
        <Button
            variant="contained"
            component="label"
        >
        Upload File
        <input
            type="file"
            style={{ display: "none" }}
        />
        </Button>
    );
};

export default ProductNewPage;
