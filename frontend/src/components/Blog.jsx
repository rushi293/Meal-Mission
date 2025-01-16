import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios';
import ConString from "../ConnectionString";

function Blog() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${ConString}get_blog_post`,
                    {
                        withCredentials: true,
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }
                );
                setBlogs(response.data.allBlogs)
                console.log(response);
                console.log("response");
                // setBlogs(response.data.finalDrives);
            } catch (error) {
                console.error('Error fetching data:', error);
                toast.error(error.response.data.message);
            }
        }
        fetchData();
    }, []);
    return (
        <>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="-my-8 divide-y-2 divide-gray-100">
                        {blogs.map((blog) => (
                            <div class="py-8 flex flex-wrap md:flex-nowrap">
                                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <span class="font-semibold title-font text-gray-700">{blog.topic}</span>
                                    <span class="mt-1 text-gray-500 text-sm">{new Date(blog.updatedAt).toLocaleString("en-US", { timeZone: "Asia/Kolkata", hour12: false })}</span>
                                </div>
                                <div class="md:flex-grow">
                                    <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{blog.title}</h2>
                                    <p class="leading-relaxed">{blog.message}</p>
                                    <a target='_blank' href={blog.url} class="text-purple-500 inline-flex items-center mt-4">Read More
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>))}
                    </div>
                </div>
            </section>

        </>
    )
}

export default Blog
