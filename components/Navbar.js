import React, { useEffect } from "react";
import styles from "../styles/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { Drawer, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { menuItems } from "../helper/menu";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  // const [size, setSize] = React.useState();

  useEffect(() => {
    window.onscroll = () => {
      console.log(window.innerWidth);
    };
  });

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.navbar_start}>
          <Link href="/#mainpage">
            <Image
              src="/assets/images/speakiee orange.png"
              height={200}
              width={200}
              alt="img not found"
              className={styles.img}
            />
          </Link>
        </div>
        <div className={styles.navbar_middle} id={styles.middle}>
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="about">About us</a>
            </li>
            <li tabIndex={0}>
              <a>
                Services
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li>
                  <a href="/findmoreservice">Frontend Developer</a>
                </li>
                <li>
                  <a>Backend developer</a>
                </li>
                <li>
                  <a>Full stact developer</a>
                </li>
                <li>
                  <a>Mobile App developer</a>
                </li>
                <li>
                  <a>Ios developer</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Clients</a>
            </li>
            <li>
              <a>join Us / careers</a>
            </li>
            <li>
              <a>Our Block</a>
            </li>
            <li>
              <a>Partners</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
          </ul>
        </div>
        <div
          className={styles.navbar_end}
          id="menu-bar"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <MenuOutlined />
        </div>
      </div>
      <div className={styles.drawer}>
        <Drawer open={open} onClose={() => setOpen(!open)} width={220}>
          <Menu mode="inline">
            {menuItems.map((res) => {
              return res?.children ? (
                <Menu.SubMenu title={res.label} key={res.id}>
                  {res.children.map((subMenu) => {
                    return (
                      <Link href={subMenu.link}>
                        <Menu.Item>{subMenu.label}</Menu.Item>
                      </Link>
                    );
                  })}
                </Menu.SubMenu>
              ) : (
                <Link href={res.link}>
                  <Menu.Item icon={res.icon}>{res.label}</Menu.Item>
                </Link>
              );
            })}
          </Menu>
        </Drawer>
      </div>
    </div>
  );
}

export default Navbar;
