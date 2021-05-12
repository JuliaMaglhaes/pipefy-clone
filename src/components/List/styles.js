import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 15px;
    height: 100%;
    flex: 0 0 320px;
    opacity: ${props => props.done ? 0.6 : 1};
    overflow-y:visible;

    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
    background: transparent; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #888; 
    }

    & + div {
        border-left: 1px solid rgba(0, 0, 0, 0.05);
    }

    .titulobarra{
        position:absolute;
        background-color:#ecf1f8;
        width:290px;
        z-index:999;
        height:49px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 49px;
        

        h2 {
        font-weight: 500;
        font-size: 16px;
        padding: 0 10px;
        }

        button {
        width: 42px;
        height: 42px;
        border-radius: 18px;
        background: #3b5bfd;
        border: 0;
        cursor: pointer;
        }
    }

    ul {
        margin-top: 35px;
    }
`;