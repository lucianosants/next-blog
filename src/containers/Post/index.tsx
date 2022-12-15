import { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import { MainContainer } from '../../components/MainContainer';
import { PostData } from '../../domain/posts/post';

interface IPostProps {
    post: PostData;
}

export const Post = ({ post }: IPostProps) => {
    return (
        <>
            <Header />
            <MainContainer>
                <Heading>{post?.attributes.title}</Heading>
                <div dangerouslySetInnerHTML={{ __html: post?.content }} />
            </MainContainer>
            <Footer />
        </>
    );
};
