import { Button, Modal } from 'antd';
import { useState } from 'react';
import { IoLogoReact, IoLogoTiktok, IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from 'react-icons/io5';
import { SiTypescript } from 'react-icons/si';
import { BsArrowRight } from 'react-icons/bs';
import { IpcNetConnectOpts } from 'net';
import Item from 'antd/es/list/Item';

interface IProject {
  image: JSX.Element;
  title: string;
  shortDesc: string;
  detail: {
    desc: string;
    frontend: string;
    backend: string;
    member: number;
    role: string;
    demo: string;
    github: string;
  };
}

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dataDetail, setDataDetail] = useState<IProject | null>(null);
  const handleClickDetail = (project: IProject) => {
    setIsModalOpen(true);
    setDataDetail(project);
  };
  const handleCancel = () => {
    setDataDetail(null);
    setIsModalOpen(false);
  };

  const dataProject: IProject[] = [
    {
      image: <IoLogoReact size={50} color={'#2bebfd'} />,
      title: 'ShopEasy',
      shortDesc: 'A comprehensive e-commerce platform with user-friendly design and robust backend capabilities.',
      detail: {
        desc: 'This project involves the development of a complete e-commerce solution with user authentication, product management, and order processing.',
        frontend: 'React (Typescript), Redux toolkit, Ant Design',
        backend: 'Node.Js (Express), MongoDB',
        member: 3,
        role: 'Lead Developer',
        demo: 'https://github.com/ductt7575/react-ts-ecommerce-demo',
        github: 'https://github.com/ductt7575/react-ts-ecommerce',
      },
    },
    {
      image: <IoLogoTiktok size={50} color={'#69C9D0'} />,
      title: 'Blogger Haven',
      shortDesc: 'A platform for blogging with post creation, editing, and user interaction features.',
      detail: {
        desc: 'This project includes features like user authentication, post creation/editing, and comment functionality.',
        frontend: 'React (Typescript), Redux toolkit, Ant Design',
        backend: 'Node.Js (Express), MongoDB',
        member: 2,
        role: 'Full Stack Developer',
        demo: 'https://github.com/ductt7575/react-ts-blog-demo',
        github: 'https://github.com/ductt7575/react-ts-blog',
      },
    },
    {
      image: <IoLogoFacebook size={50} color={'#1877F2'} />,
      title: 'Connectify Network',
      shortDesc: 'A social network with real-time chat, friend requests, and user profile features.',
      detail: {
        desc: 'The project aims to create a platform for users to connect, share updates, and chat in real-time.',
        frontend: 'React (Typescript), Redux toolkit, Ant Design',
        backend: 'Node.Js (Express), MongoDB',
        member: 4,
        role: 'Frontend Developer',
        demo: 'https://github.com/ductt7575/react-ts-social-network-demo',
        github: 'https://github.com/ductt7575/react-ts-social-network',
      },
    },
    {
      image: <IoLogoTwitter size={50} color={'#1DA1F2'} />,
      title: 'TaskMaster Pro',
      shortDesc: 'A task management app to organize tasks, projects, and track deadlines efficiently.',
      detail: {
        desc: 'Features include task creation, deadline tracking, and project management tools.',
        frontend: 'React (Typescript), Redux toolkit, Ant Design',
        backend: 'Node.Js (Express), MongoDB',
        member: 1,
        role: 'Developer',
        demo: 'https://github.com/ductt7575/react-ts-task-manager-demo',
        github: 'https://github.com/ductt7575/react-ts-task-manager',
      },
    },
    {
      image: <IoLogoInstagram size={50} color={'#E4405F'} />,
      title: 'Creative Portfolio',
      shortDesc: 'A personal portfolio to showcase projects, skills, and experiences with a responsive design.',
      detail: {
        desc: 'This project features a responsive design with sections for projects, skills, and contact information.',
        frontend: 'React (Typescript), Redux toolkit, Ant Design',
        backend: 'Node.Js (Express), MongoDB',
        member: 1,
        role: 'Developer',
        demo: 'https://github.com/ductt7575/react-ts-portfolio-demo',
        github: 'https://github.com/ductt7575/react-ts-portfolio',
      },
    },
    {
      image: <SiTypescript size={50} color={'#3178C6'} />,
      title: 'ChatterBox',
      shortDesc: 'A real-time chat app with multiple chat rooms and private messaging capabilities.',
      detail: {
        desc: 'Users can join chat rooms, send private messages, and see real-time updates.',
        frontend: 'React (Typescript), Redux toolkit, Ant Design',
        backend: 'Node.Js (Express), MongoDB',
        member: 3,
        role: 'Backend Developer',
        demo: 'https://github.com/ductt7575/react-ts-chat-app-demo',
        github: 'https://github.com/ductt7575/react-ts-chat-app',
      },
    },
  ];

  return (
    <>
      <Modal
        title={dataDetail?.title}
        open={isModalOpen}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        maskClosable={false}
      >
        <p>&nbsp;&bull;&nbsp; Description: {dataDetail?.detail.desc}</p>
        <p>&nbsp;&bull;&nbsp; Frontend: {dataDetail?.detail.frontend}</p>
        <p>&nbsp;&bull;&nbsp; Backend: {dataDetail?.detail.backend}</p>
        <p>&nbsp;&bull;&nbsp; Member: {dataDetail?.detail.member}</p>
        <p>&nbsp;&bull;&nbsp; Role: {dataDetail?.detail.role}</p>
        <p>
          &nbsp;&bull;&nbsp; Demo:&nbsp;
          <a href="{dataDetail.detail.demo}" target="_blank">
            {dataDetail?.detail.demo}
          </a>
        </p>
        <p>
          &nbsp;&bull;&nbsp; Github:&nbsp;
          <a href="{dataDetail.detail.github}" target="_blank">
            {dataDetail?.detail.github}
          </a>
        </p>
      </Modal>
      <div className="arlo_tm_section" id="projects">
        <div className="arlo_tm_services_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>Amazing Projects</h3>
              <span>Meet our amazing services</span>
            </div>
            <div className="list_wrap">
              <ul>
                {dataProject &&
                  dataProject.length > 0 &&
                  dataProject.map((project, index) => {
                    return (
                      <li>
                        <div className="inner">
                          <div className="icon">{project.image}</div>
                          <div className="title_service">
                            <h3>{project.title}</h3>
                          </div>
                          <div className="text">
                            <p>{project.shortDesc}</p>
                          </div>
                          <div className="view_detail" style={{ padding: '5px 0', marginTop: '12px' }}>
                            <span
                              style={{
                                cursor: 'pointer',
                                color: '#007bff', // màu xanh đậm, thường thấy ở các liên kết
                                textDecoration: 'underline', // thêm gạch chân
                                display: 'flex', // dùng flexbox để căn giữa icon và text
                                alignItems: 'center',
                                fontWeight: 'bold', // làm chữ đậm hơn
                              }}
                              onClick={() => {
                                handleClickDetail(project);
                              }}
                            >
                              <BsArrowRight style={{ marginRight: '10px' }} /> More details
                            </span>
                          </div>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Projects;
