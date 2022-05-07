import React from 'react';
import PageContainer from "../common/PageContainer";

const Main = (props) => {
    return (
        <main>
            <PageContainer  clicked={props.clicked}></PageContainer>
        </main>
    );
};

export default Main;