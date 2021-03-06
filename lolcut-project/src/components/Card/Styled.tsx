import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    width: 20rem;
    flex-direction: column;
    background-color: #f8f9fa;
    transition: transform 0.5s;
    &:hover {
        transform: translateY(-1rem);
    }
    > a.img-wrapper {
        width: 100%;
        > div {
            > img {
                width: 100%;
                height: 100%;
                display: block;
                object-fit: cover;
                border-radius: 4px 4px 0px 0px;
            }
        }
    }
    > div.title-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 48%;
        padding: 0.5rem 0;
        background-color: white;
        > a {
            display: flex;
            flex-direction:column;
            height: 80%;
            .title {
                padding: 18px 0 10px 13px;
                font-size: 16px;
                font-weight: bold;
            }
            .sub-title {
                font-size: 14px;
                color: #495057;
                padding: 0 15px 0 10px;
                margin: 0;
                line-height: 20px;
            }
        }
        > div {
            > span {
                font-size: 13px;
                padding: 0 0 0 10px;
            }
        }
    }
    > div.line {
        height: 1px;
        background-color: #f8f9fa;
    }
    > div.sub-information-wrapper {
        width: 100%;
        height: 10%;
        padding: 0.5rem 0;
        background-color: white;
        > a {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            > span {
                padding: 0 0 0 12px;
                font-size: 12px;
                font-weight: 100;
            }
        }
        border-radius: 0px 0px 4px 4px;
        box-shadow: 5px 5px 20px -12px gray;
    }
`;