import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({ post }) => {
    return (
        <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
            <div className='flex content-center align-center overflow-hidden shadow-md mb-6' >
                <img
                    src={post.featuredImage.url}
                    alt={post.title}
                    className='shrink-0 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
                />
            </div>
            <h1 className='transition duration-700 text-center mb-8 cursor:pointer hover:text-pink-600 text-3xl font-semibold'>
                <Link href={`/post/${post.slug}`}>
                    {post.title}
                </Link>
            </h1>
            <div className='block lg:flex text-center items-center justify-center mb-8 width-full'>
                <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
                    <img alt={post.author.name}
                        height='30px'
                        width='30px'
                        className='align-middle rounded-full'
                        src={post.author.photo.url}
                    />
                    <p className='inline align-middle text-gray-700 ml-2 text-lg'>
                        {post.author.name}
                    </p>
                </div>
                <div className='font-medium text-gray-700'>
                    <svg className='h-6 w-6 inline mr-2 text-pink-800' fill="none" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.89" stroke="currentColor">
                        <title>date</title>
                        <path d="M81.61,4.73C81.61,2.12,84.19,0,87.38,0s5.77,2.12,5.77,4.73V25.45c0,2.61-2.58,4.73-5.77,4.73s-5.77-2.12-5.77-4.73V4.73ZM66.11,105.66c-.8,0-.8-10.1,0-10.1H81.9c.8,0,.8,10.1,0,10.1ZM15.85,68.94c-.8,0-.8-10.1,0-10.1H31.64c.8,0,.8,10.1,0,10.1Zm25.13,0c-.8,0-.8-10.1,0-10.1H56.77c.8,0,.8,10.1,0,10.1Zm25.13,0c-.8,0-.8-10.1,0-10.1H81.9c.8,0,.8,10.1,0,10.1Zm25.14-10.1H107c.8,0,.8,10.1,0,10.1H91.25c-.8,0-.8-10.1,0-10.1ZM15.85,87.3c-.8,0-.8-10.1,0-10.1H31.64c.8,0,.8,10.1,0,10.1ZM41,87.3c-.8,0-.8-10.1,0-10.1H56.77c.8,0,.8,10.1,0,10.1Zm25.13,0c-.8,0-.8-10.1,0-10.1H81.9c.8,0,.8,10.1,0,10.1Zm25.14,0c-.8,0-.8-10.1,0-10.1H107c.8,0,.8,10.1,0,10.1Zm-75.4,18.36c-.8,0-.8-10.1,0-10.1H31.64c.8,0,.8,10.1,0,10.1Zm25.13,0c-.8,0-.8-10.1,0-10.1H56.77c.8,0,.8,10.1,0,10.1ZM29.61,4.73C29.61,2.12,32.19,0,35.38,0s5.77,2.12,5.77,4.73V25.45c0,2.61-2.58,4.73-5.77,4.73s-5.77-2.12-5.77-4.73V4.73ZM6.4,43.47H116.47v-22a3,3,0,0,0-.86-2.07,2.92,2.92,0,0,0-2.07-.86H103a3.2,3.2,0,0,1,0-6.4h10.55a9.36,9.36,0,0,1,9.33,9.33v92.09a9.36,9.36,0,0,1-9.33,9.33H9.33A9.36,9.36,0,0,1,0,113.55V21.47a9.36,9.36,0,0,1,9.33-9.33H20.6a3.2,3.2,0,1,1,0,6.4H9.33a3,3,0,0,0-2.07.86,2.92,2.92,0,0,0-.86,2.07v22Zm110.08,6.41H6.4v63.67a3,3,0,0,0,.86,2.07,2.92,2.92,0,0,0,2.07.86H113.55a3,3,0,0,0,2.07-.86,2.92,2.92,0,0,0,.86-2.07V49.88ZM50.43,18.54a3.2,3.2,0,0,1,0-6.4H71.92a3.2,3.2,0,1,1,0,6.4Z" />
                    </svg>
                    <span>
                        {moment(post.createdAt).format('MMM DD, YYYY')}
                    </span>
                </div>

            </div>
            <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8'>
                {post.excerpt}
            </p>
            <div className='text-center'>
                <Link href={`/post/${post.slug}`}>
                    <span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer'>
                        Continue Reading
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default PostCard