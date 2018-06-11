import React from 'react';

const EditExpensivePage = (props) => {
    console.log(props);
    return (
        <div>
            Editing the expensive with id { props.match.params.id }
        </div>
    );
};

export default EditExpensivePage;