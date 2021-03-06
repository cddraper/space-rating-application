// external dependencies
import React from 'react';
import styled from 'styled-components';

// internal dependencies
import SpaceList from './SpaceList';

// styled components
const Wrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100vw',
    minHeight: '88%',
    backgroundColor: '#EFF2F1'
})

const Container = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#DEE2DF',
    padding: '3rem 0 5rem 0',
})

const Intro = styled.p({
    padding: '1rem 0.5rem 0.5rem 0.5rem',
    width: '26rem',
    textAlign: 'center',
})

// const CreateButton = styled.button({
//     borderRadius: '3px',
//     padding: '0.5rem',
//     backgroundColor: '#2456e0',
//     color: '#FFFFFF',
//     fontSize: '16px',
//     marginTop: '1rem',
//     outline: 'none',
//     ':hover': {
//         cursor: 'pointer',
//     },
//     ':active': {
//         backgroundColor: '#a1bbe6',
//         color: '#2456e0',
//     }
// })

// const Success = styled.div({
//     position: 'absolute',
//     top: '5rem',
//     display: 'flex',
//     height: '40px',
//     width: '50%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     color: '#286620',
//     backgroundColor: '#adf7a3',
//     borderRadius: '8px',

// })

// component definition
const Home = (props) => {

    if(props.history.location.state === undefined) {
        props.history.location.state = false
    }

    // const handleCreateClick = () => {
    //     props.history.push('/spaces/new')
    // }

    return (
        <>
            <Wrapper>
                <Container>
                    {/* {props.history.location.state.successfulUpdate && <Success>Space updated successfully</Success>}
                    {props.history.location.state.successfulSubmit && <Success>Space created successfully</Success>} */}
                    <h2>Welcome to Third Rate!</h2>
                    <Intro>Check out the complete list of spaces below. Click the space to view more details. You can also login or signup to create and manage spaces.</Intro>
                    {/* <CreateButton onClick={() => handleCreateClick()}>Create a new space</CreateButton> */}
                </Container>
                <SpaceList />
            </Wrapper>
        </>
    )
}

export default Home;
