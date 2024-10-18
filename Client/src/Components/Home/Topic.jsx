import React from 'react';
import img1 from "../../assets/cover/cover1.jpg";
import img2 from "../../assets/cover/cover2.jpg";
import img3 from "../../assets/cover/cover3.jpg";

const data = [
    {
        id: 1,
        title: "The Best of 2021",
        img: img1,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et eros eget sapien fermentum ultricies. Nullam nec nunc nec nunc.",
        author: "John Doe",
        date: "2021-08-12",
        category: ["Tech", "Music", "Life"],
        avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        id: 2,
        title: "The Best of 2020",
        img: img2,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et eros eget sapien fermentum ultricies. Nullam nec nunc nec nunc.",
        author: "John Doe",
        date: "2021-08-12",
        category: ["Tech", "Music"],
        avatar: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
        id: 3,
        title: "The Best of 2019",
        img: img3,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et eros eget sapien fermentum ultricies. Nullam nec nunc nec nunc.",
        author: "John Doe",
        date: "2021-08-12",
        category: ["Tech", "Life"],
        avatar: "https://randomuser.me/api/portraits/men/3.jpg"
    }
];

const Topic = () => {
    return (
        <div className='w-[80%] mx-auto mt-10 mb-8'>
            <h1 className='text-4xl font-semibold mb-4'>Popular Topics</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {data.map((item) => (
                    <div key={item.id} className='rounded-lg overflow-hidden bg-white'>
                        <img src={item.img} alt={`Cover for ${item.title}`} className='w-full h-48 object-cover' />
                       <div className='flex flex-col gap-3 py-4 px-4 '>
                       <p className='text-gray-700'> {item.date}</p>
                        <h2 className='text-2xl font-semibold'>{item.title}</h2>
                        <p className='text-gray-700'>{item.desc}</p>
                        <hr />
                        <div className='flex gap-4 w-full items-center self-center'>
                            <img src={item.avatar}  alt="" className='w-24 h-24 rounded-full' />
                            <p>{item.author}</p>
                        </div>
                       </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Topic;
